import type { Children, View } from "./View";
import type { P, Interpolate, TagLiteral, ifAny } from "./Utilities";
import type { HTMLTagElement, Selector } from './HtmlElements'
import type { Context } from "./Context";
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
  T extends HTMLBaseElement ? Attributes<HTMLElement> :
  T extends HTMLElement ? HTMLAttributes<HTMLElement> : never


// Possible Component Returns
export type SinNode =
  | Children
  | Children[]
  | StyledComponent
  | Array<Children | StyledComponent>
  | []


// Signature Arguments
export type Arguments<attrs, children, context> = [ attrs: attrs, children: children[], context: context ];

/* -------------------------------------------- */
/* STYLED COMPONENT                             */
/* -------------------------------------------- */

export type StyledSignature<T extends HTMLElement> = [
  attributes?: SinElement<T>,
  ...children: Array<Children | StyledComponent<T>>
] | [
  ...children: Array<Children | StyledComponent<T>>
]

export type StyledComponent<T extends HTMLElement = HTMLElement> = {
  /** Element with Attributes Signature */
  <Attrs = {}>(...attibutes: Partial<StyledSignature<T>>): View<Attrs>;
  /** Styled Component Literal Signature */
  (tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>
}

/* -------------------------------------------- */
/* STATELESS                                    */
/* -------------------------------------------- */

type StatelessSignature<attrs, children, context> =
  | ((attrs?: attrs) => SinNode)
  | ((attrs: attrs, children: children[], context?: context) => SinNode)
  | ((attrs: attrs, children: children, context?: context) => SinNode)

type StatelessComponents<attrs, children, context> = {
  /** attrs only in stateless */
  (attrs: attrs): View<attrs>;
  /** Direct Signature with attrs and Varidiac children */
  (attrs: attrs, ...children: children[]): View<attrs>;
  /** Direct Signature with attrs, children and context */
  (attrs: attrs, children: children[], context: context): View<attrs>;
  /** Stateless component varidiac children */
  (...children: children[]): View<attrs>;
  /** Literal Signature for style overrides - last for overload resolution */
  (tag: TagLiteral, ...interpolate: Interpolate): StatelessComponents<attrs, children, context>;
};

export type StatelessComponent<
  attrs,
  children,
  context
> = StatelessComponents<
  attrs,
  children,
  context
> & StyledComponent;

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
  component: P<StatefullComponent<attrs, children, context>>
]

// Statefull Signatures
export type StatefullSignature<attrs, children, context> = (
  ...args: Arguments<attrs, children, context>
) => P<(...args: Arguments<attrs, children, context>) => P<SinNode>>;

// Statefull Components
export type StatefullComponent<attrs, children, context> = {
  /** Literal Signature */
  (tag: TagLiteral, ...interpolate: Interpolate): StatefullComponent<attrs, children, context>;
  /** Direct Signature with attrs */
  (attrs: attrs): View<attrs>
  /** Direct Signature with attrs and children */
  (attrs: attrs, ...children: children[]): View<attrs>
  /** Direct Signature with attrs, children and context */
  (attrs: attrs, children: children[], context: context): View<attrs>
  /** Statefull Component children signature */
  (...children: children[]): View<attrs>;
}

/* -------------------------------------------- */
/* SIN COMPONENT OVERLOADS                      */
/* -------------------------------------------- */

// COMPONENTS
//
// Ensure the signatures follow this exact ordering
//
// 1. HyperScript Element Component
// 2. Literal Element Component
// 3. Statefull Component
// 4. Async Component
// 5. Stateless Component
export interface Components {
  /** HyperScript signature for creating a sin view */
  <T extends Selector>(selector: T, ...attributes: StyledSignature<HTMLTagElement<T>>): View;
  /** Literal signature for creating a sin view */
  <T extends HTMLElement>(tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>;
  /** Statefull component signature */
  <T = any, children = any, context = any>(
    fn: ifAny<children,
      StatefullSignature<T, Children, Context & context>,
      StatefullSignature<T, children, Context & context>
    >
  ): ifAny<children,
    StatefullComponent<T, Children, Context & context>,
    StatefullComponent<T, children, Context & context>
  >;
  /** Stateless component signature */
  <T = any, children = any, context = any>(
    fn: ifAny<children,
      StatelessSignature<T, Children, Context & context>,
      StatelessSignature<T, children, Context & context>
    >
  ): ifAny<children,
    StatelessComponent<T, Children, Context & context>,
    StatelessComponent<T, children, Context & context>
  >;
}

