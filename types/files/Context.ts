import type { Doc } from "./Doc";
import type { Route } from "./Route";


// Sin Component State Context
export type Context<T = Record<string, any>> = T & {
  /**
   * Sin SSR (last modified date of `sin build`)
   */
  readonly modified: number;
  /**
   * A boolean indicating whether or not component is hydrating
   */
  readonly hydrating: boolean;
  /**
   * References `window.location`
   */
  location: Pick<globalThis.Window, 'location'>;
  /**
   * Document Methods
   */
  doc: Doc
  /**
   * Route Control
   */
  route: Route
  /**
   * Called when component is removed or destroyed.
   *
   * @example
   *
   * const section = s`section`('Penance Required!');
   *
   * section.onremove() => console.log('Forgiven')
   */
  onremove: (cb: () => void) => void;
  /**
   * Exclude component from global redraws. Expects a `boolean` parameter!
   *
   * > By default, components will redraw.
   *
   * @example
   *
   * s(({},[], { ignore }) => ignore(true))   // Component is ignored during redraw
   * s(({},[], { ignore }) => ignore(false))  // Component applies redraw (default)
   */
  ignore: (enable: boolean) => void;
  /**
   * Re-initializes the component and redraws without removal.
   *
   * > Use `refresh()` to update stateful data without killing the component.
   *
   * @example
   *
   * s(({}, [], { refresh }) => refresh())
   */
  refresh: () => void;
  /**
   * Reloads the component, similar to updating `key` reference.
   *
   * > Use `reload()` to crucify and resurrect the component.
   *
   * @example
   *
   * s(({}, [], { reload }) => reload())
   */
  reload: () => void;
  /**
   * Synchronous Redraw on the component level
   *
   * @example
   *
   * s(({}, [], { redraw }) => redraw())
   */
  redraw: () => Promise<void>;
}
