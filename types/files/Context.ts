import type { Doc } from "./Doc";
import type { Route } from "./Route";
import { ifAny, isAny, isInferred, OmitIndexSignature } from "./Utilities";

/**
 * Component Context - TypeScript Utility
 *
 * @example
 *
 * const x: Context<{ x: string }>
 */
export type Context<T = {}> = T & {
  [key: string]: unknown;
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
  readonly location: Pick<globalThis.Window, 'location'>;
  /**
   * Document Methods
   */
  readonly doc: Doc
  /**
   * Route Control
   */
  readonly route: Route
  /**
   * Called when component is removed or destroyed.
   *
   * @example
   *
   * const section = s`section`('Penance Required!');
   *
   * section.onremove() => console.log('Forgiven')
   */
  readonly onremove: (cb: () => void) => void;
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
  readonly ignore: (enable: boolean) => void;
  /**
   * Re-initializes the component and redraws without removal.
   *
   * > Use `refresh()` to update stateful data without killing the component.
   *
   * @example
   *
   * s(({}, [], { refresh }) => refresh())
   */
  readonly refresh: () => void;
  /**
   * Reloads the component, similar to updating `key` reference.
   *
   * > Use `reload()` to crucify and resurrect the component.
   *
   * @example
   *
   * s(({}, [], { reload }) => reload())
   */
  readonly reload: () => void;
  /**
   * Synchronous Redraw on the component level
   *
   * @example
   *
   * s(({}, [], { redraw }) => redraw())
   */
  readonly redraw: () => Promise<void>;
}