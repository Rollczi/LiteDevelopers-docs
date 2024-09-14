import { defineConfig } from "vitepress";

import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { generateSidebar, VitePressSidebarOptions } from "vitepress-sidebar";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

const vitepressSidebarOptions: VitePressSidebarOptions = {
  documentRootPath: "docs",
  scanStartPath: "/documentation",
  keepMarkdownSyntaxFromTitle: true,
  useTitleFromFileHeading: true,
  sortMenusOrderByDescending: true,
  capitalizeFirst: true,
  manualSortFileNameByPriority: [
    "what-is-litecommands.md",
    "getting-started.md",
    "platforms.md",
    "configure-builder.md",
    "intellij-idea-plugin.md",
  ],
};

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
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

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
