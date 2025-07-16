import type { Route } from "./Route";
import type { Context } from "./Context";
import type { Children, View } from "./View";

/**
 * DOM element argument type
 */
export type DOM = HTMLElement | Element | {};

/**
 * Function type for the `s.mount` method.
*/
export type Mount = {
  (fn: (route: { route: Route }) => Children): void;
  (fn: <Attrs = {}>(attrs: Attrs, children: Children | [], context: Context) => Children): void;
  (fn: (children: Children | [], context: Context) => Children): void;
  (dom: DOM, fn: (attrs: any, children: View[] | [], context: Context) => Children): void;
}

