import { defineConfig } from "vitepress";

import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { generateSidebar, Sidebar, SidebarMulti, VitePressSidebarOptions } from "vitepress-sidebar";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { CodeTabsServerPlugin } from "./codetabs-plugin/CodeTabsServerPlugin";
import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { GitVersionServerPlugin } from "./git-version-plugin/GitVersionServerPlugin";
import { GitVersionReposliteProvider } from "./git-version-plugin/GitVersionProvider";

const vitepressSidebarOptions: VitePressSidebarOptions[] = [
    createSidebar("/documentation/litecommands/", [

        "what-is-litecommands.md",
        "platforms.md",
        "intellij-idea-plugin.md",
        "getting-started",
        "dependencies.md",
        "configure-builder.md",

        "argument",
        "argument.md",
        "supported-types",
        "argument-optional.md",
        "join.md",
        "quoted.md",
        "quoted.md",
        "argument-with-key.md",

        "handler",
        "extensions",
        "examples",
        "advanced",
    ]),
    createSidebar("/documentation/liteskullapi/", [
        "dependencies.md",
        "initialize.md",
    ]),
    createSidebar("/documentation/litechairs/", []),
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
            CodeTabsServerPlugin(),
            GitVersionServerPlugin({
                versionProviders: {
                    "litecommands": new GitVersionReposliteProvider("https://maven.reposilite.com/", "releases", "dev/rollczi/litecommands-core"),
                    "liteskullapi": new GitVersionReposliteProvider("https://repo.eternalcode.pl/", "releases", "dev/rollczi/liteskullapi"),
                }
            }),
            GitChangelog({
                repoURL: () => 'https://github.com/Rollczi/LiteDevelopers-docs',
                mapAuthors: [
                    {
                        name: 'Martin Sulikowski',
                        username: 'vLuckyyy',
                    },
                    {
                        name: 'Norbert Dejlich',
                        username: 'Rollczi',
                    }
                ],
            }),
            GitChangelogMarkdownSection(),
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
        logo: "litedevelopers.svg",
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


function appendSidebarIntroduction(sidebar: Sidebar): SidebarMulti {
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