import { defineConfig } from "vitepress";
import codetabs from "markdown-it-codetabs";

export default defineConfig({
    lang: 'en-US',
    title: 'LiteDevelopers',
    description: 'LiteDevelopers',

    lastUpdated: true,

    markdown: {
        config: (md) => {
            md.use(codetabs)
        }
    },

    themeConfig: {
        logo: 'https://i.ibb.co/dWTNW8q/bitmapa.png',
        nav: nav(),

        sidebar: {
            '/documentation/introduction/': configureIntroduction(),
            '/documentation/litecommands/': configureLiteCommands(),
            '/documentation/liteskullapi/': configureLiteSkullAPI(),
        },

        editLink: {
            pattern: 'https://github.com/Rollczi/LiteDevelopers-docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Made by Martin Sulikowski and Contributors with ❤️',
            copyright: 'Copyright © 2022'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Rollczi/' },
            { icon: 'discord', link: 'https://discord.gg/NyPWs7h7kz' },
        ],
    }
})

function nav() {
    return [
        { text: "LiteCommands", link: "/documentation/litecommands/getting-started" },
        { text: "LiteSkullAPI", link: "/documentation/liteskullapi/getting-started" }
    ]
}

function configureIntroduction() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Home', link: '/documentation/introduction/projects' },
            ]
        }
    ]
}

function configureLiteCommands() {
    return [
        {
            text: 'Introduction', collapsible: true,
            items: [
                { text: 'Get started', link: '/documentation/litecommands/getting-started' },
            ]
        },

        {
            text: 'Features', collapsible: true,
            items: [
                { text: 'Asynchronously', link: '/documentation/litecommands/features/asynchronously' },
            ]
        },

        {
            text: 'Examples', collapsible: true,
            items: [
                { text: 'Examples - Info', link: '/documentation/litecommands/examples/info' },
                { text: 'Bukkit - Teleport', link: '/documentation/litecommands/examples/teleport' },
                { text: 'Bukkit - Kick', link: '/documentation/litecommands/examples/kick' },
            ]
        }
    ]
}

function configureLiteSkullAPI() {
    return [
        {
            text: 'LiteSkullAPI', collapsible: true,
            items: [
                { text: 'Get started', link: '/documentation/liteskullapi/getting-started' },
                { text: 'Initialize', link: '/documentation/liteskullapi/initialize' },
                { text: 'Basic API', link: '/documentation/liteskullapi/basic-api' },
                { text: 'Completable Future API', link: '/documentation/liteskullapi/completable-future-api' },
            ]
        }
    ]
}