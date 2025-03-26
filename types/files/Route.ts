import type { StringUnion } from "./Utilities";
import type { Constructor } from "./Components";
import type { View } from "./View";

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
export interface State<T = {}> {
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
export interface Options<T = {}> {
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
  state?: T
}

/**
 * Route `query` value interface
 *
 * @example
 *
 * s.route.query // Route.Query
 */
export interface Query {
  /**
   * Get a query parameter value
   *
   * @example
   *
   * // ?garden=eden&fruit=apple
   *
   * s.route.query.get('fruit') // => apple
   */
  get: (key: string) => string;
  /**
   * Set a query parameter value
   *
   * @example
   *
   * // ?garden=eden
   *
   * s.route.query.set('garden', 'eden')
   */
  set: <T = any>(key: string, value: T) => void;
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
  replace: <T = {} | string>(params: T) => URLSearchParams;
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
 * Route handler value interface
 */
export interface Handler<A> {
  /**
   * Route Handler
   */
  [path: `/${string}`]: (() => Constructor | Constructor[]) | Constructor | Constructor[]
}


/**
 * #### Route Instance/s and Method
 *
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
  <A>(routes: Handler<A>, options?: Options): View;
  /**
   * Returns the current URL pathname (route)
   *
   * @example
   *
   * s.route.path // => '/'
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
   * s.route.parent.path // /a/b > /a is parent
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
   * s.route.has('loki') // => true;
   * s.route.has('sin') // => false;
   */
  has(path: string): boolean
  /**
   * Returns the current URL pathname (route)
   *
   * @example
   *
   * s.toString() // => '/'
   */
  toString(): string;
}
