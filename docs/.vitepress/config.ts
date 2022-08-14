import { defineConfig } from "vitepress";


export default defineConfig({
    lang: 'en-US',
    title: 'LiteDevelopers',
    description: 'LiteDevelopers',

    lastUpdated: true,

    themeConfig: {
        logo: 'https://i.ibb.co/dWTNW8q/bitmapa.png',

        sidebar: {
            '/documentation/': configureDocumentationSidebar()
        },

        editLink: {
            // If Rollczi merge PR works, currently not work
            pattern: 'https://github.com/Rollczi/LiteCommands-Docs/docs/edit/master/docs/:path',
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

function configureDocumentationSidebar() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Home', link: '/documentation/introduction' },
            ]
        },
        {
            text: 'LiteCommands',
            collapsible: true,
            items: [
                { text: 'Info', link: '/documentation/litecommands/info' },
                { text: 'Get started', link: '/documentation/litecommands/getting-started' },
                { text: 'First Steps', link: '/documentation/litecommands/first-steps' },
            ]
        },
        {
            text: 'LiteCommands - Examples',
            collapsible: true,
            items: [
                { text: 'Examples - Info', link: '/documentation/litecommands/examples/info' },
                { text: 'Bukkit - Teleport', link: '/documentation/litecommands/examples/teleport' },
                { text: 'Bukkit - Kick', link: '/documentation/litecommands/examples/kick' },
            ]
        }
    ]
}