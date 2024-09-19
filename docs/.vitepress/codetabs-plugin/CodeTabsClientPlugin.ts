import type { Plugin } from 'vue'

import SyncComponent from './CodeTabsSyncComponent.vue'

export function CodeTabsClientPlugin(): Plugin<Options[]> {
    return {
        install(app, options?) {
            app.component('SyncComponent', SyncComponent)
        },
    }
}