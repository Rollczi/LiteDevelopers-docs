/** vue & vitepress */
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

/** patches & theme */
import "./patches/table-style-patch.css";
import "./patches/sidebar-style-path.css";
import "./patches/custom-block-patch.css";
import "./patches/logo-background-path.css";
import "./patches/codetabs-highlight-path.css";
import "./patches/docs-button-patch.css";

import "./custom.css";

/** enhanced-readabilities */
import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import { InjectionKey, LayoutMode, NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

/** inline-link-preview */
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";

/** git-changelog */
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

/** codetabs */
import { CodeTabsClientPlugin } from "../codetabs-plugin/CodeTabsClientPlugin";

/** donation */
import Donation from "../../components/donation/Donation.vue";

/** group-icons */
import "virtual:group-icons.css";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            "aside-bottom": () => h(Donation),
            "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
            "nav-screen-content-after": () => h(NolebaseEnhancedReadabilitiesScreenMenu),
        });
    },
    enhanceApp({ app }) {
        app.use(NolebaseInlineLinkPreviewPlugin);
        app.use(NolebaseGitChangelogPlugin)
        app.use(CodeTabsClientPlugin());

        app.provide(InjectionKey, {
            layoutSwitch: {
                defaultMode: LayoutMode.BothWidthAdjustable,
                pageLayoutMaxWidth: {
                    defaultMaxWidth: 90,
                },
                contentLayoutMaxWidth: {
                    defaultMaxWidth: 95,
                },
            },
        } as Options);
    },
} satisfies Theme;
