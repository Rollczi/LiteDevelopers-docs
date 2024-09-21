import type { Plugin } from 'vite'

export function CodeTabsServerPlugin(): Plugin {

    return {
        name: '@rollczi/codetabs-sync',
        // May set to 'pre' since end user may use vitepress wrapped vite plugin to
        // specify the plugins, which may cause this plugin to be executed after
        // vitepress or the other markdown processing plugins.
        enforce: 'pre',
        transform(code, id) {
            if (!id.endsWith('.md')) {
                return null
            }

            return `${code}\n\n<CodeTabsSyncComponent/>`
        },
    }
}
