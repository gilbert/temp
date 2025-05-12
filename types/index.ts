// @ts-nocheck

import type { Statefull, Stateless } from './files/Components'
import type { Sin } from './files/Sin'
import type { View, Children } from './files/View';
import type { EventHandler } from './files/HtmlEventListeners'


declare global {

  namespace S {

    /**
     * **🔥 sin.js component**
     *
     * TypeScript Utility for sin components
     *
     * @example
     *
     * S.Component<{ attrs }, { context }>
     */
    export type Component<Attrs = {}, C = Context> = (
        attrs: Attrs,
        children?: Children,
        context?: C
    ) => (
        attrs: Attrs,
        children?: Children,
        context?: C
    ) => View<Attrs>

  }

}

/**
 * **🔥 sin.js**
 */
declare const s: Sin

export default s
