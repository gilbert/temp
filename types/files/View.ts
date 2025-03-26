import { Context } from "./Context";

/**
 * The child node of a component
 */
export type Child<Attrs = {}> = Views<Attrs> | string | number | undefined;

/**
 * Children of a component
 */
export type Children<Attrs = {}> = [] | Child<Attrs>[]

/**
 * Children of a component
 */
export interface Redraw {
  (): void;
  /**
   * Force Redraw
   */
  force(): void
}

/**
 * Component view instance `{ tag }` interface
 */
export interface Tag {
  /**
   * The `nodeName` of a DOM element, as per the markup case.
   *
   * @example
   *
   * const node = s`button`('Baptise Bazel!');
   *
   * console.log(node.tag.name) // 'button'
   */
  readonly tag: string;
  /**
   * The elements attribute `id=""` value
   *
   * @default ''
   *
   * @example
   *
   * const node = s`#sinner`('Seek Atonement');
   *
   * console.log(node.tag.id) // 'sinner'
   */
  readonly id: string;
  /**
   * The elements attribute `class=""` value. This will contain
   * Sin CSS or shorthand expressions hash values.
   *
   * @default ''
   *
   * @example
   *
   * const a = s`a.xxx`('Lustful Intent');
   * const b = s`a bc red`('Immorality');
   *
   * console.log(a.tag.classes) // 'a1b2c3d4'
   * console.log(b.tag.classes) // 'foo bar'
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
   * @default []
   */
  readonly args: any[];
  /**
   * Corresponding CSS Variables which hold the
   *
   * @internal
   * @todo Speak with Rasmus
   * @default {}
   */
  readonly vars: {}
}

/**
 * Sin components will return a View interface
 *
 * @example
 *
 * s`button`('Hello Sinner!') // => View
 */
export interface View<Attrs = {}> {
 /**
  * @todo Rasmus walk through
  */
 readonly children?: [] | Array<((attrs: Attrs, view: View[], context: Context) => View)>;
 /**
  * Tag reference describing the syntactic markup on the node
  */
 readonly tag?: Tag;
 /**
  * @todo
  */
 readonly specificity: number;
 /**
  * A hashmap of DOM attributes, events, properties and lifecycle methods of a component.
  */
 attrs: Attrs;
 /**
  * The value used to map a DOM element to its respective item in an array of data.
  */
 key: any;
}


/**
 * Component view/s argument type
 */
export type Views<Attrs = {}> = View<Attrs> | View<Attrs>[];

