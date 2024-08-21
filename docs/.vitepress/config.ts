import {defineConfig} from 'vitepress'

import {InlineLinkPreviewElementTransform} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import {generateSidebar} from "vitepress-sidebar";
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

const vitepressSidebarOptions = {
    documentRootPath: "docs",
    scanStartPath: "/documentation",
    keepMarkdownSyntaxFromTitle: true,
    useTitleFromFileHeading: true,
    sortMenusOrderByDescending: true,
    capitalizeFirst: true,
    manualSortFileNameByPriority: ['what-is-litecommands.md', 'getting-started.md', 'platforms.md', 'configure-builder.md', 'intellij-idea-plugin.md'],
};

export default defineConfig({
    vite: {
        plugins: [
            groupIconVitePlugin({
                customIcon: {
                    maven: "skill-icons:maven-dark",
                    groovy: "skill-icons:gradle-dark",
                    kotlin: "skill-icons:kotlin-dark"
                }
            })
        ],
        optimizeDeps: {
            exclude: [
                '@nolebase/vitepress-plugin-enhanced-readabilities/client'
            ],
        },
        ssr: {
            noExternal: [
                '@nolebase/vitepress-plugin-enhanced-readabilities'
            ],
        },
    },

    lang: "en-US",
    title: "LiteDevelopers",
    description: "LiteDevelopers",

    lastUpdated: true,

    markdown: {
        lineNumbers: true,
        config(md) {
            md.use(InlineLinkPreviewElementTransform)
            md.use(groupIconMdPlugin)
        }
    },

    themeConfig: {
        logo: "https://i.ibb.co/dWTNW8q/bitmapa.png",
        nav: [
            {text: "LiteCommands", link: "/documentation/litecommands/what-is-litecommands"},
            {text: "LiteSkullAPI", link: "/documentation/liteskullapi/getting-started"}
        ],

        sidebar: generateSidebar(vitepressSidebarOptions),

        editLink: {
            pattern: "https://github.com/Rollczi/LiteDevelopers-docs/edit/master/docs/:path",
            text: "Edit this page on GitHub"
        },

        footer: {
            message: "Made by LiteDevelopers and Contributors with ❤️",
            copyright: "Copyright © 2022-present LiteDevelopers"
        },

        socialLinks: [
            {icon: "github", link: "https://github.com/Rollczi/"},
            {icon: "discord", link: "https://discord.gg/NyPWs7h7kz"},
        ],
    }
});

