import type { Void } from "./Utilities";

/**
 * DOM Event handler
 */
export type On = <T extends HTMLElement, K extends keyof WindowEventMap = keyof WindowEventMap>(
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
  listener: (this: T, event?: WindowEventMap[K], dom?: T) => Void,
  /**
   * Event Options
   */
  options?: boolean | AddEventListenerOptions

) => () => Void;


/**
 * Custom event handler with observer pattern support.
 */
export type Listener<T> = {
  /**
   * Triggers the event, calling all subscribed observers with the provided arguments.
   * Returns an array of return values from all observer functions
   *
   * @example
   *
   * const listen = s.event();
   *
   * listen.observe((x) => x * 2);
   * listen(5); // returns [10]
   */
  (value: T): T[];
  /**
   * Adds an observer function to be called when the event is triggered.
   */
  observe: {
    /**
     * Subscribes a persistent observer that remains until explicitly removed.
     * The function will return a function which can be used to unsubscribe the observer.
     *
     * @example
     *
     * const event = s.event();
     * const unsubscribe = event.observe(x => console.log(x));
     *
     * event(1); // logs: 1
     * unsubscribe(); // removes observer
     */
    (observer: (value: T) => void): () => void;
    /**
     * Subscribes a one-time observer that automatically unsubscribes after first trigger.
     * Returns a function which will unsubscribe the observer before it fires if called.
     *
     * @example
     *
     * const event = s.event();
     * event.observe(x => console.log(x), true);
     *
     * event(1); // logs: 1
     * event(2); // no log (observer already removed)
     */
    (observer: (value: T) => void, once: true): () => void;
  };

  /**
   * Gets an AbortSignal that can be used to monitor the events lifecycle.
   * The signal aborts when an observer is added with `once: true`.
   *
   * @example
   *
   * const event = s.event();
   * const signal = ev.signal;
   *
   * signal.addEventListener('abort', () => console.log('aborted'));
   */
  readonly signal: AbortSignal;
};
