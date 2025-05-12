import type { Children, View } from "./View";
import type { Interpolate, isInferred, TagLiteral } from "./Utilities";
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

/**
 * Signature Arguments Expected
 */
export type Arguments<T = any> = [
  attrs: isInferred<T, any, T>,
  children: [ ...Children[] ],
  context: Context
];

/**
 * Partial Signature Arguments
 */
export type Signature<T = any> = Partial<[
  attrs: isInferred<T, any, Partial<T>>,
  children: Children,
  context: Context
]>

/* -------------------------------------------- */
/* STYLED COMPONENT                             */
/* -------------------------------------------- */


/**
 * Style Component Signature
 *
 */
export type StyledSignature<T extends HTMLElement> = [
  attributes: SinElement<T>,
  ...children: Array<Children | StyledComponent<T>>
] | [
  ...children: Array<Children | StyledComponent<T>>
]

/**
 * Styled Component Overloads
 *
 * @example
 * s``(attributes, [])
 * s('', attributes, [])
 */
export type StyledComponent<T extends HTMLElement = HTMLElement> = {
  /** Element with Attributes Signature */
  (...attibutes: Partial<StyledSignature<T>>): View;
  /** Styled Component Literal Signature */
  (tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>
  /** Styled Component Children */
  (tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>
}

/* -------------------------------------------- */
/* STATELESS                                    */
/* -------------------------------------------- */

/**
 * Stateless Component Signature
 */
export type StatelessSignature<T = any> = (...args: Arguments<T>) =>
  | Children
  | StyledComponent
  | Array<Children | StyledComponent>

/**
 * Stateless Component Overloads
 *
 * @example
 * s(({}, [], {}) => s``)
 */
export type StatelessComponent<T> = {
  /** Stateless Component Literal Signature */
  (tag: TagLiteral, ...interpolate: Interpolate): StatelessComponent<T>;
  /** Stateless Component attrs Signature */
  (...attrs: Signature<T>): View;
  /** Stateless Component children signature */
  (...children: Children[]): View;
};

/**
 * Stateful Utility Function
 */
export type Stateless<A = {}, C = Context> = (
  attrs: A,
  children?: Children,
  context?: C
) => (
  attrs: A,
  children?: Children,
  context?: C
) => View<A>

/* -------------------------------------------- */
/* STATEFUL                                     */
/* -------------------------------------------- */

/**
 * Stateful Async Component Options
 *
 * @example
 * s({
 *   loading: s`h1`('Committing Sins!'),
 *   error: (e) => s`h1 c red`('Failed!')
 * }(async ({}, [], context) => {
 *
 *   await s.sleep(2000)
 *
 *   return s`h1`('Loki')
 * })
 */
type StatefullAsync = {
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
  loading?: Component
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
  error?: <Exception extends DOMException = any>(err: Exception) => Component
}

/**
 * Statefull Component Signature
 *
 * Accepts upto 3 curried callbacks
 */
export type StatefullSignature<T = any> = (...attrs: Arguments<T>) => (...attrs: Arguments<T>) =>
  | Children
  | ((...attrs: Arguments<T>) => Children)

/**
 * Statefull Component Overloads
 *
 * @example
 * s(({}, [], {}) => ({}, [], {}) => s``)
 */
export type StatefullComponent<T> = {
  /** Literal Signature */
  (tag: TagLiteral, ...interpolate: Interpolate): StatefullComponent<T>
  /** Direct Signature */
  (...attrs: Signature<T>): View;
   /** Statefull Component children signature */
  (...children: Children[]): View;
};

/**
 * Stateful Utility Function
 */
export type Statefull<A = {}, C = Context> = (
  attrs: A,
  children?: Children,
  context?: C
) => (
  attrs: A,
  children?: Children,
  context?: C
) => View<A>

/* -------------------------------------------- */
/* SIN COMPONENT OVERLOADS                      */
/* -------------------------------------------- */

/**
 * COMPONENTS
 *
 * @example
 *
 * // Literal Element Signatures
 * //
 * s`div`
 * s`div`('')
 * s`div`(null)
 * s`div`(1000)
 * s`ul`(s`li`('one'), s`li`('two'))
 * s`ul`([ s`li`('one'), s`li`('two') ])
 * s`a`({ href: '' }, 'link')
 * s`a`({ href: '' }, s`span`('link'))
 *
 * // HyperScript Element Signatures
 * //
 * s('div', '')
 * s('div', 1000)
 * s('ul', s('li', 'one'), s('li', 'two'))
 * s('ul', [ s('li', 'one'), s('li', 'two') ])
 * s('a', { href: '' }, 'link')
 * s('a', { href: '' }, s`span`('link'))
 *
 * // Component Function Signatures
 * //
 * s(() => s`div`)
 * s((attrs) => s`div`(''))
 * s((attrs, children) => children)
 * s((attrs, children, context) => [])
 * s((attrs, children, context) => (attrs, children, context) => [])
 *
 * // Component Curried Signatures
 * //
 * x = s`button`
 * x({ onclick: () => {} }, '')
 *
 * x = s(({ prop = 'foo', ...attrs }) => s``(prop))
 * x({ prop: 'bar' })
 *
 * x = s(({ value }) => ({}, children) => [ children, s`div`(value) ])
 * x({ value: 'baz' }, 'qux')
 *
 * x = s(() => ({}, children) => children)
 * x([ s`h1`('hello'), s`h1`('world') ])
 */
export type Component = {
  /** HyperScript signature for creating a sin view */
  <T extends Selector>(selector: T, ...attributes: StyledSignature<HTMLTagElement<T>>): View;
  /** Literal signature for creating a sin view */
  <T extends HTMLElement>(tag: TagLiteral, ...interpolate: Interpolate): StyledComponent<T>;
  /** Stateless component signature */
  <T>(fn: StatefullSignature<T>): StatefullComponent<T>;
  /** Async component signature */
  <T>(options: StatefullAsync, fn: Promise<StatefullComponent<T>>): View;
  /** Statefull component signature */
  <T>(fn: StatelessSignature<T>): StatelessComponent<T>;
}

