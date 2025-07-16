import type { P, Interpolate, TagLiteral, Attrs, isInferred, OmitIndexSignature } from "./Utilities";
import type { HTMLTagElement, Selector } from './HtmlElements'
import type { Context } from "./Context";
import type { Children, View } from "./View";
import {
  Attributes,
  AnchorAttributes,
  AreaAttributes,
  AudioAttributes,
  ButtonAttributes,
  CanvasAttributes,
  HTMLAttributes,
  DataAttributes,
  DetailsAttributes,
  DialogAttributes,
  EmbedAttributes,
  FieldSetAttributes,
  FormAttributes,
  IFrameAttributes,
  ImageAttributes,
  InputAttributes,
  LabelAttributes,
  LIAttributes,
  LinkAttributes,
  MapAttributes,
  MeterAttributes,
  ModAttributes,
  ObjectAttributes,
  OListAttributes,
  OptGroupAttributes,
  OptionAttributes,
  OutputAttributes,
  ProgressAttributes,
  QuoteAttributes,
  ScriptAttributes,
  SelectAttributes,
  SourceAttributes,
  StyleAttributes,
  TableAttributes,
  TableCellAttributes,
  TableColAttributes,
  TextAreaAttributes,
  TimeAttributes,
  TrackAttributes,
  VideoAttributes
} from "./HtmlAttributes";

import { s } from "../index";

export type Components = typeof s

type SinElement<T> =
  T extends HTMLLinkElement ? LinkAttributes<HTMLLinkElement> :
  T extends HTMLStyleElement ? StyleAttributes<HTMLStyleElement> :
  T extends HTMLQuoteElement ? QuoteAttributes<HTMLQuoteElement> :
  T extends HTMLOListElement ? OListAttributes<HTMLOListElement> :
  T extends HTMLLIElement ? LIAttributes<HTMLLIElement> :
  T extends HTMLAnchorElement ? AnchorAttributes<HTMLAnchorElement> :
  T extends HTMLTimeElement ? TimeAttributes<HTMLTimeElement> :
  T extends HTMLModElement ? ModAttributes<HTMLModElement> :
  T extends HTMLImageElement ? ImageAttributes<HTMLImageElement> :
  T extends HTMLIFrameElement ? IFrameAttributes<HTMLIFrameElement> :
  T extends HTMLEmbedElement ? EmbedAttributes<HTMLEmbedElement> :
  T extends HTMLObjectElement ? ObjectAttributes<HTMLObjectElement> :
  T extends HTMLVideoElement ? VideoAttributes<HTMLVideoElement> :
  T extends HTMLAudioElement ? AudioAttributes<HTMLAudioElement> :
  T extends HTMLSourceElement ? SourceAttributes<HTMLSourceElement> :
  T extends HTMLTrackElement ? TrackAttributes<HTMLTrackElement> :
  T extends HTMLMapElement ? MapAttributes<HTMLMapElement> :
  T extends HTMLAreaElement ? AreaAttributes<HTMLAreaElement> :
  T extends HTMLTableElement ? TableAttributes<HTMLTableElement> :
  T extends HTMLTableColElement ? TableColAttributes<HTMLTableColElement> :
  T extends HTMLTableCellElement ? TableCellAttributes<HTMLTableCellElement> :
  T extends HTMLFormElement ? FormAttributes<HTMLFormElement> :
  T extends HTMLLabelElement ? LabelAttributes<HTMLLabelElement> :
  T extends HTMLInputElement ? InputAttributes<HTMLInputElement> :
  T extends HTMLButtonElement ? ButtonAttributes<HTMLButtonElement> :
  T extends HTMLSelectElement ? SelectAttributes<HTMLSelectElement> :
  T extends HTMLOptGroupElement ? OptGroupAttributes<HTMLOptGroupElement> :
  T extends HTMLOptionElement ? OptionAttributes<HTMLOptionElement> :
  T extends HTMLTextAreaElement ? TextAreaAttributes<HTMLTextAreaElement> :
  T extends HTMLOutputElement ? OutputAttributes<HTMLOutputElement> :
  T extends HTMLProgressElement ? ProgressAttributes<HTMLProgressElement> :
  T extends HTMLMeterElement ? MeterAttributes<HTMLMeterElement> :
  T extends HTMLFieldSetElement ? FieldSetAttributes<HTMLFieldSetElement> :
  T extends HTMLDetailsElement ? DetailsAttributes<HTMLDetailsElement> :
  T extends HTMLDialogElement ? DialogAttributes<HTMLDialogElement> :
  T extends HTMLScriptElement ? ScriptAttributes<HTMLScriptElement> :
  T extends HTMLCanvasElement ? CanvasAttributes<HTMLCanvasElement> :
  T extends HTMLDataElement ? DataAttributes<HTMLDataElement> :
  T extends HTMLUListElement ? Attributes<HTMLUListElement> :
  T extends HTMLSpanElement ? Attributes<HTMLElement> :
  T extends HTMLDivElement ? Attributes<HTMLElement> :
  T extends HTMLHeadingElement ? Attributes<HTMLElement> :
  T extends HTMLBodyElement ? Attributes<HTMLElement> :
  T extends HTMLBRElement ? Attributes<HTMLElement> :
  T extends HTMLHRElement ? Attributes<HTMLElement> :
  T extends HTMLHeadElement ? Attributes<HTMLElement> :
  T extends HTMLHtmlElement ? Attributes<HTMLElement> :
  T extends HTMLBaseElement ? Attributes<HTMLElement> : HTMLAttributes<HTMLElement>

// Possible Component Returns
export type Varidiac =
  | Children
  | Children[]
  | StyledComponent
  | Array<Children | StyledComponent>
  | []

// Signature Arguments
export type Arguments<T, U, V> = [
  // Attrs can be inferred or default to {}
  attrs: isInferred<T, Attrs, T>,
  // Varidiac Children will spread
  children: U extends any[] ? [...U, Children ] : U[],
  // Context can be merged
  context: keyof V extends never ? Context<{}> : Context<V>
];


export type Signatures<T, U, V> = {
  // Styled Component Signatures
  (tag: TagLiteral, ...interpolate: Interpolate): Signatures<T, U, V>;
  // Attrs Component Signature
  (attrs: isInferred<T, {}, T>): View<T>;
  // Attrs with Varidiac Children Component Signature
  (attrs: isInferred<T, {}, T>, ...children: U extends [] ? Children[] : U extends any[] ? U : U[]): View<T>;
  // Attrs with Children and Context Component Signature
  (attrs: isInferred<T, {}, T>, children: U extends [] ? Children[] : U, context?: V): View<T>;
  // Varidiac Children Component Signature
  (...children: U extends [] ? Children[] : U extends any[] ? U : U[]): View<T>;
};

export type StatelessSignature<T, U, V> = (...x: Arguments<T, U, V>) => Varidiac;
export type StatelessComponent<T, U, V> = Signatures<T, U, V>

export type StatefulSignature<T, U, V> = (...x: Arguments<T, U, V>) => P<(...x: Arguments<T, U, V>) => P<Varidiac>>;
export type StatefulComponent<T, U, V> = Signatures<T, U, V>

/* -------------------------------------------- */
/* STYLED COMPONENT                             */
/* -------------------------------------------- */

export type StyledSignature<T extends HTMLElement> = Partial<[
  attributes?: SinElement<T>,
  ...children: Array<Children | StyledComponent<T>>
] | [
  ...children: Array<Children | StyledComponent<T>>
]>

export type StyledComponent<T extends HTMLElement = HTMLElement> = {
  /** Element with Attributes Signature */
  <A = {}>(...attibutes: StyledSignature<T>): View<A>;
  /** Styled Component Literal Signature */
  (tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>
}

/* -------------------------------------------- */
/* STATELESS                                    */
/* -------------------------------------------- */

/* -------------------------------------------- */
/* STATEFUL                                     */
/* -------------------------------------------- */

export type AsyncSignature<attrs, children, context> = [
  /**
   * Async Stateful Options
   */
  options: {
    /**
     * Render a loading dom element
     *
     * @example
     * s(
     *  {
     *    loading: s`div`('patience...')
     *  },
     *  async () => {
     *    // Perform some task...
     *    await s.sleep(3000);
     *
     *    return () => s`h1`('Hello Sinner!')
     *  }
     * )
     */
    loading?: Components
    /**
     * Intercept throws or errors
     *
     * @example
     * s(
     *  {
     *    loading: s`div`('patience...'),
     *    error: e => s`h1 fc red`('There was an error ' + e)
     *  },
     *  async () => {
     *    // Perform some task...
     *    await s.sleep(3000);
     *
     *    return () => s`h1`('Hello Sinner!')
     *  }
     * )
     */
    error?: <Exception extends DOMException = any>(err: Exception) => Components
  },
  /**
   * Component Rendering
   */
  component: P<StatefulComponent<attrs, children, context>>
]

//export type StatelessSignature<T, U, V> = (...args: Arguments<T, U, V>) => Varidiac

// export type StatelessComponent<T, U, V> = {
//   /** attrs only in stateless */
//   (attrs: isInferred<T, {}, T>): View<T>;
//   /** Direct Signature with attrs and Varidiac children */
//   (attrs: isInferred<T, {}, T>, ...children: U[]): View<T>;
//   /** Direct Signature with attrs, children and context */
//   (attrs: isInferred<T, {}, T>, children: U[], context?: V): View<T>;
//   /** Stateless component varidiac children */
//   (...children: U[]): View<T>;
//   /** Literal Signature for style overrides - last for overload resolution */
//   (tag: TagLiteral, ...interpolate: Interpolate): StatelessComponent<T, U, V>;
// };

// Stateful Signatures
// export type StatefulSignature<T, U, V> = (
//   ...args: Arguments<T, U, V>
// ) => P<(
//   ...args: Arguments<T, U, V>
// ) => P<Varidiac>>;

// Stateful Components
// export type StatefulComponent<T, U, V> = {
//   /** Styled Signature for Stateless Components */
//   (tag: TagLiteral, ...interpolate: Interpolate): StatefulComponent<T, U, V>
//   /** Attrs Signature for Stateful or Styled Components */
//   (attrs: isInferred<T, {}, T>): View<T>
//   /** Attrs and Varidiac Children for Stateless or Stateful Components */
//   (attrs: isInferred<T, {}, T>, ...children: U[]): View<T>
//   /** Attrs, Children[] and Context for Stateless or Stateful Components */
//   (attrs: isInferred<T, {}, T>, children: U[], context?: V): View<T>;
//   /** Varidiac Children for Stateless or Stateful Components */
//   (...children: U[]): View<T>;
// }


type InferComponent<S> = S extends StatelessSignature<infer T, infer U, infer V>
  ? StatelessComponent<T, U, V>
  : S extends StatefulSignature<infer T, infer U, infer V>
    ? StatefulComponent<T, U, V>
    : never;

// Updated Component: infers specific type; falls back to union if ambiguous
export type Component<T = {}, U = [], V = {}> = T extends HTMLElement
  ? StyledComponent<T> : InferComponent<(...args: Arguments<T, U, V>) => any> extends never
  ? StatelessComponent<T, U, V> | StatefulComponent<T, U, V>
  : InferComponent<(...args: Arguments<T, U, V>) => any>;

// export type Component<T = {}, U = [], V = {}> = T extends HTMLElement
//   ? StyledComponent<T>
//   : StatelessComponent<T, U, V> | StatefulComponent<T, U, V>;
/**
 * Component - TypeScript Utility
 *
 * @example
 *
 * const x: s.Component<{}, [], {}>;
 */
// export type Component<T = {}, U = [], V = {}> = T extends HTMLElement ? StyledComponent<T> : {
//   /** Attrs Signature for Stateful or Styled Components */
//   (attrs: isInferred<T, {}, T>): View<T>
//   /** Attrs and Varidiac Children for Stateless or Stateful Components */
//   (attrs: isInferred<T, {}, T>, ...children: U[]): View<T>
//   /** Attrs, Children[] and Context for Stateless or Stateful Components */
//   (attrs: isInferred<T, {}, T>, children: U[], context?: V): View<T>;
//     /** Attrs, Children[] and Context for Stateless or Stateful Components */
//   (attrs: isInferred<T, {}, T>, children: U, context?: V): View<T>;
//   /** Varidiac Children for Stateless or Stateful Components */
//   (...children: U[]): View<T>;
//   /** Styled Signature for Stateless Components */
//   (tag: TagLiteral, ...interpolate: Interpolate): StatelessComponent<T, U, V> | StatefulComponent<T, U, V>
// }


