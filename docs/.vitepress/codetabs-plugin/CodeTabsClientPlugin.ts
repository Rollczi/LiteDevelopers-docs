import type { Plugin } from 'vue'

import CodeTabsSyncComponent from './CodeTabsSyncComponent.vue'

export function CodeTabsClientPlugin(): Plugin<Options[]> {
    return {
        install(app, options?) {
            app.component('CodeTabsSyncComponent', CodeTabsSyncComponent)
        },
    }
}