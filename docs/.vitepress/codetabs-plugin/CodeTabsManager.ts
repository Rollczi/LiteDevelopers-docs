
export class CodeTabsManager {
    groupsByTypeByNamespace: { [key: string]: { [key: string]: CodeTabsGroup[] } } = {};

    registerGroup(group: CodeTabsGroup) {
        if (!this.groupsByTypeByNamespace[group.namespace]) {
            this.groupsByTypeByNamespace[group.namespace] = {};
        }

        if (!this.groupsByTypeByNamespace[group.namespace][group.inputType]) {
            this.groupsByTypeByNamespace[group.namespace][group.inputType] = [];
        }

        this.groupsByTypeByNamespace[group.namespace][group.inputType].push(group);
    }

    showAndStore(namespace: string, inputType: string) {
        this.show(namespace, inputType);
        localStorage.setItem('codeTabsState:' + namespace, inputType);
    }

    show(namespace: string, type: string) {
        const byNamespace = this.groupsByTypeByNamespace[namespace];

        if (!byNamespace) {
            return;
        }

        const groups = byNamespace[type];
        if (!groups) {
            return;
        }

        let anyShown = false;
        for (const group of groups) {
            group.show();
            anyShown = true;
        }

        if (!anyShown) {
            return;
        }

        for (const groups of Object.values(byNamespace)) {
            for (const group of groups) {
                if (group.inputType === type) {
                    break
                }

                group.hide();
            }
        }
    }

    showStored(namespace: string) {
        const type = localStorage.getItem('codeTabsState:' + namespace);

        if (!type) {
            return;
        }

        this.show(namespace, type);
    }

    shutdown() {
        for (const byNamespace of Object.values(this.groupsByTypeByNamespace)) {
            for (const groups of Object.values(byNamespace)) {
                for (const group of groups) {
                    group.shutdown();
                }
            }
        }

        this.groupsByTypeByNamespace = {};
    }

}

export class CodeTabsGroup {
    namespace: string;
    inputType: string;
    input: HTMLInputElement;
    block: HTMLDivElement;
    visible: boolean = false;
    mutationObserver: MutationObserver;

    constructor(namespace: string, inputType: string, input: HTMLInputElement, block: HTMLDivElement) {
        this.namespace = namespace;
        this.inputType = inputType;
        this.input = input;
        this.block = block;
        this.visible = input.checked;

        this.mutationObserver = createBlockObserver(this)
    }

    show() {
        this.input.checked = true;
        this.block.classList.add("active");
        this.visible = true;
    }

    hide() {
        this.input.checked = false;
        this.block.classList.remove("active");
        this.visible = false;
    }

    shutdown() {
        this.mutationObserver.disconnect();
    }
}

/** This function creates a MutationObserver that listens for changes in the class attribute of the block element.
 * Because we can't control vue components from the outside, we need to listen for changes in the class attribute of the block element.
 */
function createBlockObserver(group: CodeTabsGroup): MutationObserver {
    let mutationObserver = new MutationObserver(mutations => mutations.forEach(mutation => {
        if (mutation.attributeName !== "class") {
            return;
        }

        const isActive = group.block.classList.contains("active");

        if (group.visible && !isActive) {
            group.block.classList.add("active");
        }

        if (!group.visible && isActive) {
            group.block.classList.remove("active");
        }
    }));

    mutationObserver.observe(group.block, {
        attributes: true,
        attributeFilter: ['class']
    });

    return mutationObserver;
}