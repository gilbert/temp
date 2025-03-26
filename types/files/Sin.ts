import type { Literal } from "./Utilities";
import type { Units } from "./CSS";
import type { Http } from "./Http";
import type { Live } from "./Live";
import type { Mount } from "./Mount";
import type { Route } from "./Route";
import type { Children, Redraw, View } from "./View";

export declare class Sin {
  /**
   * Sin View (Internal Usage)
   */
  private static View: View;
  /**
   * Global Window Object
   */
  static readonly window: Window & typeof globalThis;
 /**
   * Scroll Restoration
   */
  static readonly scroll: boolean;
  /**
   * Check server
   */
  static readonly is: {
    /**
     * Whether or not code is executing on server.
     */
    server: boolean;
  };
  /**
   * Redrawing
   */
  static readonly redrawing: boolean;
  /**
   * JSX
   */
  static jsx: View;
  /**
   * Delay redraw or operation.
   *
   * @example
   *
   * // For in that sleep of death...
   * await sleep(2000)
   * // What dreams my come?
   */
  static sleep(x: number): Promise<number>
  /**
   * Sin Redraw
   */
  static redraw: Redraw;
  /**
   * Sin Style
   *
   * Set the base `<style>` which sin uses.
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
  static style: (element?: HTMLStyleElement) => HTMLStyleElement;

  /**
   * ### Sin Event
   *
   * @todo Speak with Rasmus
   *
   * @example
   *
   * const sinned = s.event(x => console.log(x))
   *
   * sinned.observe('repent')
   */
  static event <T = any>(cb?: (x: T) => void): {
    /**
     * Observe event (Returns an unobserver callback function)
     */
    observe: (x: any, once: any) => () => boolean;
  }

  /**
   * Sin CSS
   */
  static css: {
    <T = any>(...params: T[]): Literal;
    /**
     * CSS Alias Syntaxes
     *
     * @todo Rasmus Example
     */
    alias: {
      /**
       * Set alias using key and value
       */
      (name: string, value: string): void;
      /**
       * Set alias using object
       */
      (value: { [query: string]: string; }): void;
    }
    /**
     * CSS Resets
     *
     * @todo Rasmus Example
     */
    reset: (x?: any[], ...xs: any[]) => Literal;
    /**
     * CSS custom unit control
     *
     * @example
     *
     * // Option 1
     * s.css.unit('n', (value, property) => (x * .25) + 'rem' )
     *
     * // Option 2
     * s.css.unit({ n: (value, property) => (x * .25) + 'rem' })
     */
    unit: Units
  }
  /**
   * CSS Animate utility
   */
  static animate: () => (defferable?: boolean) =>void
  /**
   * Mount
   */
  static mount: Mount;

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
  static http: Http;

  /**
   * Create live stream with value. Optionally pass a list of observers.
   *
   * @example
   *
   * const a = s.live(10);
   * const b = s.live(20, x => {}, x => {});
   */
  static live: Live;

  /**
   * Sin Routing
   */
  static route: Route;
  /**
   * DOM Event listener - forwarded to `addEventListener`
   *
   * @example
   *
   * const { dom } = s`button`('Click for atonement!');
   *
   * s.on(dom, 'click', (e) => {
   *
   *  // In the den of sin!
   *
   * }, {
   *  passive: true
   * })
   */
  static on: {
    <T extends HTMLElement, K extends keyof WindowEventMap = keyof WindowEventMap>(
      /**
       * The DOM Element listener will be attached
       */
      target: T,
      /**
       * The event name
       */
      event: K,
      /**
       * The listener callback function
       */
      listener: (this: Window, event: WindowEventMap[K]) => any,
      /**
       * Event Options
       */
      options?: boolean | AddEventListenerOptions
    ): void;
  }

  /**
   * Forgiving HTML or SVG string forms into unescaped HTML or SVG.
   *
   * > Unsanitized user input is **Forbidden!**
   *
   * @example
   *
   * s.trust(`<h1>Woe to the wicked!</h1>`)
   */
  static trust<T extends HTMLElement>(strings: string, ...values: string[]): T;
  /**
   * Error
   */
  static error(): Children;
}
