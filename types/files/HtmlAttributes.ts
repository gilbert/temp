import type { StringUnion} from "./Utilities";
import type { AutoCompleteUnion } from "./HtmlUnions";
import type { SinAttrs } from "./SinAttrs";
import type {
  AriaAttrs,
  BusyARIA,
  FormARIA,
  InteractiveARIA,
  ModalARIA,
  ProgressARIA,
  StructuralARIA,
  ARIARole

 } from "./AriaAttributes";

import type {
  AnimationListeners,
  CanvasListeners,
  DetailsListeners,
  DialogListeners,
  DragListeners,
  FormListeners,
  MediaListeners,
  PointerListeners,
  PopoverListeners,
  SecurityListeners,
  TrackListeners,
  Listener,
  VideoListeners
} from './HtmlEventListeners'

/**
 * Data Attributes
 */
export type DataAttributes = Record<
  `data-${string}`,
  | string
  | number
  | boolean
  | null
  | undefined
>

export interface Attributes<T extends HTMLElement> extends Partial<DataAttributes>
  , AriaAttrs
  , SinAttrs<T>
  , Listener<T>
  , PointerListeners<T>
  , PopoverListeners<T> {

  /**
   * Provides a hint for generating a keyboard shortcut for the current element.
   * This attribute consists of a space-separated list of characters. The browser
   * should use the first one that exists on the computer keyboard layout.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey)
   */
  accesskey?: string;
 /**
   * Associates a positioned element with an anchor element. The attribute's value is the id value of the element
   * you want to anchor the positioned element to. The element can then be positioned using CSS anchor positioning.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/anchor)
   */
  anchor?: string;
  /**
   * Controls whether inputted text is automatically capitalized and, if so, in what manner. This is relevant to
   * `<input>` and `<textarea>` elements, and any element with `contenteditable` set on it. It affects virtual
   * keyboards on mobile devices and voice input, but not physical keyboards. Valid values are:
   *
   * > `none` or `off`
   * >
   * > No autocapitalization is applied (all letters default to lowercase).
   *
   * > `sentences`
   * >
   * > The first letter of each sentence defaults to a capital letter; others are lowercase.
   *
   * > `on`
   * >
   * > Behavior varies by platform (often capitalizes the first letter of each field).
   *
   * > `words`
   * >
   * > The first letter of each word defaults to a capital letter; others are lowercase.
   *
   * > `characters`
   * >
   * > All letters default to uppercase.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize)
   */
  autocapitalize?: StringUnion<"none" | "off" | "sentences" | "on" | "words" | "characters">;
  /**
   * Indicates that an element is to be focused on page load, or as soon as the `<dialog>` it is part of is displayed.
   * This attribute is a boolean, initially false. Only one element in the document may have this attribute; if multiple
   * elements have it, the first one receives focus. Use with caution, as it can affect accessibility by shifting focus
   * unexpectedly, potentially confusing screen readers or causing page scrolling.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autofocus)
   */
  autofocus?: boolean | string;
  /**
   * A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access
   * specific elements via the [class selectors](https://developer.mozilla.org/docs/Web/CSS/Class_selectors) or
   * functions like the method [`Document.getElementsByClassName()`](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName). returns an array-like object of all child elements which have all of the
   * given class names.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class)
   */
  class?: string;
  /**
   * An enumerated attribute indicating if the element should be editable by the user. If so, the browser
   * modifies its widget to allow editing. The attribute must take one of the following values:
   *
   * > `true` (or the _empty string_ `''`),
   * >
   * > Which indicates that the element must be editable.
   *
   * > `false`
   * >
   * > Which indicates that the element must not be editable.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable)
   */
  contenteditable?: boolean | "true" | "false";
  /**
   * An enumerated attribute indicating the directionality of the element's text. It can have the following values:
   *
   * > `ltr`
   * >
   * > This means _left to right_ and is to be used for languages that are written from the left to the right
   * (like English);
   *
   * > `rtl`
   * >
   * > This means _right to left_ and is to be used for languages that are written from the right to the left
   * (like Arabic);
   *
   * > `auto`
   * >
   * > Lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element
   * until it finds a character with a strong directionality, then it applies that directionality to the
   * whole element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir)
   */
  dir?: StringUnion<"ltr" | "rtl" | "auto">;
  /**
   * An enumerated attribute indicating whether the element can be dragged, using the
   * [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It
   * can have the following values?:
   *
   * > `true`
   * >
   * > Which indicates that the element may be dragged
   *
   * > `false`
   * >
   * > Which indicates that the element may not be dragged.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable)
   */
  draggable?: boolean | "true" | "false";
  /**
   * Provides a hint to virtual keyboards about the expected action when the "Enter" key is pressed on an element,
   * such as `<input>` or `<textarea>`. This attribute enhances the user experience on touch devices by customizing
   * the Enter key’s label or icon. Valid values include:
   *
   * > `enter`
   * >
   * > Submits data (e.g., a form) or inserts a newline.
   *
   * > `done`
   * >
   * > Completes the input task without submitting.
   *
   * > `go`
   * >
   * > Navigates to a URL or triggers a primary action.
   *
   * > `next`
   * >
   * > Moves focus to the next field.
   *
   * > `previous`
   * >
   * > Moves focus to the previous field.
   *
   * > `search`
   * >
   * > Initiates a search.
   *
   * > `send`
   * >
   * > Sends a message or data.
   *
   * The browser may adapt the key’s appearance based on the hint, though behavior depends on the platform.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/enterkeyhint)
   */
  enterkeyhint?: StringUnion<
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
  >;
  /**
   * Exports named parts from a shadow DOM to allow styling from outside the shadow boundary. The value is a
   * comma-separated list of part names (optionally with mappings, e.g., `part-name?: exported-name`). These exported
   * parts can be targeted in the containing document using the `::part()` pseudo-element, facilitating cross-boundary
   * styling of web components.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts)
   */
  exportparts?: string;
  /**
   * A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example,
   * it can be used to hide elements of the page that can't be used until the login process has been completed.
   * The browser won't render such elements. This attribute must not be used to hide content that could
   * legitimately be shown.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)
   */
  hidden?: boolean | "true" | "false";
  /**
   * Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify
   * the element when linking (using a fragment identifier), scripting, or styling (with CSS).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)
   */
  id?: string;
  /**
   * Provides a hint to the browser about the type of virtual keyboard to display for entering data into an element,
   * such as `<input>` or `<textarea>`. This attribute helps optimize the input experience on touch devices by
   * suggesting an appropriate keyboard layout. Common values include:
   *
   * > `none`
   * >
   * > No virtual keyboard is shown.
   *
   * > `text`
   * >
   * > Standard text input keyboard.
   *
   * > `decimal`
   * >
   * > Keyboard with numbers and a decimal point.
   *
   * > `numeric`
   * >
   * > Numeric keypad.
   *
   * > `tel`
   * >
   * > Telephone keypad with digits and symbols like `*` and `#`.
   *
   * > `search`
   * >
   * > Keyboard optimized for search input.
   *
   * > `email`
   * >
   * > Keyboard with email-specific characters (e.g., `@`).
   *
   * > `url`
   * >
   * > Keyboard with URL-specific characters (e.g., `/` and `.`).
   *
   * The value is a string, and browsers may interpret additional values depending on platform support.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode)
   */
  inputmode?: StringUnion<
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url"
  >;
  /**
   * Indicates that the element and its subtree are to be ignored by user interaction and assistive technologies,
   * such as screen readers. When set to `true`, the element becomes non-focusable, non-clickable, and is skipped
   * during keyboard navigation. It can take the following values:
   *
   * > `true`
   * >
   * > The element and its content are inert.
   *
   *
   * > `false`
   * >
   * > The element behaves normally (default).
   *
   * This attribute is useful for temporarily disabling sections of a page, such as modal overlays or inactive
   * widgets, without removing them from the DOM.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inert)
   */
  inert?: boolean | "true" | "false";
  /**
   * The unique, global identifier of an item.
   */
  itemid?: string;
  /**
   * Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified,
   * where an `itemprop` consists of a name and value pair.
   */
  itemprop?: string;
  /**
   * Properties that are not descendants of an element with the `itemscope` attribute can be associated with
   * the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional
   * properties elsewhere in the document.
   */
  itemref?: string | string[];
  /**
   * `itemscope` (usually) works along with `[itemtype](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemtype)`
   *  to specify that the HTML contained in a block is about a particular item. `itemscope` creates
   * the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a
   * vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
   */
  itemscope?: string;
  /**
   * Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the
   * data structure. `[itemscope](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemscope)`
   * is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
   */
  itemtype?: string;
  /**
   * Helps define the language of an element?: the language that non-editable elements are in, or the language
   * that editable elements should be written in by the user. The attribute contains one "language tag"
   * (made of hyphen-separated "language subtags") in the format defined in:
   *
   * [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt).
   *
   * > **xml:lang** has priority over it.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang)
   */
  lang?: string;
  /**
   * A cryptographic nonce ("number used once") used with a `<script>` or `<style>` element to allow
   * it under a strict Content Security Policy (CSP). The nonce value must match the one specified in
   * the CSP’s `script-src` or `style-src` directive. It’s a single-use token generated by the server
   * to whitelist specific inline scripts or styles, enhancing security by preventing unauthorized
   * code execution.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/nonce)
   */
  nonce?: string;
  /**
   * A space-separated list of part names used to reference shadow DOM elements across shadow boundaries.
   * When an element in a shadow tree has a `part` attribute, it can be styled from the host document
   * using the `::part()` pseudo-element.
   *
   * This attribute enables targeted styling of shadow DOM components without piercing the shadow boundary.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part)
   */
  part?: string;
  /**
   * Designates an element as a popover, which is a top-layer UI element that appears on demand
   * (e.g., menus or dialogs). Valid values include:
   *
   * > `auto` (default)
   * >
   * > The popover dismisses itself when focus moves outside or another popover takes precedence.
   *
   * > `manual`
   * >
   * > The popover remains until explicitly dismissed by user action or script.
   *
   * > `''` (_empty strong_)
   * >
   * > An empty string is equivalent to `auto`.
   *
   * Use with `popovertarget` attributes or JavaScript to control its behavior.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/popover)
   */
  popover?: string;
  /**
   * Defines the accessibility role of an element for assistive technologies (e.g., screen readers), as per the ARIA
   * (Accessible Rich Internet Applications) specification. The value is an ARIA role
   * (e.g., `button`, `dialog`, `navigation`), which overrides the element’s default role if specified.
   * This enhances accessibility by describing the element’s purpose or behavior when native semantics are
   * insufficient.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/role)
   */
  role?: ARIARole;
  /**
   * Assigns an element to a named slot within a shadow DOM tree.
   * The value corresponds to the `name` attribute of a `<slot>` element in the shadow root.
   *
   * This attribute allows content from the light DOM to be projected into specific locations
   * within a web component’s shadow DOM, enabling flexible composition.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot)
   */
  slot?: string;
  /**
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the
   * following values?: `true`, which indicates that the element should be, if possible, checked for spelling
   * errors; `false`, which indicates that the element should not be checked for spelling errors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck)
   */
  spellcheck?: boolean | "true" | "false";
  /**
   * Contains [CSS](https://developer.mozilla.org/docs/Web/CSS) styling declarations to be applied to the element.
   * Note that it is recommended for styles to be defined in a separate file or files. This attribute and the
   * [`<style>`](https://developer.mozilla.org/docs/Web/HTML/Element/style). The HTML <style> element contains
   * style information for a document, or part of a document. element have mainly the purpose of allowing for
   * quick styling, for example for testing purposes.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style)
   */
  style?: string | Record<string, any>;
  /**
   * An integer attribute indicating if the element can take input focus (is _focusable_), if it should
   * participate to sequential keyboard navigation, and if so, at what position. It can take several values:
   *
   * > a _negative value_ means that the element should be focusable, but should not be reachable via
   * sequential keyboard navigation; `0` means that the element should be focusable and reachable via
   * sequential keyboard navigation, but its relative order is defined by the platform convention;
   *
   * > a _positive value_ means that the element should be focusable and reachable via sequential keyboard
   * navigation; the order in which the elements are focused is the increasing value of the **tabindex**.
   * If several elements share the same tabindex, their relative order follows their relative positions in the document.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex)
   */
  tabindex?: string | number;
  /**
   * Contains a text representing advisory information related to the element it belongs to. Such information
   * can typically, but not necessarily, be presented to the user as a tooltip.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title)
   */
  title?: string;
  /**
   * An enumerated attribute that is used to specify whether an element's attribute values and the values of its
   * [`Text`](https://developer.mozilla.org/docs/Web/API/Text). The Text export interface represents the textual content
   * of Element or Attr. If an element has no markup within its content, it has a single child implementing Text
   * that contains the element's text. However, if the element contains markup, it is parsed into information
   * items and Text nodes that form its children. node children are to be translated when the page is localized,
   * or whether to leave them unchanged. It can have the following values:
   *
   * > empty string and `yes`, which indicates that the element will be translated. `no`, which indicates that
   * the element will not be translated.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate)
   */
  translate?: StringUnion<"yes" | "no">;
  /**
   * Controls the behavior of the virtual (on-screen) keyboard for elements that can trigger it, such as `<input>` or
   * elements with `contenteditable`. It determines whether the virtual keyboard is automatically shown when the
   * element is focused. Valid values are:
   *
   * > `auto`
   * >
   * > The browser decides whether to show the virtual keyboard based on heuristics (default behavior).
   *
   * > `manual`
   * >
   * > The virtual keyboard is not shown automatically; user action (e.g., tapping a keyboard icon) is required.
   *
   *
   * **This attribute is useful for customizing input experiences on touch devices.**
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)
   */
  virtualkeyboardpolicy?: StringUnion<"auto" | "manual">;
  /**
   * Indicates whether the browser should offer writing suggestions (e.g., spelling, grammar, or text completion)
   * for editable elements like `<input>`, `<textarea>`, or those with `contenteditable`. This attribute enhances
   * user input by providing or suppressing predictive text and correction features.
   *
   * It can take the following values:
   *
   * > `true`
   * >
   * > Writing suggestions are enabled (if supported by the browser).
   *
   * > `false`
   * >
   * > Writing suggestions are disabled.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/writingsuggestions)
   */
  writingsuggestions?: boolean | "true" | "false";
}

export interface LinkAttrs<T extends HTMLLinkElement> extends Attributes<T>
  , SecurityListeners<T> {
  /**
   * Specifies the URL of the resource linked by the `<link>` element, such as a stylesheet, icon, or prefetch resource.
   *
   * The value can be an absolute URL or a relative URL. If omitted, the link is invalid and has no effect.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-href)
   */
  href?: string;
  /**
   * Specifies the relationship between the current document and the resource linked by `href`.
   * Used on `<link>` elements.
   *
   * Common values include `stylesheet`, `icon`, `preload`, `dns-prefetch`, `alternate`, and `noopener`.
   * Multiple values can be space-separated. If omitted, no relationship is assumed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-rel)
   */
  rel?: string;
  /**
   * Specifies the type of content being linked by the `<link>` element when used with
   * `rel="preload"` or `rel="modulepreload"`.
   *
   * Valid values include `audio`, `document`, `image`, `script`, `style`, and others,
   * depending on the resource type. Helps the browser prioritize resource loading. If
   * omitted, the browser infers the type from the resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-as)
   */
  as?: string;
  /**
   * Specifies how the `<link>` element handles cross-origin requests when fetching the resource.
   *
   * Valid values are:
   *
   * > `anonymous`
   * >
   * > Sends the request without credentials (e.g., cookies or HTTP authentication).
   *
   * > `use-credentials`
   * >
   * > Sends the request with credentials, if applicable.
   *
   * If omitted, defaults to `anonymous`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-crossorigin)
   */
  crossOrigin?: StringUnion<
    | 'anonymous'
    | 'use-credentials'
  >;
  /**
   * Specifies the language of the resource linked by `href`. Used on `<link>` elements,
   * typically with `rel="alternate"`.
   *
   * The value is a BCP 47 language tag (e.g., `en`, `fr`, `zh-Hans`). If omitted,
   * no language is assumed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-hreflang)
   */
  hrefLang?: string;
  /**
   * Specifies the media for which the linked resource is intended. Used on `<link>` elements,
   * such as stylesheets.
   *
   * The value is a media query (e.g., `screen`, `print`, `all`, `(max-width: 600px)`).
   * If omitted, defaults to `all`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-media)
   */
  media?: string;
  /**
   * Specifies the size of the linked resource, used with `<link>` elements where
   * `rel="icon"` or `rel="apple-touch-icon"`.
   *
   * The value is a space-separated list of sizes (e.g., `16x16`, `32x32 64x64`).
   * If omitted, the browser assumes a default size.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-sizes)
   */
  sizes?: string;
  /**
   * Specifies a title for the linked resource. Used on `<link>` elements with `rel="alternate"`
   * (e.g., feeds) to describe the link.
   *
   * The value is a human-readable string. If omitted, no title is provided.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-title)
   */
  title?: string;
  /**
   * Specifies the MIME type of the linked resource. Used on `<link>` elements to hint at the
   * resource’s format.
   *
   * Examples include `text/css` for stylesheets or `image/png` for icons. If omitted, the
   * browser infers the type from the resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-type)
   */
  type?: string;
  /**
   * Specifies a cryptographic hash of the linked resource to verify its integrity.
   * Used on `<link>` elements with external resources.
   *
   * The value is a hash (e.g., `sha256-abc123...`). If the resource doesn’t match,
   * it’s rejected. If omitted, no integrity check is performed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-integrity)
   */
  integrity?: string;
  /**
   * Specifies the referrer policy for fetching the linked resource. Used on `<link>`
   * elements to control referrer information.
   *
   * Common values include `no-referrer`, `origin`, `same-origin`, and `unsafe-url`.
   * If omitted, the default policy applies.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-referrerpolicy)
   */
  referrerpolicy?: string;
}

export interface StyleAttrs<T extends HTMLStyleElement> extends Attributes<T> {
  /**
   * Specifies the media for which the `<style>` element’s styles are intended.
   *
   * The value is a media query (e.g., `screen`, `print`, `all`, `(min-width: 768px)`). If omitted, defaults to `all`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/style#attr-media)
   */
  media?: string;
  /**
   * Specifies a cryptographic nonce ("number used once") to allow the `<style>` element under
   * a strict Content Security Policy (CSP).
   *
   * The value must match the nonce in the CSP’s `style-src` directive. If omitted, the style may be blocked by CSP.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/style#attr-nonce)
   */
  nonce?: string;
  /**
   * Specifies a title for the `<style>` element, used to identify it among multiple stylesheets
   * for alternate style switching.
   *
   * The value is a string. If omitted, the style applies by default unless disabled programmatically.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/style#attr-title)
   */
  title?: string;
}

export interface QuoteAttrs<T extends HTMLQuoteElement> extends Attributes<T>
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * Specifies the source URL of a quotation or citation. Used on `<blockquote>`, `<q>`, and `<cite>` elements.
   *
   * The value is an absolute or relative URL pointing to the original source. If omitted, no source is indicated.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote#attr-cite)
   */
  cite?: string;
  /**
   * Defines the semantic role of a quote element, such as a blockquote or note.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"blockquote" | "note" | "presentation">;
}

export interface OListAttrs<T extends HTMLOListElement> extends Attributes<T>
  , StructuralARIA
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * Specifies that the `<ol>` (ordered list) should display its items in reverse order, from highest to lowest.
   *
   * The presence of the attribute (e.g., `reversed` or `reversed=""`) enables this behavior. If omitted,
   * the list is in ascending order.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-reversed)
   */
  reversed?: string;
  /**
   * Specifies the starting number for the `<ol>` (ordered list).
   *
   * The value is an integer (e.g., `1`, `5`, `-2`). If omitted, defaults to `1`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-start)
   */
  start?: string;
  /**
   * Specifies the type of marker to use for the `<ol>` (ordered list) items.
   *
   * Valid values are:
   *
   * > `1`
   * >
   * > Decimal numbers (e.g., 1, 2, 3) (default).
   *
   * > `a`
   * >
   * > Lowercase letters (e.g., a, b, c).
   *
   * > `A`
   * >
   * > Uppercase letters (e.g., A, B, C).
   *
   * > `i`
   * >
   * > Lowercase Roman numerals (e.g., i, ii, iii).
   *
   * > `I`
   * >
   * > Uppercase Roman numerals (e.g., I, II, III).
   *
   * If omitted, defaults to `1`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-type)
   */
  type?: StringUnion<
    | '1'
    | 'a'
    | 'A'
    | 'i'
    | 'I'
  >;
  /**
   * Specifies the role of an ordered list, such as a list or menu.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"list" | "directory" | "menu" | "tablist" | "tree">;
}

export interface LIAttrs<T extends HTMLLIElement> extends Attributes<T>
  , StructuralARIA
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * Specifies the numeric value of an `<li>` (list item) within an `<ol>` (ordered list).
   *
   * The value is an integer (e.g., `1`, `10`, `-5`). It overrides the automatic numbering
   * for this item and subsequent items unless another `value` is set. Ignored in unordered
   * lists (`<ul>`). If omitted, the list’s natural order applies.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/li#attr-value)
   */
  value?: string;
  /**
   * Indicates the role of a list item, such as an option or menuitem.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"listitem" | "menuitem" | "option" | "tab" | "treeitem">;
}

export interface DivAttrs<T extends HTMLElement> extends Attributes<T>
  , StructuralARIA {
  /**
   * Defines the role of a div, often used for structural sections like articles or regions.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"article" | "complementary" | "contentinfo" | "main" | "navigation" | "region" | "group">;
}

export interface AnchorAttrs<T extends HTMLAnchorElement> extends Attributes<T>
  , InteractiveARIA {
  /**
   * Specifies the URL of the resource or page the anchor element links to, or the location
   * within the current document (e.g., a fragment identifier like `#section1`).
   *
   * If omitted, the anchor acts as a placeholder and does not navigate. The value can be an
   * absolute URL, relative URL, or a hash (`#`) for in-page navigation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-href)
   */
  href?: string;
  /**
   * Specifies where to open the linked resource defined by `href`. Valid values are:
   *
   * > `_self`
   * >
   * > Opens the link in the same frame or window (default behavior).
   *
   * > `_blank`
   * >
   * > Opens the link in a new tab or window, depending on the browser.
   *
   * > `_parent`
   * >
   * > Opens the link in the parent frame (if in a nested frame; otherwise, behaves like `_self`).
   *
   * > `_top`
   * >
   * > Opens the link in the topmost frame (replacing all frames; otherwise, behaves like `_self`).
   *
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;

  /**
   * Indicates that the linked resource should be downloaded instead of navigated to when clicked.
   * The value specifies the suggested filename for the downloaded file. If omitted, the browser
   * navigates to the `href` URL instead of downloading. If the value is an empty string
   * (e.g., `download=""`), the original filename from the server is used.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-download)
   */
  download?: string;

  /**
   * Specifies the relationship between the current document and the resource linked by `href`.
   * If omitted, no specific relationship is implied. Common combinations like
   * `rel="noopener noreferrer"` are often used with `target="_blank"`.
   *
   * The value is a space-separated list of link types, such as:
   *
   * > `nofollow`
   * >
   * > Instructs search engines not to follow the link.
   *
   * > `noopener`
   * >
   * > Prevents the new window from accessing the opener’s `window.opener` object (enhances security).
   *
   * > `noreferrer`
   * >
   * > Prevents sending the HTTP referrer header to the linked resource.
   *
   * > `alternate`
   * >
   * > Indicates the link is an alternate representation (e.g., RSS feed).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-rel)
   */
  rel?: string;

  /**
   * Specifies the language of the resource linked by `href`. The value is a BCP 47 language tag (e.g., `en`, `fr-CA`).
   * This attribute is advisory and helps browsers or assistive technologies understand the linked content’s language. If omitted, no language is specified.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-hreflang)
   */
  hrefLang?: string;

  /**
   * Specifies the MIME type of the resource linked by `href` (e.g., `text/html`, `application/pdf`).
   * This attribute is advisory and helps the browser determine how to handle the resource before fetching it.
   * If omitted, the browser infers the type from the server response or file extension.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-type)
   */
  type?: string;
  /**
   * Specifies the role of an anchor, typically a link or interactive element like a button.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"link" | "button" | "menuitem">;
}

export interface TimeAttrs<T extends HTMLTimeElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * Specifies a machine-readable date or time for the `<time>` element’s content.
   *
   * The value must be a valid date, time, or datetime string in a format like:
   *
   * - `YYYY-MM-DD`
   * - `HH:MM`
   * - `YYYY-MM-DDTHH:MMZ`
   *
   * (e.g., `2023-10-15`, `14:30`, `2023-10-15T14:30Z`). Used to provide semantic meaning
   * to human-readable text within the element. If omitted, the element’s text content is
   * assumed to be human-readable only, with no machine-readable interpretation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/time#attr-datetime)
   */
  datetime?: string;
  /**
   * Defines the role of a time element, typically representing a time value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"time">;
}

export interface ModAttrs<T extends HTMLModElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * Specifies the source URL of the document or resource explaining the modification.
   * Used on `<ins>` (inserted) and `<del>` (deleted) elements.
   *
   * The value is an absolute or relative URL pointing to the source of the change. If omitted,
   * no source is indicated.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ins#attr-cite)
   */
  cite?: string;
  /**
   * Specifies the date and time when the modification was made. Used on `<ins>` (inserted)
   * and `<del>` (deleted) elements. The value must be a valid datetime string (e.g., `2023-10-15T14:30Z`).
   * If omitted, no timestamp is associated with the change.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ins#attr-datetime)
   */
  datetime?: string;
  /**
   * Indicates the role of a modification element (ins/del), such as insertion or deletion.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"insertion" | "deletion" | "presentation">;
}

export interface ImageAttrs<T extends HTMLImageElement> extends Attributes<T> {
  /**
   * Specifies alternative text for the `<img>` element, displayed if the image fails
   * to load or for accessibility (e.g., screen readers).
   *
   * The value is a concise description of the image's content or purpose (e.g., `A red apple`).
   * If omitted, accessibility is impaired, and no fallback text is shown.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-alt)
   */
  alt?: string;
  /**
   * Specifies the URL of the image resource for the `<img>` element.
   *
   * The value can be an absolute or relative URL (e.g., `/images/photo.jpg`).
   * If omitted or invalid, the image fails to load, and the `alt` text is displayed instead.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-src)
   */
  src?: string;
  /**
   * Specifies a set of image sources for the `<img>` element, allowing the browser to choose
   * based on resolution or viewport.
   *
   * The value is a comma-separated list of URLs with optional descriptors
   * (e.g., `image-1x.jpg 1x, image-2x.jpg 2x`). Used with `sizes` to support responsive images.
   * If omitted, the `src` attribute is used as the sole source.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-srcset)
   */
  srcSet?: string;
  /**
   * Specifies the intended display sizes for the `<img>` element when used with `srcset`.
   *
   * The value is a comma-separated list of sizes (e.g., `100vw`, `50vw, 600px`).
   * It helps the browser select the appropriate image from `srcset`. If omitted, the browser
   * assumes a default size (typically `100vw`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-sizes)
   */
  sizes?: string;
  /**
   * Specifies how the `<img>` element handles cross-origin requests when fetching the image.
   *
   * Valid values are:
   *
   * > `anonymous`
   * >
   * > Sends the request without credentials (e.g., cookies or HTTP authentication).
   *
   * > `use-credentials`
   * >
   * > Sends the request with credentials, if applicable.
   *
   * If omitted, defaults to `anonymous`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-crossorigin)
   */
  crossOrigin?: StringUnion<
    | 'anonymous'
    | 'use-credentials'
  >;
  /**
   * Specifies the name of an image map (`<map>`) to associate with the `<img>` element.
   *
   * The value is the `name` attribute of a `<map>` element (e.g., `#mapname`), prefixed with `#`.
   * If omitted, the image is not linked to a map, and `isMap` has no effect.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap)
   */
  useMap?: string;
  /**
   * Specifies that the `<img>` element is part of a server-side image map. Used with `useMap`.
   *
   * The presence of the attribute (e.g., `isMap` or `isMap=""`) indicates the image coordinates
   * are sent to the server when clicked. Ignored if `useMap` is not present. If omitted, the image
   * is not treated as a server-side map.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-ismap)
   */
  isMap?: string;
  /**
   * Specifies the width of the `<img>` element in pixels or CSS units.
   *
   * The value is a positive number (e.g., `300`, `50%`). It sets the display width, overriding the
   * image’s intrinsic size if provided. If omitted, the intrinsic width is used, or the image scales per CSS.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-width)
   */
  width?: string;
  /**
   * Specifies the height of the `<img>` element in pixels or CSS units.
   *
   * The value is a positive number (e.g., `200`, `25vh`). It sets the display height, overriding
   * the image’s intrinsic size if provided. If omitted, the intrinsic height is used, or the image
   * scales per CSS.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-height)
   */
  height?: string;
  /**
   * Specifies how the `<img>` element should be decoded by the browser. If omitted, defaults to `auto`.
   *
   * Valid values are:
   *
   * > `sync`
   * >
   * > Decodes synchronously with the main thread, potentially blocking rendering.
   *
   * > `async`
   * >
   * > Decodes asynchronously, improving performance but possibly delaying display.
   *
   * > `auto`
   * >
   * > Lets the browser decide the decoding method (default).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-decoding)
   */
  decoding?: StringUnion<
    | 'sync'
    | 'async'
    | 'auto'
  >;
  /**
   * Specifies how the `<img>` element should be loaded relative to viewport visibility.
   *
   * If omitted, defaults to `eager`. Valid values are:
   *
   * > `eager`
   * >
   * > Loads the image immediately, regardless of visibility (default).
   *
   * > `lazy`
   * >
   * > Delays loading until the image is near the viewport, improving page load performance.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-loading)
   */
  loading?: StringUnion<
    | 'eager'
    | 'lazy'
  >;
  /**
   * Specifies the role of an image, typically as an image or decorative element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"img" | "presentation">;
}

export interface IFrameAttrs<T extends HTMLIFrameElement> extends Attributes<T>
  , BusyARIA {
  /**
   * Specifies the URL of the content to embed in the iframe. Can be a webpage, file, or data URI.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-src)
   */
  src?: string;
  /**
   * Inline HTML to display within the iframe, overriding `src` if both are present.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-srcdoc)
   */
  srcDoc?: string;
  /**
   * A name for the iframe, used as a target for links or forms.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-name)
   */
  name?: string;
  /**
   * Restricts iframe permissions. Values include:
   *
   * - `allow-forms`
   * - `allow-modals`
   * - `allow-pointer-lock`
   * - `allow-popups`
   * - `allow-popups-to-escape-sandbox`
   * - `allow-same-origin`, `allow-scripts`
   * - `allow-top-navigation`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-sandbox)
   */
  sandbox?: StringUnion<
    | 'allow-forms'
    | 'allow-modals'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-popups-to-escape-sandbox'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-top-navigation'
  >;
  /**
   * Defines feature policies for the iframe (e.g., `fullscreen`, `payment`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-allow)
   */
  allow?: string;
  /**
   * Allows the iframe content to enter fullscreen mode. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-allowfullscreen)
   */
  allowFullscreen?: string;
  /**
   * Sets the iframe width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-width)
   */
  width?: string;
  /**
   * Sets the iframe height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-height)
   */
  height?: string;
  /**
   * Controls HTTP referrer info sent with requests (e.g., `no-referrer`, `origin`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-referrerpolicy)
   */
  referrerPolicy?: string; // Fixed typo: `referrerpolicy` → `referrerPolicy`
  /**
   * Controls iframe loading: `eager` (immediate) or `lazy` (deferred).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-loading)
   */
  loading?: StringUnion<'eager' | 'lazy'>;
  /**
   * Defines the role of an iframe, such as an application or document container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "document" | "presentation">;
}

export interface EmbedAttrs<T extends HTMLEmbedElement> extends Attributes<T>
  , BusyARIA {
  /**
   * Specifies the URL of the resource to embed (e.g., plugin content).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-src)
   */
  src?: string;
  /**
   * MIME type of the embedded resource (e.g., `application/x-shockwave-flash`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-type)
   */
  type?: string;
  /**
   * Sets the embed width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-width)
   */
  width?: string;
  /**
   * Sets the embed height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-height)
   */
  height?: string;
  /**
   * Indicates the role of an embed element, often an application or media container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface ObjectAttrs<T extends HTMLObjectElement> extends Attributes<T>
  , BusyARIA {
  /**
   * Specifies the URL of the resource to embed (e.g., image, PDF).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-data)
   */
  data?: string;
  /**
   * MIME type of the embedded resource (e.g., `application/pdf`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-type)
   */
  type?: string;
  /**
   * A name for the object, used as a target or identifier.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-name)
   */
  name?: string;
  /**
   * Links to an `<map>` element by its `name` for clickable areas.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-usemap)
   */
  useMap?: string;
  /**
   * Associates the object with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-form)
   */
  form?: string;
  /**
   * Sets the object width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-width)
   */
  width?: string;
  /**
   * Sets the object height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-height)
   */
  height?: string;
  /**
   * Specifies the role of an object element, typically an application or media container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface VideoAttrs<T extends HTMLVideoElement> extends Attributes<T>
  , BusyARIA
  , VideoListeners<T>
  , DragListeners<T>
  , AnimationListeners<T> {
  /**
   * Specifies the URL of the video file.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-src)
   */
  src?: string;
  /**
   * Starts video playback automatically. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-autoplay)
   */
  autoplay?: string;
  /**
   * Displays video controls (e.g., play, pause). Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-controls)
   */
  controls?: string;
  /**
   * Controls CORS: `anonymous` (no credentials) or `use-credentials`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-crossorigin)
   */
  crossOrigin?: StringUnion<'anonymous' | 'use-credentials'>;
  /**
   * Loops the video. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-loop)
   */
  loop?: string;
  /**
   * Mutes the video. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-muted)
   */
  muted?: string;
  /**
   * Plays video inline instead of fullscreen on mobile. Use `true`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-playsinline)
   */
  playsInline?: boolean;
  /**
   * URL of an image to display before playback starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-poster)
   */
  poster?: string;
  /**
   * Hints preload behavior: `none`, `metadata`, or `auto`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-preload)
   */
  preload?: StringUnion<'none' | 'metadata' | 'auto'>;
  /**
   * Sets the video width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-width)
   */
  width?: string;
  /**
   * Sets the video height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-height)
   */
  height?: string;
  /**
   * Defines the role of a video element, often an application or media presentation.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface AudioAttrs<T extends HTMLAudioElement> extends Attributes<T>
  , BusyARIA
  , MediaListeners<T>
  , AnimationListeners<T> {
  /**
   * Specifies the URL of the audio file.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-src)
   */
  src?: string;
  /**
   * Starts audio playback automatically. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-autoplay)
   */
  autoplay?: string;
  /**
   * Displays audio controls (e.g., play, pause). Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-controls)
   */
  controls?: string;
  /**
   * Loops the audio. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-loop)
   */
  loop?: string;
  /**
   * Mutes the audio. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-muted)
   */
  muted?: string;
  /**
   * Hints preload behavior: `none`, `metadata`, or `auto`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-preload)
   */
  preload?: StringUnion<'none' | 'metadata' | 'auto'>;
  /**
   * Indicates the role of an audio element, typically an application or media presentation.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface SourceAttrs<T extends HTMLSourceElement> extends Attributes<T> {
  /**
   * Specifies the URL of the media resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-src)
   */
  src?: string;
  /**
   * MIME type of the media resource (e.g., `video/mp4`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-type)
   */
  type?: string;
  /**
   * Comma-separated list of image URLs for responsive images.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-srcset)
   */
  srcSet?: string;
  /**
   * Sizes for responsive images (e.g., `100w`, `50vw`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-sizes)
   */
  sizes?: string;
  /**
   * Media query for when the source applies (e.g., `(min-width: 600px)`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-media)
   */
  media?: string;
}

export interface TrackAttrs<T extends HTMLTrackElement> extends Attributes<T>
  , TrackListeners<T> {
  /**
   * Marks this track as default. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-default)
   */
  default?: string;
  /**
   * Type of track: `subtitles`, `captions`, `descriptions`, `chapters`, or `metadata`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-kind)
   */
  kind?: StringUnion<'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'>;
  /**
   * User-visible label for the track.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-label)
   */
  label?: string;
  /**
   * URL of the track file (e.g., `.vtt`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-src)
   */
  src?: string;
  /**
   * Language of the track (e.g., `en`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-srclang)
   */
  srcLang?: string; // Fixed typo: `srcLang` → matches `srclang`
}

export interface MapAttrs<T extends HTMLMapElement> extends Attributes<T> {
  /**
   * Name of the image map, referenced by `usemap`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/map#attr-name)
   */
  name?: string;
  /**
   * Specifies the role of a map element, often a region or decorative container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"region" | "presentation">;
}

export interface AreaAttrs<T extends HTMLAreaElement> extends Attributes<T>, InteractiveARIA {
  /**
   * Alternate text for the area if the image fails to load.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-alt)
   */
  alt?: string;
  /**
   * Coordinates defining the clickable area (e.g., `x,y,r` for circle).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-coords)
   */
  coords?: string;
  /**
   * Shape of the area: `circle`, `default`, `poly`, or `rect`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-shape)
   */
  shape?: StringUnion<'circle' | 'default' | 'poly' | 'rect'>;
  /**
   * URL of the linked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-href)
   */
  href?: string;
  /**
   * Where to open the link: `_self`, `_blank`, `_parent`, or `_top`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * Suggests a filename for downloading the linked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-download)
   */
  download?: string;
  /**
   * Relationship to the linked resource (e.g., `nofollow`, `noopener`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-rel)
   */
  rel?: string;
  /**
   * Defines the role of an area element, typically a link or interactive button.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"link" | "button">;
}

export interface TableAttrs<T extends HTMLTableElement> extends Attributes<T>, StructuralARIA {
  /**
   * Sets the border width of the table (deprecated; use CSS instead).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/table#attr-border)
   */
  border?: string;
  /**
   * Indicates the role of a table, such as a table or grid structure.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"table" | "grid" | "treegrid">;
}

export interface TableColAttrs<T extends HTMLTableColElement> extends Attributes<T>, StructuralARIA {
  /**
   * Number of columns this `<col>` spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/col#attr-span)
   */
  span?: string;
  /**
   * Specifies the role of a table column, typically a column header.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"columnheader">;
}

export interface TableCellAttrs<T extends HTMLTableCellElement> extends Attributes<T>, StructuralARIA {
  /**
   * Number of columns this cell spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-colspan)
   */
  colSpan?: string;
  /**
   * Space-separated list of header cell IDs this cell is associated with.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-headers)
   */
  headers?: string;
  /**
   * Number of rows this cell spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-rowspan)
   */
  rowSpan?: string;
  /**
   * Scope of the header cell: `row`, `col`, `rowgroup`, or `colgroup`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-scope)
   */
  scope?: StringUnion<'row' | 'col' | 'rowgroup' | 'colgroup'>;
  /**
   * Abbreviated version of the cell content for accessibility.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-abbr)
   */
  abbr?: string;
  /**
   * Defines the role of a table cell, such as a cell or row header.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"cell" | "gridcell" | "rowheader">;
}

export interface FormAttrs<T extends HTMLFormElement> extends Attributes<T>
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T> {
  /**
   * URL to submit the form to.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-action)
   */
  action?: string;
  /**
   * HTTP method for form submission: `get`, `post`, or `dialog`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-method)
   */
  method?: StringUnion<'get' | 'post' | 'dialog'>;
  /**
   * MIME type for form data: `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-enctype)
   */
  enctype?: StringUnion<
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
  >;
  /**
   * Controls autocomplete: `on` or `off`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-autocomplete)
   */
  autocomplete?: StringUnion<'on' | 'off'>;
  /**
   * Where to display the response: `_self`, `_blank`, `_parent`, or `_top`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * Disables form validation. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-novalidate)
   */
  noValidate?: string;
  /**
   * Name of the form for scripting or targeting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-name)
   */
  name?: string;
  /**
   * Relationship to the form action (e.g., `nofollow`, `noopener`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-rel)
   */
  rel?: string;
  /**
   * Indicates the role of a form, typically a form or search container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"form" | "search">;
}

export interface LabelAttrs<T extends HTMLLabelElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * ID of the form control this label is for.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/label#attr-for)
   */
  htmlFor?: string; // Matches HTML `for` attribute
}

export interface InputAttrs<T extends HTMLInputElement> extends Attributes<T>
  , InteractiveARIA
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * File types accepted (e.g., `image/*`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-accept)
   */
  accept?: string;
  /**
   * Alternate text for image inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-alt)
   */
  alt?: string;
  /**
   * Autocomplete hint (e.g., `email`, `off`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-autocomplete)
   */
  autocomplete?: StringUnion<
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
    | 'work'
  >
  /**
   * Focuses the input on page load. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-autofocus)
   */
  autofocus?: string;
  /**
   * Marks the input as checked (for checkboxes/radios).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-checked)
   */
  checked?: string;
  /**
   * Name of the directionality field to submit.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-dirname)
   */
  dirname?: string;
  /**
   * Disables the input. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-disabled)
   */
  disabled?: string;
  /**
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-form)
   */
  form?: string;
  /**
   * URL to submit the form to (overrides form’s `action`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formaction)
   */
  formAction?: string;
  /**
   * MIME type for form data (overrides form’s `enctype`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formenctype)
   */
  formEnctype?: StringUnion<
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
  >;
  /**
   * HTTP method for form submission (overrides form’s `method`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formmethod)
   */
  formMethod?: StringUnion<'get' | 'post'>;
  /**
   * Disables validation (overrides form’s `novalidate`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formnovalidate)
   */
  formNoValidate?: string;
  /**
   * Target for form submission (overrides form’s `target`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formtarget)
   */
  formTarget?: string;
  /**
   * Height of image inputs in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-height)
   */
  height?: string;
  /**
   * ID of a `<datalist>` for suggestions.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-list)
   */
  list?: string;
  /**
   * Maximum value for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-max)
   */
  max?: string;
  /**
   * Maximum length of text input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-maxlength)
   */
  maxLength?: string;
  /**
   * Minimum value for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-min)
   */
  min?: string;
  /**
   * Minimum length of text input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-minlength)
   */
  minLength?: string; // Fixed typo: `minlength` → `minLength`
  /**
   * Allows multiple values (e.g., for file or email inputs).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-multiple)
   */
  multiple?: string;
  /**
   * Name of the input for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-name)
   */
  name?: string;
  /**
   * Regex pattern the input must match.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-pattern)
   */
  pattern?: string;
  /**
   * Placeholder text for the input.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-placeholder)
   */
  placeholder?: string;
  /**
   * Makes the input read-only. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-readonly)
   */
  readOnly?: string;
  /**
   * Marks the input as required. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-required)
   */
  required?: string;
  /**
   * Visible width of the input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-size)
   */
  size?: string;
  /**
   * URL of the image for `type="image"`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-src)
   */
  src?: string;
  /**
   * Increment step for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-step)
   */
  step?: string;
  /**
   * Type of input (e.g., `text`, `checkbox`, `file`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-type)
   */
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
    | 'button'
  >;
  /**
   * Initial value of the input.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-value)
   */
  value?: string;
  /**
   * Width of image inputs in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-width)
   */
  width?: string;
  /**
   * Specifies the role of an input, such as a checkbox or textbox.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<
    | "checkbox"
    | "combobox"
    | "radio"
    | "searchbox"
    | "slider"
    | "spinbutton"
    | "switch"
    | "textbox"
  >;
}

export interface ButtonAttrs<T extends HTMLButtonElement> extends Attributes<T>
  , InteractiveARIA
  , AnimationListeners<T> {
  /**
   * Disables the button. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-disabled)
   */
  disabled?: string;
  /**
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-form)
   */
  form?: string;
  /**
   * URL to submit the form to (overrides form’s `action`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formaction)
   */
  formAction?: string;
  /**
   * MIME type for form data (overrides form’s `enctype`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formenctype)
   */
  formEnctype?: StringUnion<
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
  >;
  /**
   * HTTP method for form submission (overrides form’s `method`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formmethod)
   */
  formMethod?: StringUnion<'get' | 'post'>;
  /**
   * Disables validation (overrides form’s `novalidate`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formnovalidate)
   */
  formNoValidate?: string;
  /**
   * Target for form submission (overrides form’s `target`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formtarget)
   */
  formTarget?: string;
  /**
   * Name of the button for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-name)
   */
  name?: string;
  /**
   * Button behavior: `button`, `submit`, `reset`, or `menu`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-type)
   */
  type?: StringUnion<'button' | 'submit' | 'reset' | 'menu'>;
  /**
   * Value submitted with the form.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-value)
   */
  value?: string;
  /**
   * Defines the role of a button, typically a button or menu item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"button" | "menuitem" | "menuitemcheckbox" | "menuitemradio">;
}

export interface SelectAttrs<T extends HTMLSelectElement> extends Attributes<T>
  , InteractiveARIA
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T> {
  /**
   * Autocomplete hint (e.g., `off`, `country`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-autocomplete)
   */
  autocomplete?: AutoCompleteUnion
  /**
   * Disables the select. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-disabled)
   */
  disabled?: string;
  /**
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-form)
   */
  form?: string;
  /**
   * Allows multiple selections. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-multiple)
   */
  multiple?: string;
  /**
   * Name of the select for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-name)
   */
  name?: string;
  /**
   * Marks the select as required. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-required)
   */
  required?: string;
  /**
   * Number of visible options.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-size)
   */
  size?: string;
  /**
   * Indicates the role of a select element, such as a listbox or combobox.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"listbox" | "combobox">;
}

export interface OptGroupAttrs<T extends HTMLOptGroupElement> extends Attributes<T>
  , StructuralARIA {
  /**
   * Disables the option group. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup#attr-disabled)
   */
  disabled?: string;
  /**
   * Label for the option group.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup#attr-label)
   */
  label?: string;
  /**
   * Specifies the role of an option group, typically a grouping container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"group">;
}

export interface OptionAttrs<T extends HTMLOptionElement> extends Attributes<T>
  , InteractiveARIA {
  /**
   * Disables the option. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-disabled)
   */
  disabled?: string;
  /**
   * User-visible label for the option.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-label)
   */
  label?: string;
  /**
   * Marks the option as selected. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-selected)
   */
  selected?: string;
  /**
   * Value submitted with the form.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-value)
   */
  value?: string;
  /**
   * Defines the role of an option, typically a selectable option.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"option">;
}

export interface TextAreaAttrs<T extends HTMLTextAreaElement> extends Attributes<T>
  , InteractiveARIA
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T> {
  /**
   * Autocomplete hint (e.g., `off`, `sentence`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-autocomplete)
   */
  autocomplete?: AutoCompleteUnion;
  /**
   * Number of visible columns.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-cols)
   */
  cols?: string;
  /**
   * Name of the directionality field to submit.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-dirname)
   */
  dirname?: string;
  /**
   * Disables the textarea. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-disabled)
   */
  disabled?: string;
  /**
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-form)
   */
  form?: string;
  /**
   * Maximum length in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-maxlength)
   */
  maxLength?: string;
  /**
   * Minimum length in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-minlength)
   */
  minLength?: string; // Fixed typo: `minlength` → `minLength`
  /**
   * Name of the textarea for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-name)
   */
  name?: string;
  /**
   * Placeholder text for the textarea.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-placeholder)
   */
  placeholder?: string;
  /**
   * Makes the textarea read-only. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-readonly)
   */
  readOnly?: string;
  /**
   * Marks the textarea as required. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-required)
   */
  required?: string;
  /**
   * Number of visible rows.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-rows)
   */
  rows?: string;
  /**
   * Line wrapping: `soft` (default) or `hard`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-wrap)
   */
  wrap?: StringUnion<'soft' | 'hard'>;
  /**
   * Indicates the role of a textarea, typically a textbox.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"textbox">;
}

export interface OutputAttrs<T extends HTMLOutputElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * Space-separated IDs of inputs this output relates to.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-for)
   */
  htmlFor?: string; // Matches HTML `for` attribute
  /**
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-form)
   */
  form?: string;
  /**
   * Name of the output for scripting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-name)
   */
  name?: string;
  /**
   * Specifies the role of an output, typically a status indicator.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"status">;
}

export interface ProgressAttrs<T extends HTMLProgressElement> extends Attributes<T>
  , ProgressARIA
  , AnimationListeners<T> {
  /**
   * Current progress value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/progress#attr-value)
   */
  value?: string;
  /**
   * Maximum progress value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/progress#attr-max)
   */
  max?: string;
  /**
   * Defines the role of a progress element, typically a progressbar.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"progressbar">;
}

export interface MeterAttrs<T extends HTMLMeterElement> extends Attributes<T>
  , ProgressARIA
  , AnimationListeners<T> {
  /**
   * Current meter value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-value)
   */
  value?: string;
  /**
   * Minimum meter value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-min)
   */
  min?: string;
  /**
   * Maximum meter value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-max)
   */
  max?: string;
  /**
   * Boundary for low values.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-low)
   */
  low?: string;
  /**
   * Boundary for high values.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-high)
   */
  high?: string;
  /**
   * Optimal value for the meter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-optimum)
   */
  optimum?: string;
  /**
   * Indicates the role of a meter, such as a progressbar or status indicator.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"progressbar" | "status">;
}

export interface FieldSetAttrs<T extends HTMLFieldSetElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * Disables the fieldset and its controls. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset#attr-disabled)
   */
  disabled?: string;
  /**
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset#attr-form)
   */
  form?: string;
  /**
   * Name of the fieldset for scripting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset#attr-name)
   */
  name?: string;
  /**
   * Specifies the role of a fieldset, typically a grouping or presentation container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"group" | "presentation">;
}

export interface DetailsAttrs<T extends HTMLDetailsElement> extends Attributes<T>
  , InteractiveARIA
  , ModalARIA
  , DetailsListeners<T>
  , AnimationListeners<T> {
  /**
   * Shows the details open by default. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/details#attr-open)
   */
  open?: string;
  /**
   * Defines the role of a details element, such as a group or dialog.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"group" | "dialog">;
}

export interface DialogAttrs<T extends HTMLDialogElement> extends Attributes<T>
  , InteractiveARIA
  , ModalARIA
  , DialogListeners<T>
  , AnimationListeners<T> {
  /**
   * Indicates the role of a dialog, typically a dialog or alertdialog.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"dialog" | "alertdialog">;
}

export interface ScriptAttrs<T extends HTMLScriptElement> extends Attributes<T> {
  /**
   * URL of the external script file.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-src)
   */
  src?: string;
  /**
   * MIME type of the script (e.g., `text/javascript`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-type)
   */
  type?: string;
  /**
   * Executes script asynchronously. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-async)
   */
  async?: string;
  /**
   * Defers script execution until HTML is parsed. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer)
   */
  defer?: string;
  /**
   * Controls CORS: `anonymous` (no credentials) or `use-credentials`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-crossorigin)
   */
  crossOrigin?: StringUnion<'anonymous' | 'use-credentials'>;
  /**
   * Integrity hash for script validation (e.g., `sha256-...`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-integrity)
   */
  integrity?: string;
  /**
   * Controls HTTP referrer info (e.g., `no-referrer`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-referrerpolicy)
   */
  referrerPolicy?: string; // Fixed typo: `referrerpolicy` → `referrerPolicy`
  /**
   * Excludes script for module-supporting browsers. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-nomodule)
   */
  nomodule?: string;
}

export interface CanvasAttrs<T extends HTMLCanvasElement> extends Attributes<T>
  , BusyARIA
  , CanvasListeners<T> {
  /**
   * Width of the canvas in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/canvas#attr-width)
   */
  width?: string;
  /**
   * Height of the canvas in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/canvas#attr-height)
   */
  height?: string;
  /**
   * Specifies the role of a canvas, such as an application or presentation area.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface DataAttrs<T extends HTMLDataElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * Machine-readable value of the element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/data#attr-value)
   */
  value?: string;
  /**
   * Defines the role of a data element, typically a term or presentation item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"term" | "presentation">;
}