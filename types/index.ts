import type { Sin } from './files/Sin'
import type { Children, View } from './files/View';
import type { Context } from './files/Context';
import type { SinNode, StyledComponent } from './files/Components';


declare const s: Sin
declare namespace s {

  /**
   * Component Context - TypeScript Utility
   *
   * @example
   *
   * const x: Context<{ x: string }>  // Merges Context
   */
  type Context<T> = T & import('./files/Context').Context

  /**
   * Sin Component - TypeScript Utility
   *
   * @example
   *
   * const x: s.Component;
   * const x: s.Component<{}>;
   * const x: s.Component<{}, []>;
   * const x: s.Component<{}, [], {}>;
   * const x: s.Component<HTMLElement>;
   */
  type Component<attrs = {}, children = [], context = {}> =
    | ((attrs?: attrs) => SinNode)
    | ((attrs?: attrs, ...children: children extends [] ? Children[] : children[]) => SinNode)
    | ((attrs?: attrs, children?: children extends [] ? Children[] : children[], context?: Context<context>) => View)
    | (attrs extends HTMLElement ? StyledComponent<attrs> : SinNode)
}

export default s
