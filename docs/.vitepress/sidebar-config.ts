import { generateSidebar, type Sidebar, type SidebarItem, type VitePressSidebarOptions } from "vitepress-sidebar";

export function createSidebar(): Sidebar {
    const sidebar = generateSidebar(vitepressSidebarOptions);
    return postProcessSidebar(sidebar);
}

const vitepressSidebarOptions: VitePressSidebarOptions[] = [
    createSidebarOptions("/documentation/litecommands/", [
        "what-is-litecommands.md",
        "platforms.md",
        "intellij-idea-plugin.md",
        "examples.md",

        "getting-started",
        "dependencies.md",
        "configure-builder.md",
        "first-command.md",

        "command-and-executor.md",
        "context",
        "supported-context-types.md",
        "permission",

        "arguments",
        "arg",
        "java-types.md",
        "platform-types.md",

        "arg-optional.md",
        "quoted.md",
        "flag.md",
        "varargs.md",
        "join.md",

        "features",
        "cooldown.md",
        "execute-default.md",
        "shortcut.md",
        "root-command.md",

        "asynchronous",
        "async-annotation.md",
        "strict-mode.md",
        "priority.md",

        "extensions",

        "advanced",
        "nightly.md",
        "argument-with-key.md",
    ]),
    createSidebarOptions("/documentation/liteskullapi/", [
        "dependencies.md",
        "initialize.md",
    ]),
    createSidebarOptions("/documentation/litechairs/", []),
];

function createSidebarOptions(path: string, sort: string[]): VitePressSidebarOptions {
    return {
        documentRootPath: "docs",
        basePath: "/",
        scanStartPath: path,
        resolvePath: path,
        keepMarkdownSyntaxFromTitle: true,
        useTitleFromFileHeading: true,
        sortMenusOrderByDescending: true,
        capitalizeFirst: true,
        hyphenToSpace: true,
        manualSortFileNameByPriority: sort,
    }
}

function postProcessSidebar(sidebar: Sidebar): Sidebar {
    if (Array.isArray(sidebar)) {
        return sidebar;
    }

    sidebar["/documentation/introduction/"] = {
        base: "/documentation/",
        items: [
            { text: "Projects", link: "/introduction/projects", items: [
                    { text: "LiteCommands", link: "/litecommands/what-is-litecommands" },
                    { text: "LiteSkullAPI", link: "/liteskullapi/getting-started" },
                    { text: "LiteChairs", link: "/litechairs/getting-started" },
                ] },
        ],
    }

    for (const [, sidebarMultiItem] of Object.entries(sidebar)) {
        processItem(sidebarMultiItem);
    }

    return sidebar;
}

function processItem(sidebarItem: SidebarItem) {
    if (!sidebarItem.items) {
        return;
    }

    let foldersAndFile = new Map<SidebarItem, SidebarItem>();

    for (let folder of sidebarItem.items) {
        if (folder.link || folder.text === undefined) {
            continue;
        }

        const file = sidebarItem.items.find((i) => i.link?.endsWith(`/${folder.text!.toLowerCase()}`));

        if (file) {
            foldersAndFile.set(folder, file);
        }
    }

    foldersAndFile.forEach((file, folder) => {
        folder.link = file.link;
        folder.text = file.text;
        sidebarItem.items = sidebarItem.items!.filter((i) => i !== file);
    });

    for (let sideBarItem of sidebarItem.items) {
        processItem(sideBarItem);
    }
}