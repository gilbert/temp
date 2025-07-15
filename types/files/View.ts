import type { Vars } from "./CSS";

/**
 * DAFT - Default Argument Function Thunk
 */
export type Daft = (...args: any[]) => Child

/**
 * Child node [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
export type Primitive = string | number | boolean | null | undefined;

/**
 * The child node of a component
 */
export type Child = View | Primitive | Nodes | Daft | []

/**
 * An array of {@link Children}
 */
export interface Nodes extends Array<Children> {}

/**
 * An array of nodes in a sin component
 */
export type Children = Node | Daft | Child | Nodes | []

/**
 * An array of nodes in a sin component
 */
export type Node = Nodes | string | number | boolean

/**
 * Children of a component
 */
export type Redraw = {
  /**
   * Asynchronous Redraws
   */
  (): void;
  /**
   * Force Redraw
   */
  force(): void
}

/**
 * Component view instance `{ tag }` interface
 */
export type Tag = {
  /**
   * The `nodeName` of a DOM element, as per the markup case.
   *
   * @example
   *
   * const node = s`button`('Vain is the pride of the wicked');
   *
   * console.log(node.tag.name) // 'button'
   */
  readonly name: string;
  /**
   * The elements attribute `id=""` value
   *
   * @default
   * ''
   *
   * @example
   *
   * const node = s`#sinner`('Seek Atonement');
   *
   * console.log(node.tag.id) // 'sinner'
   */
  readonly id: string;
  /**
   * The elements attribute `class=""` value. This value will
   * hold reference to the CSS class name passed or sin shorthand
   * expressions hash values.
   *
   * @default
   * ''
   *
   * @example
   *
   * const a = s`a.xxx`('Lustful Intent');
   * const b = s`a bc red`('Immorality');
   *
   * console.log(a.tag.classes) // 'xxx'
   * console.log(b.tag.classes) // 's1n666' (hashed value)
   */
  readonly classes: string;
  /**
   * The `parent` tag reference.
   *
   * @default undefined
   */
  readonly parent: undefined | Tag;
  /**
   * Holds the raw tag template literal parameters
   *
   * > **NOTE**
   * >
   * > This is a readonly value that is primarily for internal usage
   * > and has been derived from the parsing stack.
   *
   * @default
   * [] // empty array when no interpolation
   *
   * @example
   *
   * const { tag } = s`h1 color ${'red'} h ${666}`('Sinner!');
   *
   * console.log(tag.args) // ['red', 666]
   */
  readonly args: any[];
  /**
   * Corresponding CSS Variables expressed in the tagged literal.
   *
   * > **NOTE**
   * >
   * > This is a readonly value that is primarily for internal usage
   * > and has been derived from the parsing stack.
   *
   * @default
   * {} // empty object if no vars
   */
  readonly vars: Record<`--${string}`, Vars>;

}

/**
 * Sin components will return a View interface
 *
 * @example
 *
 * s`button`('Hello Sinner!') // => View
 */
export type View<T = {}> = {
  /**
   * Sin Children (child nodes)
   */
  readonly children?: Children;
  /**
   * Tag reference describing the syntactic markup on the node
   */
  readonly tag?: Tag;
  /**
   * A hashmap of DOM attributes, events, properties and lifecycle methods of a component.
   */
  attrs: T;
  /**
   * The value used to map a DOM element to its respective item in an array of data.
   */
  key: any;
}
