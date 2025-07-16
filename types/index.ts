import type {
  Component,
  StatefulComponent,
  StatefulSignature,
  StatelessSignature,
  StatelessComponent,
  StyledComponent,
  StyledSignature,
} from './files/Components';
import type { Route } from './files/Route';
import type { CSS} from './files/CSS';
import type { Nodes, Daft, Primitive, Children, Child, Node, View } from './files/View';
import type { Context } from './files/Context';
import type { Listener, On } from './files/Listeners';
import type { Selector, HTMLTagElement } from './files/HtmlElements';
import type { TagLiteral, Interpolate, ifAny, Attrs } from './files/Utilities';
import type { Mount } from './files/Mount';
import type { Http } from './files/Http';
import type { SinLive } from './files/Live';

declare global {
  /**
   * Sin `p(...)`
   *
   * Intercept, print to console and return the value.
   * Pass any primitive and get it back the same way.
   *
   * @example
   * const x = p(333)   // Logs 333
   * const v = x + 333  // Value of v is 666
   */
  export function p<T = any>(...input: T[]): T
}

/**
 * Statefull Component
 */
export declare function s<T, U = [], V = {}>(statefull: StatefulSignature<T, U, V>): StatefulComponent<T, U, V>;

/**
 * Stateless Component
 */
export declare function s<T, U = [], V = {}>(stateless: StatelessSignature<T, U, V>): StatelessComponent<T, U, V>;

/**
 * HyperScript Component
 */
export declare function s<T extends Selector>(selector: T, ...attributes: StyledSignature<HTMLTagElement<T>>): View;

/**
 * Styled Component
 */
export declare function s<T extends HTMLElement>(tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>;

/**
 * Sin API
 */
export declare namespace s {

  /**
   * Global Window Object
   */
  export const window: Window & typeof globalThis;
  /**
   * Scroll Restoration
   */
  export const scroll: boolean;
  /**
   * Runtime references
   */
  export const is: {
    /**
     * Whether or not code is executing on server.
     */
    readonly server: boolean;
  };
  /**
   * Redrawing
   */
  export const redrawing: boolean;
  /**
   * JSX Component Creation Reference
   *
   * > **𓃵 Sacrificial Decision**
   */
  export const jsx: any;
  /**
   * Delay redraw or operation.
   *
   * @example
   *
   * // 💤 For in that sleep of death...
   * await sleep(2000)
   * // What dreams my come?
   */
  export function sleep(x: number): Promise<number>
  /**
   * **⮂** Sin Redraw
   *
   * @example
   *
   * s.redraw() // Asynchronous Redraws
   */
  export const redraw: {
    /**
     * Asynchronous Redraws
     */
    (): void;
    /**
     * Force Redraw
     */
    force(): void
  };
  /**
   * Set the base `<style>` element which sin uses for CSS cascades.
   *
   * @example
   *
   * const style = document.createElement('style');
   *
   * s.style(style) // => HTMLStyleElement
   *
   * // Omitting parameter returns current <style> sin is using
   * s.style() // => HTMLStyleElement
   */
  export const style: (element?: HTMLStyleElement) => HTMLStyleElement;
  /**
   * Creates a custom event handler with observer pattern support.
   *
   * @example
   * // 𓋹 Call forth events and partake in blasphemy!
   *
   * const sinned = s.event(x => console.log(x))
   *
   * sinned.observe('repent')
   */
  export const event: <T = any>(callback?: (value: T) => void) => Listener<T>;
  /**
   * CSS Methods for controlling the cascades
   */
  export const css: CSS
  /**
   * CSS Animate utility
   */
  export const animate: () => (defferable?: boolean) => void
  /**
   * Sin Mount
   *
   * @example
   * // 𓋹 The wicked etch their dreams!
   *
   * s.mount(document.body, () => s`div`('In the den of sin!'))
   */
  export const mount: Mount;
  /**
   * HTTP utility for requests
   *
   * @example
   *
   * s.http('/api/path', {
   *  method: 'GET',
   *  redraw: true,
   *  responseType: 'json',
   *  json: 'application/json',
   *  query: {},
   *  body: {},
   *  user: '',
   *  pass: '',
   *  headers: {},
   *  timeout: 0,
   *  config: (xhr) => {},
   * })
   */
  export const http: Http;
  /**
   * Create live stream with value. Optionally pass a list of observers.
   *
   * @example
   *
   * const a = s.live(10);
   * const b = s.live(20, x => {}, x => {});
   */
  export const live: SinLive;
  /**
   * Sin Routing
   *
   * @example
   *
   * // Path
   * s.route('/sin-path')
   *
   * s.route({
   *  // View
   *  '/sin-view': s`main`([
   *    s`h1`('Unrepentant Rapture!')
   *  ]),
   *  // Component
   *  '/sin-component': s(() => [
   *    `main`(
   *      s`h1`('Hail the wicked!')
   *    )
   *  ]),
   *  // Function
   *  '/sin-function': () => [
   *    s`section`('Joyous Blasphemy')
   *  ],
   * })
   */
  export const route: Route;
  /**
   * DOM Event listener - forwarded to `addEventListener`
   *
   * @example
   *
   * s`pre`({
   *  dom: s.on(window, 'keydown', (event, dom) => {
   *    console.log(event, dom)
   *  })
   * });
   */
  export const on: On
  /**
   * Forgiving HTML or SVG strings into unescaped HTML or SVG.
   *
   * > Unsanitized user input is **Forbidden!**
   *
   * @example
   *
   * s.trust`<small>In the den of Sin</small>`
   * s.trust(`<h1>Woe to the wicked!</h1>`)
   */
  export const trust: {
    (markup: TagLiteral, ...interpolate: Interpolate): View;
    (markup: string): View;
  }
  /**
   * Error
   */
  export function error(): Children;

  /**
   * Exposed Types
   */
  export type {
    Context,
    Nodes,
    Daft,
    Primitive,
    Children,
    Component,
    Child,
    Node,
    View
  };
}



export default s
