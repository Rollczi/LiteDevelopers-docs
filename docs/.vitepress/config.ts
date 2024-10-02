import { defineConfig } from "vitepress";

import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { CodeTabsServerPlugin } from "./codetabs-plugin/CodeTabsServerPlugin";
import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { GitVersionServerPlugin } from "./git-version-plugin/GitVersionServerPlugin";
import { GitVersionReposliteProvider } from "./git-version-plugin/GitVersionProvider";
import { createSidebar } from "./sidebar-config";

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
                    "litecommands-nightly": new GitVersionReposliteProvider("https://repo.eternalcode.pl/", "snapshots", "dev/rollczi/litecommands-core"),
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

        sidebar: createSidebar(),
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


