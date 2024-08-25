import DefaultTheme, {VPDocAsideSponsors} from 'vitepress/theme'

import {h} from 'vue'
import type {Theme} from 'vitepress'
import {
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import {NolebaseInlineLinkPreviewPlugin} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@iconify-json/logos'

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
    },
} satisfies Theme
