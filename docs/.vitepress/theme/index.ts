import DefaultTheme, {VPDocAsideSponsors} from 'vitepress/theme'

import './patches/custom-block-patch.css'
import './patches/table-style-patch.css'
import './patches/sidebar-style-path.css'
//
import './custom.css'
import './codetabs.css'

import {h} from 'vue'
import type {Theme} from 'vitepress'
import type {Options} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {
    InjectionKey,
    LayoutMode,
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import {NolebaseInlineLinkPreviewPlugin} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import 'virtual:group-icons.css'

import Donation from "../../components/donation/Donation.vue";

DefaultTheme.enhanceApp = ({app}) => {
    app.component('VPDocAside', () => VPDocAsideSponsors)
}

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'aside-bottom': () => h(Donation),
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
        })
    },
    enhanceApp({app}) {
        app.use(NolebaseInlineLinkPreviewPlugin)

        app.provide(InjectionKey, {
            layoutSwitch: {
                defaultMode: LayoutMode.FullWidth
            }
        } as Options)
    },
} satisfies Theme
