/**
 * A reactive stream created by `s.live`, supporting any type.
 */
export type Live<T> = {
  /**
   * Get the current value if called with no arguments, or set a new value and return it.
   *
   * @example
   * const sin = s.live(0)
   * sin() // -> 0
   * sin(1) // -> 1
   *
   * const name = s.live("loki")
   * name() // -> "loki"
   */
  (value?: T): T;

  /**
   * The current value of the live stream.
   *
   * @example
   * s.live(10).value // -> 10
   * s.live("thor").value // -> "thor"
   */
  readonly value: T;

  /**
   * Returns the value, enabling coercion in operations (e.g., `live + 1` for numbers).
   *
   * @example
   * const sin = s.live(10)
   * sin.valueOf() // -> 10
   * sin + 1 // -> 11 (when T is number)
   */
  valueOf(): T;

  /**
   * Returns the value for JSON serialization.
   *
   * @example
   * s.live(10).toJSON() // -> 10
   */
  toJSON(): T;

  /**
   * Returns the stringified value.
   *
   * @example
   * s.live(10).toString() // -> "10"
   * s.live("loki").toString() // -> "loki"
   */
  toString(): string;

  /**
   * Derive a new live value from a property or function.
   *
   * @example
   * const a = s.live(10)
   * a.get(x => x + 1)() // -> 11
   * s.live({ name: "loki" }).get("name")() // -> "loki"
   */
  get<U>(x: keyof T | ((value: T) => U)): Live<U>;

  /**
   * Set the value, either directly or via a function, returning a function that applies it.
   *
   * @example
   * const sin = s.live(10)
   * sin.set(20)() // -> sin with value 20
   * sin.set(x => x + 10)() // -> sin with value 20
   *
   * const name = s.live("loki")
   * name.set("thor")() // -> name with value "thor"
   */
  set(x: T | ((...args: any[]) => T)): (...args: any[]) => Live<T>;

  /**
   * Observe value changes, returning a function to unsubscribe.
   *
   * @example
   * const sin = s.live(0)
   * const detach = sin.observe((newVal, oldVal) => console.log(newVal, oldVal))
   * sin(1) // -> Logs: 1, 0
   */
  observe(fn: (newValue: T, oldValue: T, detach: () => void) => void, once?: boolean): () => boolean;

  /**
   * Detach observers (no-op if none).
   *
   * @example
   * s.live(10).detach()
   */
  detach(): void;

  /**
   * Reduce values into a new Live stream.
   *
   * @example
   * const sin = s.live(0)
   * const total = sin.reduce((acc, val) => acc + val, 0)
   * sin(1) // -> total() becomes 1
   *
   * const text = s.live("")
   * const concat = text.reduce((acc, val) => acc + val, "prefix")
   * text("x") // -> concat() becomes "prefixx"
   */
  reduce<U>(fn: (acc: U, value: T, index: number) => U, initial?: U): Live<U>;

  /**
   * Conditionally return a value based on equality.
   *
   * - No extra args: Returns Live<boolean> (true/false).
   * - One extra arg: Returns Live<U | false>.
   * - Two extra args: Returns Live<U | V>.
   *
   * @example
   * const a = s.live(666)
   * a.if(666)() // -> true
   * a.if(777, 1)() // -> false
   * a.if(777, 1, 0)() // -> 0
   *
   * const name = s.live("loki")
   * name.if("loki")() // -> true
   * name.if("thor", "yes", "no")() // -> "no"
   */
  if<U = true, V = false>(
    equals: T,
    a?: U,
    b?: V
  ): [U, V] extends [undefined, undefined] ? Live<boolean> : [U] extends [undefined] ? Live<boolean> : Live<U | V>;
}

// Static Live factory interface for any type, with numeric enhancement.

export type LiveStatic = {
  /**
   * Create a Live instance with an initial value and optional observers.
   * Returns Live<T> & T when T is a number for arithmetic support.
   *
   * @example
   * const sin = s.live(0)
   * const name = s.live("loki")
   */
  <T>(
    value: T,
    ...observers: ((newValue: T, oldValue: T, detach: () => void) => void)[]
  ): T extends number ? Live<T> & T : Live<T>;

  /**
   * Create a Live instance from other Live instances and a computation.
   *
   * @example
   * const a = s.live(2)
   * const b = s.live(3)
   * const sum = s.live.from(a, b, (x, y) => x + y)
   * sum() // -> 5
   *
   * const x = s.live("x")
   * const y = s.live("y")
   * const concat = s.live.from(x, y, (a, b) => a + b)
   * concat() // -> "xy"
   */
  from<U>(...args: [...streams: Live<any>[], fn: (...values: any[]) => U]): U extends number ? Live<U> & U : Live<U>;
}

export { LiveStatic as SinLive }
