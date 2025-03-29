import type { Doc } from "./Doc";
import type { Route } from "./Route";
import type { Children, View } from "./View";
import type { Literal } from "./Utilities";
import type { Context } from "./Context";
import {
  Attributes,
  AnchorAttrs,
  AreaAttrs,
  AudioAttrs,
  ButtonAttrs,
  CanvasAttrs,
  DataAttrs,
  DetailsAttrs,
  DialogAttrs,
  EmbedAttrs,
  FieldSetAttrs,
  FormAttrs,
  IFrameAttrs,
  ImageAttrs,
  InputAttrs,
  LabelAttrs,
  LIAttrs,
  LinkAttrs,
  MapAttrs,
  MeterAttrs,
  ModAttrs,
  ObjectAttrs,
  OListAttrs,
  OptGroupAttrs,
  OptionAttrs,
  OutputAttrs,
  ProgressAttrs,
  QuoteAttrs,
  ScriptAttrs,
  SelectAttrs,
  SourceAttrs,
  StyleAttrs,
  TableAttrs,
  TableCellAttrs,
  TableColAttrs,
  TextAreaAttrs,
  TimeAttrs,
  TrackAttrs,
  VideoAttrs } from "./HtmlAttributes";

export type SinElement<T> = (
  T extends HTMLBaseElement ? Attributes<T> :
  T extends HTMLLinkElement ? LinkAttrs<T> :
  T extends HTMLStyleElement ? StyleAttrs<T> :
  T extends HTMLQuoteElement ? QuoteAttrs<T> :
  T extends HTMLOListElement ? OListAttrs<T> :
  T extends HTMLLIElement ? LIAttrs<T> :
  T extends HTMLAnchorElement ? AnchorAttrs<T> :
  T extends HTMLQuoteElement ? QuoteAttrs<T> :
  T extends HTMLTimeElement ? TimeAttrs<T> :
  T extends HTMLModElement ? ModAttrs<T> :
  T extends HTMLModElement ? ModAttrs<T> :
  T extends HTMLImageElement ? ImageAttrs<T> :
  T extends HTMLIFrameElement ? IFrameAttrs<T> :
  T extends HTMLEmbedElement ? EmbedAttrs<T> :
  T extends HTMLObjectElement ? ObjectAttrs<T> :
  T extends HTMLVideoElement ? VideoAttrs<T> :
  T extends HTMLAudioElement ? AudioAttrs<T> :
  T extends HTMLSourceElement ? SourceAttrs<T> :
  T extends HTMLTrackElement ? TrackAttrs<T> :
  T extends HTMLMapElement ? MapAttrs<T> :
  T extends HTMLAreaElement ? AreaAttrs<T> :
  T extends HTMLTableElement ? TableAttrs<T> :
  T extends HTMLTableColElement ? TableColAttrs<T> :
  T extends HTMLTableColElement ? TableColAttrs<T> :
  T extends HTMLTableCellElement ? TableCellAttrs<T> :
  T extends HTMLTableCellElement ? TableCellAttrs<T> :
  T extends HTMLFormElement ? FormAttrs<T> :
  T extends HTMLLabelElement ? LabelAttrs<T> :
  T extends HTMLInputElement ? InputAttrs<T> :
  T extends HTMLButtonElement ? ButtonAttrs<T> :
  T extends HTMLSelectElement ? SelectAttrs<T> :
  T extends HTMLOptGroupElement ? OptGroupAttrs<T> :
  T extends HTMLOptionElement ? OptionAttrs<T> :
  T extends HTMLTextAreaElement ? TextAreaAttrs<T> :
  T extends HTMLOutputElement ? OutputAttrs<T> :
  T extends HTMLProgressElement ? ProgressAttrs<T> :
  T extends HTMLMeterElement ? MeterAttrs<T> :
  T extends HTMLFieldSetElement ? FieldSetAttrs<T> :
  T extends HTMLDetailsElement ? DetailsAttrs<T> :
  T extends HTMLDialogElement ? DialogAttrs<T> :
  T extends HTMLScriptElement ? ScriptAttrs<T> :
  T extends HTMLCanvasElement ? CanvasAttrs<T> :
  T extends HTMLDataElement ? DataAttrs<T> :
  T extends HTMLElement ? Attributes<T> :
  T extends HTMLUListElement ? Attributes<T> : never
)

export interface Component {
  (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
  <T extends HTMLElement>(attrs: SinElement<T>, children?: Children): View<T>;
  <T extends HTMLElement>(...children: Children): View<T>;
  <T extends HTMLElement>(fn: (attrs: any, children: Children, context: Context) => Children): View<T>;
}

export interface Static<T> {
  /**
   * @example
   *
   * s`h1`('Sinnner!');
   * s`ul`({ onclick: () => {}}, ['s','i','n'].map(x => s`li`(x) ));
   */
  <Attrs = {}>(attrs: SinElement<T>, children: Children<Attrs>): View<T>;
  <Attrs = {}>(attrs: SinElement<T>, children: Children<Attrs>): View<T>;
  <Attrs = {}>(attrs: SinElement<T>, ...children: Children<Attrs>): View<T>;
}


/**
 * Represents invocation component type
 *
 * @example
 *
 * s`div`({ onclick: () => {}}, 'Sinnner!');
 * s`h1`('Sinnner!');
 * s`ul`({ onclick: () => {}}, ['s','i','n'].map(x => s`li`(x) ));
 */
export declare interface Constructor {
  /**
   * Tagged Literal Component with View/s
   *
   * @example
   *
   * s`input`('Hello Sinner!')
   */
  <T extends HTMLElement>(tag: Literal, ...style: string[]): Static<SinElement<T>>;
}

