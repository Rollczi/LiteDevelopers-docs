import DefaultTheme, {VPDocAsideSponsors, VPTeamMembers, VPTeamPageSection} from 'vitepress/theme'

// css patches
import './patches/custom-block-patch.css'
import './patches/increase-content-container-patch.css'
import './patches/table-style-patch.css'
import './patches/sidebar-devider.css'

import './custom.css'
import './codetabs.css'
import {h} from "vue";
import Donation from "../../components/donation/Donation.vue";
import SideBar from "../../components/side-bar/SideBar.vue";

DefaultTheme.enhanceApp = ({ app }) => {
    app.component('VPDocAside', () => VPDocAsideSponsors)
}

export default {
    DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'aside-bottom': () => h(Donation),
            //'aside-ads-after': () => h(SideBar),
        })
    }
}
