import type { Attrs, StringUnion } from "./Utilities";
import type { Components } from "./Components";
import type { Children, View } from "./View";

/**
 * History state attrs reference
 *
 * @example
 *
 * s`a`({
 *   href: '/sinner',
 *   state: {} // ← { attrs } reference
 * })
 */
export type State<T = {}> = {
  /**
   * Update HistoryState `state`
   */
  state: T
}

/**
 * Route handler options argument type
 *
 * @example
 *
 * s.route({ '/': () => [] }, {
 *   replace: false,
 *   scroll: true,
 *   state: {}
 * })
 */
export type Options<State = {}> = {
  /**
   * History pushState replace
   *
   * @default false
   */
  replace?: boolean;
  /**
   * Scroll restoration
   *
   * @default true
   */
  scroll?: boolean;
  /**
   * History pushState state object
   *
   * @default {}
   */
  state?: State
}

/**
 * Route `query` value interface
 *
 * @example
 *
 * s.route.query // Route.Query
 */
export type Query = {
  /**
   * Get a query parameter value
   *
   * @example
   *
   * // ?garden=eden&fruit=apple
   *
   * s.route.query.get('fruit') // => apple
   */
  get: (key: string) => string | null;
  /**
   * Set a query parameter value
   *
   * @example
   *
   * // ?garden=eden
   *
   * s.route.query.set('garden', 'eden')
   */
  set: <T extends string | number | boolean>(key: string, value: T) => void;
  /**
   * Replaces query parameters. Accepts object or string
   *
   * @example
   *
   * // ?adam=male&eve=female
   *
   * s.route.query.replace({
   *   adam: 'male',
   *   eve: 'female',
   * })
   */
  replace: <T extends Record<string, string | number | boolean> | string>(params: T) => URLSearchParams;
  /**
   * Clear/remove the query parameters from URL
   *
   * @example
   *
   * s.route.query.clear()
   */
  clear: () => void;
}



/**
 * Component Routes
 */
export type Routes<T extends Attrs = Attrs> = Record<`/${string}`,
  | ((attrs: T & Record<string, string>) => Components | Components[])
  | Components
  | Components[]
>

/**
 * Function type for the `s.route` method and `{ route }` instance/s.
 */
export interface Route {
  /**
   * Visit route
   *
   * @example
   *
   * s.route('/sinner')
   */
  (route: string): void;
  /**
   * Route Handler
   *
   * @example
   *
   * s.route({
   *  // Component
   *  '/sin-component': s`main`([
   *    s`h1`('Hail the wicked!')
   *  ]),
   *  // Function
   *  '/sin-function': () => [
   *    s`section`('Joyous Blasphemy')
   *  ],
   * })
   */
  <T extends Attrs = Attrs>(routes: Routes<T>, options?: Options): View<Attrs>;
  /**
   * Returns the current URL pathname (route)
   *
   * @example
   *
   * s.route.path // -> '/'
   */
  readonly path: string;
  /**
   * Pathmode prefixing used to define hashbang routing
   *
   * @default ''
   */
  prefix: StringUnion<'' | '#!'>;
  /**
   * Query Parameter utilities
   */
  query: Query;
  /**
   * The parent route instance.
   *
   * @example
   *
   * s.route.parent.path // -> /a/b > /a is parent
   */
  parent: Route;
  /**
   * The root route handler (alias of `s.route`)
   *
   * @example
   *
   * s.root // => Route
   */
  root: Route;
  /**
   * Whether or not the provided string is a pathname of the URL
   *
   * @example
   *
   * // Pathname: /sinner/loki
   *
   * s.route.has('loki') // -> true;
   * s.route.has('sin') // -> false;
   */
  has(path: string): boolean
  /**
   * Returns the current URL pathname (route)
   *
   * @example
   *
   * s.toString() // -> '/'
   */
  toString(): string;
}
