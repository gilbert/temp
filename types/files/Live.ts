
/**
 * Function type for the `s.live` method,
 */
export interface Live<T = any> {
  /**
   * Return the live value stream
   *
   * @example
   *
   * s.live(10).value // => 10
   */
  readonly value: T;
  /**
   * ValueOf live stream
   *
   * @example
   *
   * s.live(10).valueOf() // => 10
   */
  valueOf: <V = T>() => V;
  /**
   * Get and update the live value
   *
   * @example
   *
   * s.live(10).get(x => x + 1) // => 11
   */
  get: <V>(fn: (x: T) => V) => V
  /**
   * Set the live value stream
   *
   * @example
   *
   * s.live(10).set(20) // => 20
   * s.live(10).set(x => x + 10) // => 20
   */
  set: (x: T | ((x: T) => T)) => Live<T>;
  /**
   * Observe live value stream. Callback function will remove observer.
   *
   * @example
   *
   * const fn = x => x + 1
   *
   * s.live.observe(fn)
   * s.live.observe(fn, true) // observe once
   * s.live.observe(fn)() // removes observer
   */
  observe: <V>(fn: (x: T) => V, once?: boolean) => () => boolean;
  /**
   * Live stream reducer function
   *
   * @example
   *
   * s.live.reduce((x, v, i) => x + v, 100);
   *
   */
  reduce: <A>(fn: <V = T>(acc: A, value: T, index?: number) => V, initial?: T) => Live<T>;
  /**
   * Detach live stream observer
   *
   * @example
   *
   * s.live(10).detach();
   */
  detach(): void;
  /**
   * Live determination on whether or not value is equal to parameter.
   *
   * @example
   *
   * const a = s.live(10);
   * const b = a.set(100)();
   *
   * console.log([
   *  a.if(200)(), // false
   *  a.if(100)(), // true
   *  b.if(300)()  // false
   *  b.if(100)()  // true
   * ]);
   *
   */
  if:(...fn: Live<T>[]) => () => boolean;
}
