import { defineConfig } from "vitepress";

import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { generateSidebar, Sidebar, SidebarMulti, VitePressSidebarOptions } from "vitepress-sidebar";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

const vitepressSidebarOptions: VitePressSidebarOptions[] = [
    createSidebar("documentation/LiteCommands", [
        "what-is-litecommands.md",
        "getting-started.md",
        "platforms.md",
        "configure-builder.md",
        "intellij-idea-plugin.md",
        "types",
        "handler"
    ]),
    createSidebar("documentation/liteskullapi", [
        "getting-started.md",
        "initialize.md",
    ]),
    createSidebar("documentation/litechairs", []),
];

function createSidebar(path: string, sort: string[]): VitePressSidebarOptions {
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

export default defineConfig({
    vite: {
        plugins: [
            groupIconVitePlugin({
                customIcon: {
                    maven: "vscode-icons:file-type-maven",
                    groovy: "logos:gradle",
                    kotlin: "logos:kotlin-icon",
                },
            }),
        ],
        optimizeDeps: {
            exclude: [
                "@nolebase/vitepress-plugin-enhanced-readabilities/client",
                "@nolebase/client",
                "@nolebase/vitepress-plugin-inline-link-preview/client",
            ],
        },
        ssr: {
            noExternal: [
                "@nolebase/vitepress-plugin-enhanced-readabilities",
                "@nolebase/ui",
                "@nolebase/vitepress-plugin-inline-link-preview",
            ],
        },
    },

    lang: "en-US",
    title: "LiteDevelopers",
    description: "LiteDevelopers",

    lastUpdated: true,

    markdown: {
        lineNumbers: true,
        theme: {
            light: "github-light",
            dark: "catppuccin-macchiato",
        },
        config(md) {
            md.use(InlineLinkPreviewElementTransform);
            md.use(groupIconMdPlugin);
        },
    },

    themeConfig: {
        logo: "https://i.ibb.co/dWTNW8q/bitmapa.png",
        nav: [
            {
                text: "LiteCommands",
                link: "/documentation/litecommands/what-is-litecommands",
            },
            {
                text: "LiteSkullAPI",
                link: "/documentation/liteskullapi/getting-started",
            },
            {
                text: "Projects",
                link: "/documentation/introduction/projects",
            },
        ],

        sidebar: appendSidebarIntroduction(generateSidebar(vitepressSidebarOptions)),

        editLink: {
            pattern:
                "https://github.com/Rollczi/LiteDevelopers-docs/edit/master/docs/:path",
            text: "Edit this page on GitHub",
        },

        footer: {
            message: "Made by LiteDevelopers and Contributors with ❤️",
            copyright: "Copyright © 2022-present LiteDevelopers",
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/Rollczi/" },
            { icon: "discord", link: "https://discord.gg/NyPWs7h7kz" },
        ],
    },
});


function appendSidebarIntroduction(sidebar: SidebarMulti): SidebarMulti {
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

    return sidebar;
}