import type { Plugin } from 'vite'
import GrayMatter from 'gray-matter'

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

            const targetComponent = `<SyncComponent/>`
            const parsedMarkdownContent = GrayMatter(code)
            const hasFrontMatter = Object.keys(parsedMarkdownContent.data).length > 0

            if (hasFrontMatter) {
                return `${GrayMatter.stringify(`${parsedMarkdownContent.content}\n\n${targetComponent}`, parsedMarkdownContent.data)}`;
            }

            return `${code}\n\n${targetComponent}`;
        },
    }
}
