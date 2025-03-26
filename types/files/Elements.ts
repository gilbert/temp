import { Attrs } from './Attrs';
import { Context } from './Context';
import { StringUnion, AttrEvent, Void } from './Utilities';
import { Children } from './View';

type InputAutoComplete = StringUnion<
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'bday'
  | 'bday-year'
  | 'bday-day'
  | 'bday-month'
  | 'billing'
  | 'cc-additional-name'
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-family-name'
  | 'cc-given-name'
  | 'cc-name'
  | 'cc-number'
  | 'cc-type'
  | 'country'
  | 'country-name'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'fax'
  | 'given-name'
  | 'home'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'impp'
  | 'language'
  | 'mobile'
  | 'name'
  | 'new-password'
  | 'nickname'
  | 'off'
  | 'on'
  | 'organization'
  | 'organization-title'
  | 'pager'
  | 'photo'
  | 'postal-code'
  | 'sex'
  | 'shipping'
  | 'street-address'
  | 'tel-area-code'
  | 'tel'
  | 'tel-country-code'
  | 'tel-extension'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-national'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'url'
  | 'username'
  | 'work'>

export interface TagEvent<T, E, A> {
  /**
   * Event callback
   */
  (this: T, event: E): Void;
  /**
   * Event callack with {@link DOM}
   */
  (this: T, event: T, dom: T): Void;
  /**
   * Event callback with {@link DOM} and {@link Attrs}
   */
  (this: T, event: E, dom: T, attrs: Attrs<A, T>): Void;
  /**
   * Event callback with {@link DOM}, {@link Attrs} and {@link Children}
   */
  (this: T, event: E, dom: T, attrs: Attrs<A, T>, children: Children<T>): Void;
  /**
   * Event callback with {@link DOM}, {@link Attrs}, {@link Children} and {@link Context}
   */
  (this: T, event: E,dom: T, attrs: Attrs<A, T>, children: Children<T>, context: Context): Void
}

export interface GlobEvents<T extends HTMLElement, A = {}> {

  onanimationcancel?: TagEvent<T, AttrEvent<T, AnimationEvent>, A>;
  onanimationend?: TagEvent<T, AttrEvent<T, AnimationEvent>, A>;
  onanimationiteration?: TagEvent<T, AttrEvent<T, AnimationEvent>, A>;
  onanimationstart?: TagEvent<T, AttrEvent<T, AnimationEvent>, A>;
  /** A pointing device button has been pressed and released on an element. */
  onclick?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** The right button of the mouse is clicked (before the context menu is displayed). */
  oncontextmenu?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device button is clicked twice on an element. */
  ondblclick?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** An element or text selection is being dragged (every 350ms). */
  ondrag?: TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** A drag operation is being ended (by releasing a mouse button or hitting the escape key). */
  ondragend?:TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** A dragged element or text selection enters a valid drop target. */
  ondragenter?:TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** A dragged element or text selection leaves a valid drop target. */
  ondragleave?:TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** An element or text selection is being dragged over a valid drop target (every 350ms). */
  ondragover?:TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** The user starts dragging an element or text selection. */
  ondragstart?:TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** An element is dropped on a valid drop target. */
  ondrop?:TagEvent<T, AttrEvent<T, DragEvent>, A>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event) */
  ongotpointercapture?: TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** A pointing device button (usually a mouse) is pressed on an element. */
  onmousedown?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device is moved onto the element that has the listener attached. */
  onmouseenter?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device is moved off the element that has the listener attached. */
  onmouseleave?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device is moved over an element. */
  onmousemove?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device is moved off the element that has the listener attached or off one of its children. */
  onmouseout?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device is moved onto the element that has the listener attached or onto one of its children. */
  onmouseover?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** A pointing device button is released over an element. */
  onmouseup?:TagEvent<T, AttrEvent<T, MouseEvent>, A>;
  /** The pointer is unlikely to produce any more events. */
  onpointercancel?: TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** The pointer enters the active buttons state. */
  onpointerdown?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** Pointing device is moved inside the hit-testing boundary. */
  onpointerenter?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** Pointing device is moved out of the hit-testing boundary. */
  onpointerleave?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** The pointer changed coordinates. */
  onpointermove?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** The pointing device moved out of hit-testing boundary or leaves detectable hover range. */
  onpointerout?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** The pointing device is moved into the hit-testing boundary. */
  onpointerover?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** The pointer leaves the active buttons state. */
  onpointerup?:TagEvent<T, AttrEvent<T, PointerEvent>, A>;
  /** The document view has been resized. */
  onresize?:TagEvent<T, AttrEvent<T, UIEvent>, A>;
  /** The document view or an element has been scrolled. */
  onscroll?: TagEvent<T, AttrEvent<T, Event>, A>;
  onscrollend?: TagEvent<T, AttrEvent<T, Event>, A>;
  ontransitioncancel?: TagEvent<T, AttrEvent<T, TransitionEvent>, A>;
  ontransitionend?: TagEvent<T, AttrEvent<T, TransitionEvent>, A>;
  ontransitionrun?: TagEvent<T, AttrEvent<T, TransitionEvent>, A>;
  ontransitionstart?: TagEvent<T, AttrEvent<T, TransitionEvent>, A>;
  onwheel?: TagEvent<T, AttrEvent<T, WheelEvent>, A>;
}

export interface GlobAttrs {
  /** Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey)
  */
  accessKey?: string;
  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](https://developer.mozilla.org/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName). returns an array-like object of all child elements which have all of the given class names.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class)
  */
  className?: string;
  /** An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values: `true` or the _empty string_, which indicates that the element must be editable; `false`, which indicates that the element must not be editable.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable)
  */
  contentEditable?: string;
  /** The `id` of a [`<menu>`](https://developer.mozilla.org/docs/Web/HTML/Element/menu). The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked. to use as the contextual menu for this element. */
  contextmenu?: string;
  /** An enumerated attribute indicating the directionality of the element's text. It can have the following values: `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English); `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic); `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir)
  */
  dir?: StringUnion<
    | 'ltr'
    | 'rtl'
    | 'auto'>;
  /** An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values: `true`, which indicates that the element may be dragged `false`, which indicates that the element may not be dragged.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable)
  */
  draggable?: boolean;
  /** A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)
  */
  hidden?: string;
  /** Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)
  */
  id?: string;
  /** The unique, global identifier of an item. */
  itemid?: string;
  /** Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair. */
  itemprop?: string;
  /** Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document. */
  itemref?: string;
  /** `itemscope` (usually) works along with `[itemtype](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context. */
  itemscope?: string;
  /** Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active. */
  itemtype?: string;
  /** Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). **xml:lang** has priority over it.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang)
  */
  lang?: string;
  /** An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values: `true`, which indicates that the element should be, if possible, checked for spelling errors; `false`, which indicates that the element should not be checked for spelling errors.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck)
  */
  spellcheck?: boolean;
  /** Contains [CSS](https://developer.mozilla.org/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](https://developer.mozilla.org/docs/Web/HTML/Element/style). The HTML <style> element contains style information for a document, or part of a document. element have mainly the purpose of allowing for quick styling, for example for testing purposes.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style)
  */
  style?: string;
  /** An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

  > a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation; `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;

  >  a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the **tabindex**. If several elements share the same tabindex, their relative order follows their relative positions in the document.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex)
  */
  tabIndex?: string;
  /** Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title)
  */
  title?: string;
  /** An enumerated attribute that is used to specify whether an element's attribute values and the values of its [`Text`](https://developer.mozilla.org/docs/Web/API/Text). The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children. node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:

  > empty string and `yes`, which indicates that the element will be translated. `no`, which indicates that the element will not be translated.

  [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate)
  */
  translate?: StringUnion<
    | 'yes'
    | 'no'>;
}


interface BaseAttrs<A = {}> extends GlobEvents<HTMLBaseElement, A>, GlobAttrs {
  href?: string;
  target?: StringUnion<
   | '_self'
   | '_blank'
   | '_parent'
   | '_top'>;
}

interface LinkAttrs<A = {}> extends GlobEvents<HTMLLinkElement, A>, GlobAttrs  {
  href?: string;
  rel?: string;
  as?: string;
  crossOrigin?: StringUnion<
   | 'anonymous'
   | 'use-credentials'>;
  hrefLang?: string;
  media?: string;
  sizes?: string;
  title?: string;
  type?: string;
  integrity?: string;
  referrerpolicy?: string;
}

interface StyleAttrs<A = {}> extends GlobEvents<HTMLStyleElement, A>, GlobAttrs  {
  media?: string;
  nonce?: string;
  title?: string;
}

interface QuoteAttrs<A = {}> extends GlobEvents<HTMLQuoteElement, A>, GlobAttrs  {
  cite?: string;
}

interface OListAttrs<A = {}> extends GlobEvents<HTMLOListElement, A>, GlobAttrs  {
  reversed?: string;
  start?: string;
  type?: StringUnion<
   | '1'
   | 'a'
   | 'A'
   | 'i'
   | 'I'>;
}

interface LIAttrs<A = {}> extends GlobEvents<HTMLLIElement, A>, GlobAttrs  {
  value?: string;
}

interface DivAttrs<A = {}> extends GlobEvents<HTMLDivElement, A>, GlobAttrs  {
  onbeforeinput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLDivElement, InputEvent>) => any
  oncut?: (this: GlobalEventHandlers, event: AttrEvent<HTMLDivElement, ClipboardEvent>) => any
  oncopy?: (this: GlobalEventHandlers, event: AttrEvent<HTMLDivElement, ClipboardEvent>) => any
  onpaste?: (this: GlobalEventHandlers, event: AttrEvent<HTMLDivElement, ClipboardEvent>) => any
}

interface AnchorAttrs<A = {}> extends GlobEvents<HTMLAnchorElement, A>, GlobAttrs  {
  href?: string;
  target?: StringUnion<
   | '_self'
   | '_blank'
   | '_parent'
   | '_top'>;
  download?: string;
  rel?: string;
  hrefLang?: string;
  type?: string;
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, FocusEvent>) => any
  onkeydown?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, KeyboardEvent>) => any
  onkeypress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, KeyboardEvent>) => any
  onkeyup?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, KeyboardEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAnchorElement, FocusEvent>) => any
}

interface TimeAttrs<A = {}> extends GlobEvents<HTMLTimeElement, A>, GlobAttrs  {
  datetime?: string;
}

interface ModAttrs<A = {}> extends GlobEvents<HTMLModElement, A>, GlobAttrs  {
  cite?: string;
  datetime?: string;
}

interface ImageAttrs<A = {}> extends GlobEvents<HTMLImageElement, A>, GlobAttrs  {
  alt?: string;
  src?: string;
  srcSet?: string;
  sizes?: string;
  crossOrigin?: StringUnion<
   | 'anonymous'
   | 'use-credentials'>;
  useMap?: string;
  isMap?: string;
  width?: string;
  height?: string;
  decoding?: StringUnion<
   | 'sync'
   | 'async'
   | 'auto'>;
  loading?: StringUnion<
   | 'eager'
   | 'lazy'>;
  onabort?: (this: GlobalEventHandlers, event: AttrEvent<HTMLImageElement, UIEvent>) => any
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLImageElement, ErrorEvent>) => any
  onload?: (this: GlobalEventHandlers, event: AttrEvent<HTMLImageElement, Event>) => any
}

interface IFrameAttrs<A = {}> extends GlobEvents<HTMLIFrameElement, A>, GlobAttrs  {
  src?: string;
  srcDoc?: string;
  name?: string;
  sandbox?: StringUnion<
   | 'allow-forms'
   | 'allow-modals'
   | 'allow-pointer-lock'
   | 'allow-popups'
   | 'allow-popups-to-escape-sandbox'
   | 'allow-same-origin'
   | 'allow-scripts'
   | 'allow-top-navigation'>;
  allow?: string;
  allowFullscreen?: string;
  width?: string;
  height?: string;
  referrerpolicy?: string;
  loading?: StringUnion<
   | 'eager'
   | 'lazy'>;
  onload?: (this: GlobalEventHandlers, event: AttrEvent<HTMLIFrameElement, Event>) => any
}

interface EmbedAttrs<A = {}> extends GlobEvents<HTMLEmbedElement, A>, GlobAttrs  {
  src?: string;
  type?: string;
  width?: string;
  height?: string;
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLEmbedElement, ErrorEvent>) => any
  onload?: (this: GlobalEventHandlers, event: AttrEvent<HTMLEmbedElement, Event>) => any
}

interface ObjectAttrs<A = {}> extends GlobEvents<HTMLObjectElement, A>, GlobAttrs  {
  data?: string;
  type?: string;
  name?: string;
  useMap?: string;
  form?: string;
  width?: string;
  height?: string;
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLObjectElement, ErrorEvent>) => any
  onload?: (this: GlobalEventHandlers, event: AttrEvent<HTMLObjectElement, Event>) => any
}

interface VideoAttrs<A = {}> extends GlobEvents<HTMLVideoElement, A>, GlobAttrs  {
  src?: string;
  autoplay?: string;
  controls?: string;
  crossOrigin?: StringUnion<
   | 'anonymous'
   | 'use-credentials'>;
  loop?: string;
  muted?: string;
  playsInline?: boolean;
  poster?: string;
  preload?: StringUnion<
   | 'none'
   | 'metadata'
   | 'auto'>;
  width?: string;
  height?: string;
  onabort?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, UIEvent>) => any
  oncanplay?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  oncanplaythrough?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  ondurationchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onemptied?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onended?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, ErrorEvent>) => any
  onloadeddata?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onloadedmetadata?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onloadstart?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onpause?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onplay?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onplaying?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onprogress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, ProgressEvent>) => any
  onratechange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onseeked?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onseeking?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onstalled?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onsuspend?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  ontimeupdate?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onvolumechange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
  onwaiting?: (this: GlobalEventHandlers, event: AttrEvent<HTMLVideoElement, Event>) => any
}

interface AudioAttrs<A = {}> extends GlobEvents<HTMLAudioElement, A>, GlobAttrs  {
  src?: string;
  autoplay?: string;
  controls?: string;
  loop?: string;
  muted?: string;
  preload?: StringUnion<
   | 'none'
   | 'metadata'
   | 'auto'>;
  onabort?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, UIEvent>) => any
  oncanplay?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  oncanplaythrough?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  ondurationchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onemptied?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onended?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, ErrorEvent>) => any
  onloadeddata?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onloadedmetadata?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onloadstart?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onpause?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onplay?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onplaying?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onprogress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, ProgressEvent>) => any
  onratechange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onseeked?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onseeking?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onstalled?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onsuspend?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  ontimeupdate?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onvolumechange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
  onwaiting?: (this: GlobalEventHandlers, event: AttrEvent<HTMLAudioElement, Event>) => any
}

interface SourceAttrs<A = {}> extends GlobEvents<HTMLSourceElement, A>, GlobAttrs  {
  src?: string;
  type?: string;
  srcSet?: string;
  sizes?: string;
  media?: string;
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSourceElement, ErrorEvent>) => any
}

interface TrackAttrs<A = {}> extends GlobEvents<HTMLTrackElement, A>, GlobAttrs  {
  default?: string;
  kind?: StringUnion<
   | 'subtitles'
   | 'captions'
   | 'descriptions'
   | 'chapters'
   | 'metadata'>;
  label?: string;
  src?: string;
  srcLang?: string;
}

interface MapAttrs<A = {}> extends GlobEvents<HTMLMapElement, A>, GlobAttrs  {
  name?: string;
}

interface AreaAttrs<A = {}> extends GlobEvents<HTMLAreaElement, A>, GlobAttrs  {
  alt?: string;
  coords?: string;
  shape?: StringUnion<
   | 'circle'
   | 'default'
   | 'poly'
   | 'rect'>;
  href?: string;
  target?: StringUnion<
   | '_self'
   | '_blank'
   | '_parent'
   | '_top'>;
  download?: string;
  rel?: string;
}

interface TableAttrs<A = {}> extends GlobEvents<HTMLTableElement, A>, GlobAttrs  {
  border?: string;
}

interface TableColAttrs<A = {}> extends GlobEvents<HTMLTableColElement, A>, GlobAttrs  {
  span?: string;
}

interface TableCellAttrs<A = {}> extends GlobEvents<HTMLTableCellElement, A>, GlobAttrs  {
  colSpan?: string;
  headers?: string;
  rowSpan?: string;
  scope?: StringUnion<
   | 'row'
   | 'col'
   | 'rowgroup'
   | 'colgroup'>;
  abbr?: string;
}

interface FormAttrs<A = {}> extends GlobEvents<HTMLFormElement, A>, GlobAttrs  {
  action?: string;
  method?: StringUnion<
   | 'get'
   | 'post'
   | 'dialog'>;
  enctype?: StringUnion<
   | 'application/x-www-form-urlencoded'
   | 'multipart/form-data'
   | 'text/plain'>;
  autocomplete?: StringUnion<
   | 'on'
   | 'off'>;
  target?: StringUnion<
   | '_self'
   | '_blank'
   | '_parent'
   | '_top'>;
  noValidate?: string;
  name?: string;
  rel?: string;
  onreset?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFormElement, Event>) => any
  onsubmit?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFormElement, SubmitEvent>) => any
  onformchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFormElement, Event>) => any
  onforminput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFormElement, Event>) => any
}

interface LabelAttrs<A = {}> extends GlobEvents<HTMLLabelElement, A>, GlobAttrs  {
  htmlFor?: string;
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLLabelElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLLabelElement, FocusEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLLabelElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLLabelElement, FocusEvent>) => any
}

interface InputAttrs<A = {}> extends GlobEvents<HTMLInputElement, A>, GlobAttrs  {
  accept?: string;
  alt?: string;
  autocomplete?: InputAutoComplete;
  autofocus?: string;
  checked?: string;
  dirname?: string;
  disabled?: string;
  form?: string;
  formAction?: string;
  formEnctype?: StringUnion<
   | 'application/x-www-form-urlencoded'
   | 'multipart/form-data'
   | 'text/plain'>;
  formMethod?: StringUnion<
   | 'get'
   | 'post'>;
  formNoValidate?: string;
  formTarget?: string;
  height?: string;
  list?: string;
  max?: string;
  maxLength?: string;
  min?: string;
  minlength?: string;
  multiple?: string;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: string;
  required?: string;
  size?: string;
  src?: string;
  step?: string;
  type?: StringUnion<
   | 'hidden'
   | 'text'
   | 'search'
   | 'tel'
   | 'url'
   | 'email'
   | 'password'
   | 'datetime'
   | 'date'
   | 'month'
   | 'week'
   | 'time'
   | 'datetime-local'
   | 'number'
   | 'range'
   | 'color'
   | 'checkbox'
   | 'radio'
   | 'file'
   | 'submit'
   | 'image'
   | 'reset'
   | 'button'>;
  value?: string;
  width?: string;
  onchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, Event>) => any
  oninput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, Event>) => any
  oninvalid?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, Event>) => any
  onselect?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, Event>) => any
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, FocusEvent>) => any
  onkeydown?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, KeyboardEvent>) => any
  onkeypress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, KeyboardEvent>) => any
  onkeyup?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, KeyboardEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, FocusEvent>) => any
  onbeforeinput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, InputEvent>) => any
  oncut?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, ClipboardEvent>) => any
  oncopy?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, ClipboardEvent>) => any
  onpaste?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, ClipboardEvent>) => any
  onsearch?: (this: GlobalEventHandlers, event: AttrEvent<HTMLInputElement, Event>) => any
}

interface ButtonAttrs<A = {}> extends GlobEvents<HTMLButtonElement, A>, GlobAttrs  {
  disabled?: string;
  form?: string;
  formAction?: string;
  formEnctype?: StringUnion<
   | 'application/x-www-form-urlencoded'
   | 'multipart/form-data'
   | 'text/plain'>;
  formMethod?: StringUnion<
   | 'get'
   | 'post'>;
  formNoValidate?: string;
  formTarget?: string;
  name?: string;
  type?: StringUnion<
   | 'button'
   | 'submit'
   | 'reset'
   | 'menu'>;
  value?: string;
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, FocusEvent>) => any
  onkeydown?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, KeyboardEvent>) => any
  onkeypress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, KeyboardEvent>) => any
  onkeyup?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, KeyboardEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLButtonElement, FocusEvent>) => any
}

interface SelectAttrs<A = {}> extends GlobEvents<HTMLSelectElement, A>, GlobAttrs  {
  autocomplete?: InputAutoComplete;
  disabled?: string;
  form?: string;
  multiple?: string;
  name?: string;
  required?: string;
  size?: string;
  onchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, Event>) => any
  oninput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, Event>) => any
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, FocusEvent>) => any
  onkeydown?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, KeyboardEvent>) => any
  onkeypress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, KeyboardEvent>) => any
  onkeyup?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, KeyboardEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLSelectElement, FocusEvent>) => any
}

interface OptGroupAttrs<A = {}> extends GlobEvents<HTMLOptGroupElement, A>, GlobAttrs  {
  disabled?: string;
  label?: string;
}

interface OptionAttrs<A = {}> extends GlobEvents<HTMLOptionElement, A>, GlobAttrs  {
  disabled?: string;
  label?: string;
  selected?: string;
  value?: string;
}

interface TextAreaAttrs<A = {}> extends GlobEvents<HTMLTextAreaElement, A>, GlobAttrs  {
  autocomplete?: InputAutoComplete;
  cols?: string;
  dirname?: string;
  disabled?: string;
  form?: string;
  maxLength?: string;
  minlength?: string;
  name?: string;
  placeholder?: string;
  readOnly?: string;
  required?: string;
  rows?: string;
  wrap?: StringUnion<
   | 'soft'
   | 'hard'>;
  onchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, Event>) => any
  oninput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, Event>) => any
  onselect?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, Event>) => any
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, FocusEvent>) => any
  onkeydown?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, KeyboardEvent>) => any
  onkeypress?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, KeyboardEvent>) => any
  onkeyup?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, KeyboardEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, FocusEvent>) => any
  onbeforeinput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, InputEvent>) => any
  oncut?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, ClipboardEvent>) => any
  oncopy?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, ClipboardEvent>) => any
  onpaste?: (this: GlobalEventHandlers, event: AttrEvent<HTMLTextAreaElement, ClipboardEvent>) => any
}

interface OutputAttrs<A = {}> extends GlobEvents<HTMLOutputElement, A>, GlobAttrs  {
  htmlFor?: string;
  form?: string;
  name?: string;
  onformchange?: (this: GlobalEventHandlers, event: AttrEvent<HTMLOutputElement, Event>) => any
  onforminput?: (this: GlobalEventHandlers, event: AttrEvent<HTMLOutputElement, Event>) => any
}

interface ProgressAttrs<A = {}> extends GlobEvents<HTMLProgressElement, A>, GlobAttrs  {
  value?: string;
  max?: string;
}

interface MeterAttrs<A = {}> extends GlobEvents<HTMLMeterElement, A>, GlobAttrs  {
  value?: string;
  min?: string;
  max?: string;
  low?: string;
  high?: string;
  optimum?: string;
}

interface FieldSetAttrs<A = {}> extends GlobEvents<HTMLFieldSetElement, A>, GlobAttrs  {
  disabled?: string;
  form?: string;
  name?: string;
  onfocus?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFieldSetElement, FocusEvent>) => any
  onblur?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFieldSetElement, FocusEvent>) => any
  onfocusin?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFieldSetElement, FocusEvent>) => any
  onfocusout?: (this: GlobalEventHandlers, event: AttrEvent<HTMLFieldSetElement, FocusEvent>) => any
}

interface DetailsAttrs<A = {}> extends GlobEvents<HTMLDetailsElement, A>, GlobAttrs  {
  open?: string;
}

interface DialogAttrs<A = {}> extends GlobEvents<HTMLDialogElement, A>, GlobAttrs  {
  onshow?: (this: GlobalEventHandlers, event: AttrEvent<HTMLDialogElement, Event>) => any
}

interface ScriptAttrs<A = {}> extends GlobEvents<HTMLScriptElement, A>, GlobAttrs  {
  src?: string;
  type?: string;
  async?: string;
  defer?: string;
  crossOrigin?: StringUnion<
   | 'anonymous'
   | 'use-credentials'>;
  integrity?: string;
  referrerpolicy?: string;
  nomodule?: string;
  onerror?: (this: GlobalEventHandlers, event: AttrEvent<HTMLScriptElement, ErrorEvent>) => any
  onload?: (this: GlobalEventHandlers, event: AttrEvent<HTMLScriptElement, Event>) => any
}

interface CanvasAttrs<A = {}> extends GlobEvents<HTMLCanvasElement, A>, GlobAttrs  {
  width?: string;
  height?: string;
}

interface DataAttrs<A = {}> extends GlobEvents<HTMLDataElement, A>, GlobAttrs  {
  value?: string;
}

export type SinElement<T> =
  T extends HTMLBaseElement ? BaseAttrs :
  T extends HTMLLinkElement ? LinkAttrs :
  T extends HTMLStyleElement ? StyleAttrs :
  T extends HTMLQuoteElement ? QuoteAttrs :
  T extends HTMLOListElement ? OListAttrs :
  T extends HTMLLIElement ? LIAttrs :
  T extends HTMLAnchorElement ? AnchorAttrs :
  T extends HTMLQuoteElement ? QuoteAttrs :
  T extends HTMLTimeElement ? TimeAttrs :
  T extends HTMLModElement ? ModAttrs :
  T extends HTMLModElement ? ModAttrs :
  T extends HTMLImageElement ? ImageAttrs :
  T extends HTMLIFrameElement ? IFrameAttrs :
  T extends HTMLEmbedElement ? EmbedAttrs :
  T extends HTMLObjectElement ? ObjectAttrs :
  T extends HTMLVideoElement ? VideoAttrs :
  T extends HTMLAudioElement ? AudioAttrs :
  T extends HTMLSourceElement ? SourceAttrs :
  T extends HTMLTrackElement ? TrackAttrs :
  T extends HTMLMapElement ? MapAttrs :
  T extends HTMLAreaElement ? AreaAttrs :
  T extends HTMLTableElement ? TableAttrs :
  T extends HTMLTableColElement ? TableColAttrs :
  T extends HTMLTableColElement ? TableColAttrs :
  T extends HTMLTableCellElement ? TableCellAttrs :
  T extends HTMLTableCellElement ? TableCellAttrs :
  T extends HTMLFormElement ? FormAttrs :
  T extends HTMLLabelElement ? LabelAttrs :
  T extends HTMLInputElement ? InputAttrs :
  T extends HTMLButtonElement ? ButtonAttrs :
  T extends HTMLSelectElement ? SelectAttrs :
  T extends HTMLOptGroupElement ? OptGroupAttrs :
  T extends HTMLOptionElement ? OptionAttrs :
  T extends HTMLTextAreaElement ? TextAreaAttrs :
  T extends HTMLOutputElement ? OutputAttrs :
  T extends HTMLProgressElement ? ProgressAttrs :
  T extends HTMLMeterElement ? MeterAttrs :
  T extends HTMLFieldSetElement ? FieldSetAttrs :
  T extends HTMLDetailsElement ? DetailsAttrs :
  T extends HTMLDialogElement ? DialogAttrs :
  T extends HTMLScriptElement ? ScriptAttrs :
  T extends HTMLCanvasElement ? CanvasAttrs :
  T extends HTMLDataElement ? DataAttrs :
  T extends HTMLElement ? BaseAttrs : never
