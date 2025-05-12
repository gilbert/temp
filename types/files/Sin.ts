import type { Interpolate, TagLiteral, Void } from "./Utilities";
import type { CSS } from "./CSS";
import type { Http } from "./Http";
import type { SinLive } from "./Live";
import type { Mount } from "./Mount";
import type { Route } from "./Route";
import type { Children, Redraw, View } from "./View";
import type { Component, StatelessComponent } from "./Components";
import type { Listener, On } from "./Listeners";


export type Sin = Component & {
  /**
   * Global Window Object
   */
  readonly window: Window & typeof globalThis;
 /**
   * Scroll Restoration
   */
  readonly scroll: boolean;
  /**
   * Runtime references
   */
  readonly is: {
    /**
     * Whether or not code is executing on server.
     */
    readonly server: boolean;
  };
  /**
   * Redrawing
   */
  readonly redrawing: boolean;
  /**
   * JSX Component Creation Reference
   *
   * > **𓃵 Sacrificial Decision**
   */
  jsx: any;
  /**
   * Delay redraw or operation.
   *
   * @example
   *
   * // 💤 For in that sleep of death...
   * await sleep(2000)
   * // What dreams my come?
   */
  sleep(x: number): Promise<number>
  /**
   * **⮂** Sin Redraw
   *
   * @example
   *
   * s.redraw() // Asynchronous Redraws
   */
  redraw: Redraw;
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
  style: (element?: HTMLStyleElement) => HTMLStyleElement;
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
  event: <T = any>(callback?: (value: T) => void) => Listener<T>;
  /**
   * CSS Methods for controlling the cascades
   */
  css: CSS
  /**
   * CSS Animate utility
   */
  animate: () => (defferable?: boolean) => void
  /**
   * Sin Mount
   *
   * @example
   * // 𓋹 The wicked etch their dreams!
   *
   * s.mount(document.body, () => s`div`('In the den of sin!'))
   */
  mount: Mount;
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
  http: Http;
  /**
   * Create live stream with value. Optionally pass a list of observers.
   *
   * @example
   *
   * const a = s.live(10);
   * const b = s.live(20, x => {}, x => {});
   */
  live: SinLive;
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
  route: Route;
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
  on: On
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
  trust: {
    (markup: TagLiteral, ...interpolate: Interpolate): View;
    (markup: string): View;
  }
  /**
   * Error
   */
  error(): Children;
}
