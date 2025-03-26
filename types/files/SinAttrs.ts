import { Context } from "./Context";
import { View } from "./View";

/**
 * Extends the {@link View} `attrs` to include sin specific attributes.
 * Called by the {@link Attrs} namespace interface entries.
 */
export interface SinAttrs <T = HTMLElement> {
  /**
   * DOM Element render callback. Dom is a creation lifcycle hook which
   * will call in the post rendering cycle of a sin view.
   *
   * > **TIP**
   * >
   * > Attach any third-party libraries or tools for the element via `root`
   *
   * @example
   *
   * s`button`({
   *   dom: (root, attrs, children, context) => {
   *     root.innerText = attrs.name
   *   }
   * })
   */
  dom?: <Attrs = {}>(
    /**
    * The DOM Element
    */
    root?: T,
    /**
    * Element attributes
    */
    attrs?: Attrs,
    /**
    * Parent Component Views
    */
    children?: View<Attrs>[],
    /**
    * Component Context
    */
    context?: Context

  ) => Promise<any> | any;
  /**
   * Waits for children using deferred removal
   *
   * @default false
   */
  deferrable?: boolean
  /**
   * The value used to map a DOM element to its respective item in an array of data.
   */
  key?: any;
}