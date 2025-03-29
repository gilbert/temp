import type { Children, View, Views } from "./View";
import { Context } from "./Context";

/**
 * DOM element argument type
 */
export type DOM = HTMLElement | Element | {};

type MountDOM<Attrs = {}> = (dom: DOM, attrs: Attrs, children: View[] | [], context: Context) => Children

/**
 * Function type for the `s.mount` method.
 *
 * @example
 *
* s.mount((dom, component, context) => [])
*/
export interface Mount {
  <Attrs = {}>(dom: HTMLElement | Element | {}, sin: MountDOM<Attrs>): Views<Attrs>;
  <Attrs = {}>(fn: (attrs: Attrs, children: View[] | [], context: Context) => Children): Views<Attrs>;
  <Attrs = {}>(fn: (children: View[] | [], context: Context) => Children): Views<Attrs>;
  <Attrs = {}>(fn: (children: View[] | [], context: Context) => Children): Views<Attrs>;
}

