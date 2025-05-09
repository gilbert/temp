import type { Children, View } from "./View";
import { Context } from "./Context";
import { Route } from "./Route";

/**
 * DOM element argument type
 */
export type DOM = HTMLElement | Element | {};

/**
 * Function type for the `s.mount` method.
*/
export type Mount = {
  (fn: (route: { route: Route }) => Children): void;
  (fn: <Attrs = {}>(attrs: Attrs, children: View[] | [], context: Context) => Children): void;
  (fn: (children: View[] | [], context: Context) => Children): void;
  (dom: DOM, fn: (attrs: any, children: View[] | [], context: Context) => Children): void;
}

