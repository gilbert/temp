import type { Vars } from "./CSS";
import { Attrs, isInferred } from "./Utilities";

/**
 * Component Nodes
 *
 * An array of {@link Children}
 */
export interface Nodes extends Array<Children> {}

/**
 * DAFT - Default Argument Function Thunk
 */
export type Daft = <T = any>(...args: T[]) => Child

/**
 * Child node [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
export type Primitive = string | number | boolean | null | undefined;

/**
 * Component Children
 */
export type Children = Node | Daft | Child | Nodes

/**
 * The child node of a component
 */
export type Child = View | Primitive | Nodes | Daft

/**
 * Component Node
 *
 * An array of nodes in a sin component
 */
export type Node = Nodes | string | number | boolean


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
  readonly children: Children;
  /**
   * Tag reference describing the syntactic markup on the node
   */
  readonly tag: {
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
    readonly parent:  View['tag'];
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
  };
  /**
   * A hashmap of DOM attributes, events, properties and lifecycle methods of a component.
   */
  readonly attrs: T;
  /**
   * The value used to map a DOM element to its respective item in an array of data.
   */
  readonly key: any;
}
