<script lang="ts">

import { CodeTabsGroup, CodeTabsManager } from "./CodeTabsManager";

export default {
    name: "CodeTabsSyncComponent",
    data() {
        return {
            codeTabsManager: new CodeTabsManager()
        };
    },
    mounted() {
        const groupsDiv: HTMLDivElement = document.getElementsByClassName("vp-code-group");

        for (const groupDiv: HTMLElement of groupsDiv) {
            const tabsDiv: HTMLDivElement = groupDiv.getElementsByClassName("tabs")[0] as HTMLDivElement;
            const inputs: HTMLCollection = tabsDiv.getElementsByTagName("input");
            const blocksDiv: HTMLDivElement = groupDiv.getElementsByClassName("blocks")[0] as HTMLDivElement;

            let codeGroups: { [key: string]: { input: HTMLInputElement, block: HTMLDivElement } } = {};

            for (let i = 0; i < inputs.length; i++) {
                const input: HTMLInputElement = inputs[i];
                const label: HTMLLabelElement = input.nextElementSibling as HTMLLabelElement;
                const inputType: string = label.getAttribute("data-title");
                const block: HTMLDivElement = blocksDiv.children[i] as HTMLDivElement;

                codeGroups[inputType] = { input, block };
            }

            const namespace = Object.keys(codeGroups).join("|");

            for (const [inputType, { input, block }] of Object.entries(codeGroups)) {
                this.codeTabsManager.registerGroup(new CodeTabsGroup(namespace, inputType, input, block));

                input.addEventListener("change", () => {
                    if (input.checked) {
                        this.codeTabsManager.showAndStore(namespace, inputType);
                    }
                });
            }

            this.codeTabsManager.showStored(namespace);
        }
    },
    beforeUnmount() {
        this.codeTabsManager.shutdown();
    }
};
</script>
<template></template>