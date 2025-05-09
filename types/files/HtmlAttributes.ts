import type { Attrs, StringUnion} from "./Utilities";
import type {
  AriaAttrs,
  BusyARIA,
  FormARIA,
  InteractiveARIA,
  ModalARIA,
  ProgressARIA,
  StructuralARIA,
  ARIARole
} from "./HtmlAriaAttributes";

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
  DOMListen,
  VideoListeners
} from './HtmlEventListeners'
import { Children, View } from "./View";
import { Context } from "./Context";



/**
 * Extends the {@link View} `attrs` to include sin specific attributes.
 * Called by the {@link Attrs} namespace interface entries.
 */
export interface SinAttributes <T extends HTMLElement> {
  /**
   * DOM Element render callback. Dom is a creation lifcycle hook which
   * will call in the post rendering cycle of a sin view.
   *
   * > **TIP**
   * >
   * > Attach any third-party libraries or tools for the element via `root`
   *
   * @example
   *
   * s`button`({
   *   dom: (root, attrs, children, context) => {
   *     root.innerText = attrs.name
   *   }
   * })
   */
  dom?:
  | ((element: T, attrs?: Attrs, children?: Children, context?: Context) => Promise<any> | any)
  | Array<(element: T, attrs?: Attrs, children?: Children, context?: Context) => Promise<any> | any>;
/**
  /**
   * Waits for children using deferred removal
   *
   * @default false
   */
  deferrable?: boolean
  /**
   * The value used to map a DOM element to its respective item in an array of data.
   */
  key?: any;
}

/**
 * Accepts types for `data-*` attributes
 */
type DataAttributeValues =
  | string
  | number
  | boolean
  | null
  | undefined

/**
 * Data Attributes
 */
export type DataAttribute = {
  [attr: `data-${string}`]: DataAttributeValues;
  [attr: `data${Capitalize<string>}`]: DataAttributeValues;
}

export type AutoCompleteUnion = StringUnion<
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
>;

/**
 * **HTML Attributes**
 *
 * This interface inherits all DOM Element attributes and is used as a definitive
 * fallback, presenting all possible tag attributes to sin components. Developers
 * who provide generics to sin tagged literals in TypeScript runtimes can narrow
 * intelliSense far better than those in JavaScript runtimes.
 *
 * The reason for such an exhaustive interface is due TypeScript limitation around
 * handling of tagged literals via {@link TemplateStringsArray} which prevents type
 * extraction and renders parse tag name analysis impossible.
 */
export interface HTMLAttributes<T extends HTMLElement> extends
  Attributes<T>,
  BusyARIA,
  FormARIA,
  InteractiveARIA,
  ModalARIA,
  ProgressARIA,
  StructuralARIA,
  AnimationListeners<T>,
  CanvasListeners<T>,
  DetailsListeners<T>,
  DialogListeners<T>,
  DragListeners<T>,
  FormListeners<T>,
  MediaListeners<T>,
  PointerListeners<T>,
  PopoverListeners<T>,
  SecurityListeners<T>,
  TrackListeners<T>,
  VideoListeners<T> {
  /**
   * - {@link InputAttributes}
   *
   * Specifies file types accepted for `<input>` elements with `type="file"` (e.g., `image/*`, `.pdf`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-accept)
   */
  accept?: string;
  /**
   * **Available Attributes**
   *
   * - {@link LinkAttributes}
   * - {@link ImageAttributes}
   * - {@link ScriptAttributes}
   * - {@link VideoAttributes}
   *
   * Specifies how the element handles cross-origin requests when fetching resources.
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
  crossOrigin?: StringUnion<"anonymous" | "use-credentials">;
  /**
   * **Available Attributes**
   *
   * - {@link LinkAttributes}
   *
   * Specifies the type of content being linked or embedded (e.g., `audio`, `script`, `video/mp4`).
   * Helps the browser prioritize resource loading or handling.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-as)
   */
  as?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ScriptAttributes}
   *
   * Indicates that the script should be executed asynchronously. Use `true` or an empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-async)
   */
  async?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link ImageAttributes}
   * - {@link AreaAttributes}
   *
   * Alternate text for `<input type="image">`, `<img>`, or `<area>` elements, displayed if the image fails to load
   * or for accessibility (e.g., screen readers). Should describe the content or purpose.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-alt)
   */
  alt?: string;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   * - {@link AudioAttributes}
   *
   * Indicates that media playback should start automatically. Use `true` or an empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-autoplay)
   */
  autoplay?: string;
  /**
   * **Available Attributes**
   *
   * - {@link Attributes}
   *
   * Controls whether inputted text is automatically capitalized. Valid values are:
   *
   * > `none` or `off`
   * >
   * > No autocapitalization is applied.
   *
   * > `sentences`
   * >
   * > First letter of each sentence is capitalized.
   *
   * > `on`
   * >
   * > Behavior varies by platform.
   *
   * > `words`
   * >
   * > First letter of each word is capitalized.
   *
   * > `characters`
   * >
   * > All letters are uppercase.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize)
   */
  autocapitalize?: StringUnion<"none" | "off" | "sentences" | "on" | "words" | "characters">;
  /**
   * **Available Attributes**
   *
   * - {@link FormAttributes}
   * - {@link InputAttributes}
   * - {@link SelectAttributes}
   * - {@link TextAreaAttributes}
   *
   * Controls autocomplete behavior for form elements. Combines values from `<input>`, `<select>`, and `<textarea>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-autocomplete)
   */
  autocomplete?: StringUnion<
    | "on"
    | "off"
    | "additional-name"
    | "address-level1"
    | "address-level2"
    | "address-level3"
    | "address-level4"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "bday"
    | "bday-year"
    | "bday-day"
    | "bday-month"
    | "billing"
    | "cc-additional-name"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-family-name"
    | "cc-given-name"
    | "cc-name"
    | "cc-number"
    | "cc-type"
    | "country"
    | "country-name"
    | "current-password"
    | "email"
    | "family-name"
    | "fax"
    | "given-name"
    | "home"
    | "honorific-prefix"
    | "honorific-suffix"
    | "impp"
    | "language"
    | "mobile"
    | "name"
    | "new-password"
    | "nickname"
    | "organization"
    | "organization-title"
    | "pager"
    | "photo"
    | "postal-code"
    | "sex"
    | "shipping"
    | "street-address"
    | "tel-area-code"
    | "tel"
    | "tel-country-code"
    | "tel-extension"
    | "tel-local"
    | "tel-local-prefix"
    | "tel-local-suffix"
    | "tel-national"
    | "transaction-amount"
    | "transaction-currency"
    | "url"
    | "username"
    | "work"
  >;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   *
   * Indicates that a checkbox or radio input is checked by default.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-checked)
   */
  checked?: string;
  /**
   * **Available Attributes**
   *
   * - {@link QuoteAttributes}
   * - {@link ModAttributes}
   *
   * Specifies the source URL of a quotation, citation, or modification.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote#attr-cite)
   */
  cite?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TextAreaAttributes}
   *
   * Specifies the number of visible columns in a `<textarea>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-cols)
   */
  cols?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TableCellAttributes}
   *
   * Number of columns a table cell spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-colspan)
   */
  colSpan?: string;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   * - {@link AudioAttributes}
   *
   * Displays playback controls for `<video>` or `<audio>` elements.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-controls)
   */
  controls?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AreaAttributes}
   *
   * Coordinates defining the clickable area in an image map (e.g., `x,y,r` for circle).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-coords)
   */
  coords?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ObjectAttributes}
   *
   * Specifies the URL of the resource to embed (e.g., image, PDF).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-data)
   */
  data?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TimeAttributes}
   * - {@link ModAttributes}
   *
   * Specifies a machine-readable date or time (e.g., `2023-10-15T14:30Z`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/time#attr-datetime)
   */
  datetime?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   *
   * Specifies how the browser decodes the image. Values: `sync`, `async`, or `auto`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-decoding)
   */
  decoding?: StringUnion<"sync" | "async" | "auto">;
  /**
   * **Available Attributes**
   *
   * - {@link TrackAttributes}
   *
   * Marks the track as default. Use `true` or an empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-default)
   */
  default?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ScriptAttributes}
   *
   * Defers script execution until HTML is parsed. Use `true` or an empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer)
   */
  defer?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link TextAreaAttributes}
   *
   * Name of the directionality field to submit for `<input>` or `<textarea>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-dirname)
   */
  dirname?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   * - {@link SelectAttributes}
   * - {@link OptGroupAttributes}
   * - {@link OptionAttributes}
   * - {@link TextAreaAttributes}
   * - {@link FieldSetAttributes}
   *
   * Disables the element (e.g., button, input, fieldset). Use `true` or an empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-disabled)
   */
  disabled?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AnchorAttributes}
   * - {@link AreaAttributes}
   *
   * Suggests a filename for downloading the linked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-download)
   */
  download?: string;
  /**
   * **Available Attributes**
   *
   * - {@link FormAttributes}
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   *
   * Specifies the MIME type for form data submission. Values combined from `<form>` and `<button>`/`input`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-enctype)
   */
  enctype?: StringUnion<"application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain">;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   * - {@link SelectAttributes}
   * - {@link TextAreaAttributes}
   * - {@link FieldSetAttributes}
   * - {@link OutputAttributes}
   * - {@link ObjectAttributes}
   *
   * Associates the element with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-form)
   */
  form?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   *
   * URL to submit the form to, overriding the form’s `action`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formaction)
   */
  formAction?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   *
   * MIME type for form data, overriding the form’s `enctype`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formenctype)
   */
  formEnctype?: StringUnion<"application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain">;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   *
   * HTTP method for form submission, overriding the form’s `method`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formmethod)
   */
  formMethod?: StringUnion<"get" | "post">;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   *
   * Disables form validation, overriding the form’s `novalidate`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formnovalidate)
   */
  formNoValidate?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ButtonAttributes}
   * - {@link InputAttributes}
   *
   * Target for form submission, overriding the form’s `target`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formtarget)
   */
  formTarget?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * **Available Attributes**
   *
   * - {@link TableCellAttributes}
   *
   * Space-separated list of header cell IDs associated with this cell.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-headers)
   */
  headers?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   * - {@link IFrameAttributes}
   * - {@link EmbedAttributes}
   * - {@link ObjectAttributes}
   * - {@link VideoAttributes}
   * - {@link InputAttributes}
   * - {@link CanvasAttributes}
   *
   * Specifies the height of the element in pixels or CSS units (e.g., `<canvas>`, `<img>`, `<video>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/canvas#attr-height)
   */
  height?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AnchorAttributes}
   * - {@link LinkAttributes}
   * - {@link AreaAttributes}
   *
   * Specifies the URL of the linked resource (e.g., `<a>`, `<link>`, `<area>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-href)
   */
  href?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AnchorAttributes}
   * - {@link LinkAttributes}
   *
   * Specifies the language of the linked resource (e.g., `en`, `fr-CA`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-hreflang)
   */
  hrefLang?: string;
  /**
   * **Available Attributes**
   *
   * - {@link LabelAttributes}
   * - {@link OutputAttributes}
   *
   * Specifies the ID of the form control this label or output is associated with.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/label#attr-for)
   */
  htmlFor?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ScriptAttributes}
   * - {@link LinkAttributes}
   *
   * Specifies a cryptographic hash to verify the integrity of the resource (e.g., `sha256-...`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-integrity)
   */
  integrity?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   *
   * Indicates that the image is part of a server-side image map.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-ismap)
   */
  isMap?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TrackAttributes}
   *
   * Specifies the type of track for `<track>` elements. Values:
   * `subtitles`, `captions`, `descriptions`, `chapters`, `metadata`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-kind)
   */
  kind?: StringUnion<"subtitles" | "captions" | "descriptions" | "chapters" | "metadata">;
  /**
   * **Available Attributes**
   *
   * - {@link OptGroupAttributes}
   * - {@link OptionAttributes}
   * - {@link TrackAttributes}
   *
   * Specifies the label for an option group, option, or track.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup#attr-label)
   */
  label?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   *
   * Specifies the ID of a `<datalist>` for input suggestions.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-list)
   */
  list?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   * - {@link IFrameAttributes}
   * - {@link VideoAttributes}
   *
   * Controls resource loading behavior. Values: `eager` (immediate), `lazy` (deferred).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-loading)
   */
  loading?: boolean | StringUnion<"eager" | "lazy">;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   * - {@link AudioAttributes}
   *
   * Indicates that the media should loop playback.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-loop)
   */
  loop?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link ProgressAttributes}
   * - {@link MeterAttributes}
   *
   * Specifies the maximum value for numeric inputs or progress/meter elements.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-max)
   */
  max?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link TextAreaAttributes}
   *
   * Specifies the maximum length of text input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-maxlength)
   */
  maxLength?: string;
  /**
   * **Available Attributes**
   *
   * - {@link LinkAttributes}
   * - {@link StyleAttributes}
   * - {@link SourceAttributes}
   *
   * Specifies the media query for which the resource is intended (e.g., `screen`, `print`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-media)
   */
  media?: string;
  /**
   * **Available Attributes**
   *
   * - {@link FormAttributes}
   *
   * Specifies the HTTP method for form submission. Values: `get`, `post`, `dialog`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-method)
   */
  method?: StringUnion<"get" | "post" | "dialog">;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link MeterAttributes}
   *
   * Specifies the minimum value for numeric inputs or meter elements.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-min)
   */
  min?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link TextAreaAttributes}
   *
   * Specifies the minimum length of text input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-minlength)
   */
  minLength?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link SelectAttributes}
   *
   * Allows multiple values (e.g., files, emails) for `<input>` or `<select>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-multiple)
   */
  multiple?: string;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   * - {@link AudioAttributes}
   *
   * Mutes the media playback.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-muted)
   */
  muted?: string;
  /**
   * **Available Attributes**
   *
   * {@link MapAttributes}
   * {@link IFrameAttributes}
   * {@link ObjectAttributes}
   * {@link InputAttributes}
   * {@link ButtonAttributes}
   * {@link SelectAttributes}
   * {@link TextAreaAttributes}
   * {@link OutputAttributes}
   * {@link FieldSetAttributes}
   * {@link FormAttributes}
   *
   * Specifies the name of the element (e.g., `<map>`, `<form>`, `<input>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/map#attr-name)
   */
  name?: string;
  /**
   * **Available Attributes**
   *
   * - {@link FormAttributes}
   *
   * Disables form validation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-novalidate)
   */
  noValidate?: string;
  /**
   * **Available Attributes**
   *
   * - {@link DetailsAttributes}
   *
   * Indicates that the `<details>` element is open by default.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/details#attr-open)
   */
  open?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   *
   * Specifies a regex pattern the input must match.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-pattern)
   */
  pattern?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link TextAreaAttributes}
   *
   * Placeholder text for `<input>` or `<textarea>` elements.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-placeholder)
   */
  placeholder?: string;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   *
   * Plays video inline on mobile devices instead of fullscreen.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-playsinline)
   */
  playsInline?: boolean;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   *
   * Specifies the URL of an image to display before video playback starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-poster)
   */
  poster?: string;
  /**
   * **Available Attributes**
   *
   * - {@link VideoAttributes}
   * - {@link AudioAttributes}
   *
   * Hints preload behavior for media. Values: `none`, `metadata`, `auto`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-preload)
   */
  preload?: StringUnion<"none" | "metadata" | "auto">;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link TextAreaAttributes}
   *
   * Makes the element read-only (e.g., `<input>`, `<textarea>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-readonly)
   */
  readOnly?: string;
  /**
   * **Available Attributes**
   *
   * - {@link LinkAttributes}
   * - {@link IFrameAttributes}
   * - {@link ScriptAttributes}
   *
   * Specifies the referrer policy for fetching resources (e.g., `no-referrer`, `origin`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-referrerpolicy)
   */
  referrerPolicy?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AnchorAttributes}
   * - {@link LinkAttributes}
   * - {@link AreaAttributes}
   * - {@link FormAttributes}
   *
   * Specifies the relationship between the document and linked resource (e.g., `nofollow`, `noopener`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-rel)
   */
  rel?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link SelectAttributes}
   * - {@link TextAreaAttributes}
   *
   * Marks the element as required for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-required)
   */
  required?: string;
  /**
   * **Available Attributes**
   *
   * - {@link OListAttributes}
   *
   * Reverses the order of an ordered list (`<ol>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-reversed)
   */
  reversed?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TableCellAttributes}
   *
   * Number of rows a table cell spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-rowspan)
   */
  rowSpan?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TextAreaAttributes}
   *
   * Specifies the number of visible rows in a `<textarea>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-rows)
   */
  rows?: string;
  /**
   * **Available Attributes**
   *
   * - {@link IFrameAttributes}
   *
   * Restricts iframe permissions. Values:
   * `allow-forms`, `allow-modals`, `allow-pointer-lock`, `allow-popups`, `allow-popups-to-escape-sandbox`,
   * `allow-same-origin`, `allow-scripts`, `allow-top-navigation`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-sandbox)
   */
  sandbox?: StringUnion<
    | "allow-forms"
    | "allow-modals"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-top-navigation"
  >;
  /**
   * **Available Attributes**
   *
   * - {@link TableCellAttributes}
   *
   * Specifies the scope of a header cell. Values: `row`, `col`, `rowgroup`, `colgroup`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-scope)
   */
  scope?: StringUnion<"row" | "col" | "rowgroup" | "colgroup">;
  /**
   * **Available Attributes**
   *
   * - {@link OptionAttributes}
   *
   * Marks the option as selected by default.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-selected)
   */
  selected?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AreaAttributes}
   *
   * Specifies the shape of an area in an image map. Values: `circle`, `default`, `poly`, `rect`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-shape)
   */
  shape?: StringUnion<"circle" | "default" | "poly" | "rect">;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link SelectAttributes}
   *
   * Specifies the visible width of an input or select in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-size)
   */
  size?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   * - {@link SourceAttributes}
   * - {@link LinkAttributes}
   *
   * Specifies the intended display sizes for responsive images (e.g., `100vw`, `50vw, 600px`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-sizes)
   */
  sizes?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TableColAttributes}
   *
   * Number of columns an element spans (e.g., `<col>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/col#attr-span)
   */
  span?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   *
   * Specifies the increment step for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-step)
   */
  step?: string;
  /**
   * **Available Attributes**
   *
   * - {@link OListAttributes}
   *
   * Specifies the starting number for an ordered list (`<ol>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-start)
   */
  start?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   * - {@link SourceAttributes}
   *
   * Specifies a set of image sources for responsive images (e.g., `image-1x.jpg 1x, image-2x.jpg 2x`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-srcset)
   */
  srcSet?: string;
  /**
   * **Available Attributes**
   *
   * - {@link IFrameAttributes}
   *
   * Inline HTML to display within an iframe, overriding `src`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-srcdoc)
   */
  srcDoc?: string;
  /**
   * **Available Attributes**
   *
   * - {@link TrackAttributes}
   *
   * Specifies the language of the track (e.g., `en`, `fr`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-srclang)
   */
  srcLang?: string;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   * - {@link VideoAttributes}
   * - {@link AudioAttributes}
   * - {@link SourceAttributes}
   * - {@link TrackAttributes}
   * - {@link ScriptAttributes}
   * - {@link IFrameAttributes}
   * - {@link EmbedAttributes}
   * - {@link InputAttributes}
   *
   * Specifies the URL of the resource (e.g., `<img>`, `<video>`, `<script>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-src)
   */
  src?: string;
  /**
   * **Available Attributes**
   *
   * - {@link AnchorAttributes}
   * - {@link FormAttributes}
   * - {@link AreaAttributes}
   *
   * Specifies where to open the linked resource. Values: `_self`, `_blank`, `_parent`, `_top`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link ButtonAttributes}
   * - {@link OListAttributes}
   * - {@link LinkAttributes}
   * - {@link ScriptAttributes}
   * - {@link SourceAttributes}
   * - {@link EmbedAttributes}
   * - {@link ObjectAttributes}
   * - {@link AnchorAttributes}
   *
   * Specifies the type of input, content, or list marker (e.g., `text`, `checkbox`, `video/mp4`, `1`, `a`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-type)
   */
  type?: StringUnion<
    | "hidden"
    | "text"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "password"
    | "datetime"
    | "date"
    | "month"
    | "week"
    | "time"
    | "datetime-local"
    | "number"
    | "range"
    | "color"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "image"
    | "reset"
    | "button"
    | "menu"
    | "1"
    | "a"
    | "A"
    | "i"
    | "I"
  >;
  /**
   * **Available Attributes**
   *
   * - {@link ImageAttributes}
   * - {@link ObjectAttributes}
   *
   * Specifies the name of an image map (`<map>`) to associate with the element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap)
   */
  useMap?: string;
  /**
   * **Available Attributes**
   *
   * - {@link InputAttributes}
   * - {@link OptionAttributes}
   * - {@link ButtonAttributes}
   * - {@link ProgressAttributes}
   * - {@link MeterAttributes}
   * - {@link DataAttributes}
   * - {@link LIAttributes}
   *
   * Specifies the value of the element (e.g., `<input>`, `<option>`, `<progress>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-value)
   */
  value?: string;
  /**
   * **Available Attributes**
   *
   * - {@link CanvasAttributes}
   * - {@link ImageAttributes}
   * - {@link IFrameAttributes}
   * - {@link EmbedAttributes}
   * - {@link ObjectAttributes}
   * - {@link VideoAttributes}
   * - {@link InputAttributes}
   *
   * Specifies the width of the element in pixels or CSS units (e.g., `<canvas>`, `<img>`, `<video>`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/canvas#attr-width)
   */
  width?: string;
  /**
   * **Available Attributes**
   *
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Controls line wrapping in a `<textarea>`. Values: `soft` (default), `hard`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-wrap)
   */
  wrap?: StringUnion<"soft" | "hard">;
}

export interface Attributes<T extends HTMLElement> extends AriaAttrs
  , SinAttributes<T>
  , DOMListen<T>
  , PointerListeners<T>
  , PopoverListeners<T> {

  [attribute: string]: any;

  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
  autocapitalize?: StringUnion<"none" | "off" | "sentences" | "on" | "words" | "characters">
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Indicates that an element is to be focused on page load, or as soon as the `<dialog>` it is part of is displayed.
   * This attribute is a boolean, initially false. Only one element in the document may have this attribute; if multiple
   * elements have it, the first one receives focus. Use with caution, as it can affect accessibility by shifting focus
   * unexpectedly, potentially confusing screen readers or causing page scrolling.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autofocus)
   */
  autofocus?: boolean | string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access
   * specific elements via the [class selectors](https://developer.mozilla.org/docs/Web/CSS/Class_selectors) or
   * functions like the method [`Document.getElementsByClassName()`](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName). returns an array-like object of all child elements which have all of the
   * given class names.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class)
   */
  class?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Exports named parts from a shadow DOM to allow styling from outside the shadow boundary. The value is a
   * comma-separated list of part names (optionally with mappings, e.g., `part-name?: exported-name`). These exported
   * parts can be targeted in the containing document using the `::part()` pseudo-element, facilitating cross-boundary
   * styling of web components.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts)
   */
  exportparts?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example,
   * it can be used to hide elements of the page that can't be used until the login process has been completed.
   * The browser won't render such elements. This attribute must not be used to hide content that could
   * legitimately be shown.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)
   */
  hidden?: boolean | "true" | "false";
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify
   * the element when linking (using a fragment identifier), scripting, or styling (with CSS).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)
   */
  id?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * The unique, global identifier of an item.
   */
  itemid?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified,
   * where an `itemprop` consists of a name and value pair.
   */
  itemprop?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Properties that are not descendants of an element with the `itemscope` attribute can be associated with
   * the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional
   * properties elsewhere in the document.
   */
  itemref?: string | string[];
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * `itemscope` (usually) works along with [itemtype](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemtype)
   *  to specify that the HTML contained in a block is about a particular item. `itemscope` creates
   * the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a
   * vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
   */
  itemscope?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the
   * data structure. `[itemscope](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemscope)`
   * is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
   */
  itemtype?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the
   * following values?: `true`, which indicates that the element should be, if possible, checked for spelling
   * errors; `false`, which indicates that the element should not be checked for spelling errors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck)
   */
  spellcheck?: boolean | "true" | "false";
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
   * Contains a text representing advisory information related to the element it belongs to. Such information
   * can typically, but not necessarily, be presented to the user as a tooltip.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title)
   */
  title?: string;
  /**
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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
   * {@link HTMLElement}  →  {@link Attributes}
   *
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

export interface LinkAttributes<T extends HTMLLinkElement = HTMLLinkElement> extends Attributes<T>
  , SecurityListeners<T> {
  /**
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
   * Specifies the URL of the resource linked by the `<link>` element, such as a stylesheet, icon, or prefetch resource.
   * The value can be an absolute URL or a relative URL. If omitted, the link is invalid and has no effect.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-href)
   */
  href?: string;
  /**
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
   * Specifies a title for the linked resource. Used on `<link>` elements with `rel="alternate"`
   * (e.g., feeds) to describe the link.
   *
   * The value is a human-readable string. If omitted, no title is provided.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-title)
   */
  title?: string;
  /**
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
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
   * {@link HTMLLinkElement}  →  {@link LinkAttributes}
   *
   * Specifies the referrer policy for fetching the linked resource. Used on `<link>`
   * elements to control referrer information. Common values include `no-referrer`, `origin`, `same-origin`
   * and `unsafe-url`. If omitted, the default policy applies.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/link#attr-referrerpolicy)
   */
  referrerpolicy?: string;
}

export interface StyleAttributes<T extends HTMLStyleElement = HTMLStyleElement> extends Attributes<T> {
  /**
   * {@link HTMLStyleElement}  →  {@link StyleAttributes}
   *
   * Specifies the media for which the `<style>` element’s styles are intended.
   * The value is a media query (e.g., `screen`, `print`, `all`, `(min-width: 768px)`).
   * If omitted, defaults to `all`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/style#attr-media)
   */
  media?: string;
  /**
   * {@link HTMLStyleElement}  →  {@link StyleAttributes}
   *
   * Specifies a cryptographic nonce ("number used once") to allow the `<style>` element under
   * a strict Content Security Policy (CSP). The value must match the nonce in the CSP’s
   * `style-src` directive. If omitted, the style may be blocked by CSP.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/style#attr-nonce)
   */
  nonce?: string;
  /**
   * {@link HTMLStyleElement}  →  {@link StyleAttributes}
   *
   * Specifies a title for the `<style>` element, used to identify it among multiple stylesheets
   * for alternate style switching. The value is a string. If omitted, the style applies by default
   * unless disabled programmatically.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/style#attr-title)
   */
  title?: string;
}

export interface QuoteAttributes<T extends HTMLQuoteElement = HTMLQuoteElement> extends Attributes<T>
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * {@link HTMLQuoteElement}  →  {@link QuoteAttributes}
   *
   * Specifies the source URL of a quotation or citation. Used on `<blockquote>`, `<q>`, and `<cite>` elements.
   * The value is an absolute or relative URL pointing to the original source. If omitted, no source is indicated.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote#attr-cite)
   */
  cite?: string;
  /**
   * {@link HTMLQuoteElement}  →  {@link QuoteAttributes}
   *
   * Defines the semantic role of a quote element, such as a blockquote or note.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"blockquote" | "note" | "presentation">;
}

export interface OListAttributes<T extends HTMLOListElement = HTMLOListElement> extends Attributes<T>
  , StructuralARIA
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * {@link HTMLOListElement}  →  {@link OListAttributes}
   *
   * Specifies that the `<ol>` (ordered list) should display its items in reverse order, from highest to lowest.
   * The presence of the attribute (e.g., `reversed` or `reversed=""`) enables this behavior. If omitted,
   * the list is in ascending order.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-reversed)
   */
  reversed?: string;
  /**
   * {@link HTMLOListElement}  →  {@link OListAttributes}
   *
   * Specifies the starting number for the `<ol>` (ordered list).
   * The value is an integer (e.g., `1`, `5`, `-2`). If omitted, defaults to `1`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ol#attr-start)
   */
  start?: string;
  /**
   * {@link HTMLOListElement}  →  {@link OListAttributes}
   *
   * Specifies the type of marker to use for the `<ol>` (ordered list) items. If omitted, defaults to `1`,
   * and accepts the following valid values:
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
   * {@link HTMLOListElement}  →  {@link OListAttributes}
   *
   * Specifies the role of an ordered list, such as a list or menu.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"list" | "directory" | "menu" | "tablist" | "tree">;
}

export interface LIAttributes<T extends HTMLLIElement = HTMLLIElement> extends Attributes<T>
  , StructuralARIA
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * {@link HTMLLIElement}  →  {@link LIAttributes}
   *
   * Specifies the numeric value of an `<li>` (list item) within an `<ol>` (ordered list).
   * The value is an integer (e.g., `1`, `10`, `-5`). It overrides the automatic numbering
   * for this item and subsequent items unless another `value` is set. Ignored in unordered
   * lists (`<ul>`). If omitted, the list’s natural order applies.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/li#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLLIElement}  →  {@link LIAttributes}
   *
   * Indicates the role of a list item, such as an option or menuitem.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"listitem" | "menuitem" | "option" | "tab" | "treeitem">;
}

export interface DivAttributes<T extends HTMLElement = HTMLElement> extends Attributes<T>
  , StructuralARIA {
  /**
   * {@link HTMLDivElement}  →  {@link DivAttributes}
   *
   * Defines the role of a div, often used for structural sections like articles or regions.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"article" | "complementary" | "contentinfo" | "main" | "navigation" | "region" | "group">;
}

export interface AnchorAttributes<T extends HTMLAnchorElement = HTMLAnchorElement> extends Attributes<T>, InteractiveARIA {
  /**
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
   * Specifies the URL of the resource or page the anchor element links to, or the location
   * within the current document (e.g, a fragment identifier like `#section1`). If omitted,
   * the anchor acts as a placeholder and does not navigate. The value can be an absolute URL,
   * relative URL, or a hash (`#`) for in-page navigation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-href)
   */
  href?: string;
  /**
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
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
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
   * Indicates that the linked resource should be downloaded instead of navigated to when clicked.
   * The value specifies the suggested filename for the downloaded file. If omitted, the browser
   * navigates to the `href` URL instead of downloading. If the value is an empty string
   * (e.g., `download=""`), the original filename from the server is used.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-download)
   */
  download?: string;
  /**
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
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
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
   * Specifies the language of the resource linked by `href`. The value is a BCP 47 language tag (e.g., `en`, `fr-CA`).
   * This attribute is advisory and helps browsers or assistive technologies understand the linked content’s language.
   * If omitted, no language is specified.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-hreflang)
   */
  hrefLang?: string;
  /**
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
   * Specifies the MIME type of the resource linked by `href` (e.g., `text/html`, `application/pdf`).
   * This attribute is advisory and helps the browser determine how to handle the resource before fetching it.
   * If omitted, the browser infers the type from the server response or file extension.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/a#attr-type)
   */
  type?: string;
  /**
   * {@link HTMLAnchorElement}  →  {@link AnchorAttributes}
   *
   * Specifies the role of an anchor, typically a link or interactive element like a button.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"link" | "button" | "menuitem">;
}

export interface TimeAttributes<T extends HTMLTimeElement = HTMLTimeElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLTimeElement}  →  {@link TimeAttributes}
   *
   * Specifies a machine-readable date or time for the `<time>` element’s content.
   * The value must be a valid date, time, or datetime string in a format like:
   *
   * - `YYYY-MM-DD`
   * - `HH:MM`
   * - `YYYY-MM-DDTHH:MMZ`
   *
   * (e.g, `2023-10-15`, `14:30`, `2023-10-15T14:30Z`). Used to provide semantic meaning
   * to human-readable text within the element. If omitted, the element’s text content is
   * assumed to be human-readable only, with no machine-readable interpretation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/time#attr-datetime)
   */
  datetime?: string;
  /**
   * {@link HTMLTimeElement}  →  {@link TimeAttributes}
   *
   * Defines the role of a time element, typically representing a time value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"time">;
}

export interface ModAttributes<T extends HTMLModElement = HTMLModElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLModElement}  →  {@link ModAttributes}
   *
   * Specifies the source URL of the document or resource explaining the modification.
   * Used on `<ins>` (inserted) and `<del>` (deleted) elements. The value is an absolute
   * or relative URL pointing to the source of the change. If omitted, no source is indicated.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ins#attr-cite)
   */
  cite?: string;
  /**
   * {@link HTMLModElement}  →  {@link ModAttributes}
   *
   * Specifies the date and time when the modification was made. Used on `<ins>` (inserted)
   * and `<del>` (deleted) elements. The value must be a valid datetime string (e.g., `2023-10-15T14:30Z`).
   * If omitted, no timestamp is associated with the change.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/ins#attr-datetime)
   */
  datetime?: string;
  /**
   * {@link HTMLModElement}  →  {@link ModAttributes}
   *
   * Indicates the role of a modification element (ins/del), such as insertion or deletion.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"insertion" | "deletion" | "presentation">;
}

export interface ImageAttributes<T extends HTMLImageElement = HTMLImageElement> extends Attributes<T> {
  /**
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
   * Specifies alternative text for the `<img>` element, displayed if the image fails
   * to load or for accessibility (e.g., screen readers). The value is a concise description
   * of the image's content or purpose (e.g., `A red apple`). If omitted, accessibility is
   * impaired, and no fallback text is shown.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-alt)
   */
  alt?: string;
  /**
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
   * Specifies the URL of the image resource for the `<img>` element.
   * The value can be an absolute or relative URL (e.g., `/images/photo.jpg`).
   * If omitted or invalid, the image fails to load, and the `alt` text is displayed instead.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
   * Specifies the name of an image map (`<map>`) to associate with the `<img>` element.
   *
   * The value is the `name` attribute of a `<map>` element (e.g., `#mapname`), prefixed with `#`.
   * If omitted, the image is not linked to a map, and `isMap` has no effect.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap)
   */
  useMap?: string;
  /**
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
   * Specifies the width of the `<img>` element in pixels or CSS units.
   *
   * The value is a positive number (e.g., `300`, `50%`). It sets the display width, overriding the
   * image’s intrinsic size if provided. If omitted, the intrinsic width is used, or the image scales per CSS.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
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
  loading?: boolean | StringUnion<'eager'| 'lazy'>;
  /**
   * {@link HTMLImageElement}  →  {@link ImageAttributes}
   *
   * Specifies the role of an image, typically as an image or decorative element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"img" | "presentation">;
}

export interface IFrameAttributes<T extends HTMLIFrameElement = HTMLIFrameElement> extends Attributes<T>
  , BusyARIA {
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Specifies the URL of the content to embed in the iframe. Can be a webpage, file, or data URI.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Inline HTML to display within the iframe, overriding `src` if both are present.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-srcdoc)
   */
  srcDoc?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * A name for the iframe, used as a target for links or forms.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
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
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Defines feature policies for the iframe (e.g., `fullscreen`, `payment`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-allow)
   */
  allow?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Allows the iframe content to enter fullscreen mode. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-allowfullscreen)
   */
  allowFullscreen?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Sets the iframe width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Sets the iframe height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-height)
   */
  height?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Controls HTTP referrer info sent with requests (e.g., `no-referrer`, `origin`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-referrerpolicy)
   */
  referrerPolicy?: string;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Controls iframe loading: `eager` (immediate) or `lazy` (deferred).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-loading)
   */
  loading?: boolean | StringUnion<'eager' | 'lazy'>;
  /**
   * {@link HTMLIFrameElement}  →  {@link IFrameAttributes}
   *
   * Defines the role of an iframe, such as an application or document container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "document" | "presentation">;
}

export interface EmbedAttributes<T extends HTMLEmbedElement = HTMLEmbedElement> extends Attributes<T>
  , BusyARIA {
  /**
   * {@link HTMLEmbedElement}  →  {@link EmbedAttributes}
   *
   * Specifies the URL of the resource to embed (e.g., plugin content).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLEmbedElement}  →  {@link EmbedAttributes}
   *
   * MIME type of the embedded resource (e.g., `application/x-shockwave-flash`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-type)
   */
  type?: string;
  /**
   * {@link HTMLEmbedElement}  →  {@link EmbedAttributes}
   *
   * Sets the embed width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLEmbedElement}  →  {@link EmbedAttributes}
   *
   * Sets the embed height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/embed#attr-height)
   */
  height?: string;
  /**
   * {@link HTMLEmbedElement}  →  {@link EmbedAttributes}
   *
   * Indicates the role of an embed element, often an application or media container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface ObjectAttributes<T extends HTMLObjectElement = HTMLObjectElement> extends Attributes<T>
  , BusyARIA {
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * Specifies the URL of the resource to embed (e.g., image, PDF).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-data)
   */
  data?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * MIME type of the embedded resource (e.g., `application/pdf`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-type)
   */
  type?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * A name for the object, used as a target or identifier.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * Links to an `<map>` element by its `name` for clickable areas.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-usemap)
   */
  useMap?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * Associates the object with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * Sets the object width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * Sets the object height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/object#attr-height)
   */
  height?: string;
  /**
   * {@link HTMLObjectElement}  →  {@link ObjectAttributes}
   *
   * Specifies the role of an object element, typically an application or media container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface VideoAttributes<T extends HTMLVideoElement = HTMLVideoElement> extends Attributes<T>
  , BusyARIA
  , VideoListeners<T>
  , DragListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Specifies the URL of the video file.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Starts video playback automatically. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-autoplay)
   */
  autoplay?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Displays video controls (e.g., play, pause). Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-controls)
   */
  controls?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Controls CORS: `anonymous` (no credentials) or `use-credentials`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-crossorigin)
   */
  crossOrigin?: StringUnion<'anonymous' | 'use-credentials'>;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Loops the video. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-loop)
   */
  loop?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Mutes the video. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-muted)
   */
  muted?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Plays video inline instead of fullscreen on mobile. Use `true`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-playsinline)
   */
  playsInline?: boolean;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * URL of an image to display before playback starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-poster)
   */
  poster?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Hints preload behavior: `none`, `metadata`, or `auto`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-preload)
   */
  preload?: StringUnion<'none' | 'metadata' | 'auto'>;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Sets the video width in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Sets the video height in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-height)
   */
  height?: string;
  /**
   * {@link HTMLVideoElement}  →  {@link VideoAttributes}
   *
   * Defines the role of a video element, often an application or media presentation.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface AudioAttributes<T extends HTMLAudioElement = HTMLAudioElement> extends Attributes<T>
  , BusyARIA
  , MediaListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Specifies the URL of the audio file.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Starts audio playback automatically. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-autoplay)
   */
  autoplay?: string;
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Displays audio controls (e.g., play, pause). Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-controls)
   */
  controls?: string;
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Loops the audio. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-loop)
   */
  loop?: string;
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Mutes the audio. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-muted)
   */
  muted?: string;
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Hints preload behavior: `none`, `metadata`, or `auto`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/audio#attr-preload)
   */
  preload?: StringUnion<'none' | 'metadata' | 'auto'>;
  /**
   * {@link HTMLAudioElement}  →  {@link AudioAttributes}
   *
   * Indicates the role of an audio element, typically an application or media presentation.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface SourceAttributes<T extends HTMLSourceElement = HTMLSourceElement> extends Attributes<T> {
  /**
   * {@link HTMLSourceElement}  →  {@link SourceAttributes}
   *
   * Specifies the URL of the media resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLSourceElement}  →  {@link SourceAttributes}
   *
   * MIME type of the media resource (e.g., `video/mp4`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-type)
   */
  type?: string;
  /**
   * {@link HTMLSourceElement}  →  {@link SourceAttributes}
   *
   * Comma-separated list of image URLs for responsive images.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-srcset)
   */
  srcSet?: string;
  /**
   * {@link HTMLSourceElement}  →  {@link SourceAttributes}
   *
   * Sizes for responsive images (e.g., `100w`, `50vw`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-sizes)
   */
  sizes?: string;
  /**
   * {@link HTMLSourceElement}  →  {@link SourceAttributes}
   *
   * Media query for when the source applies (e.g., `(min-width: 600px)`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/source#attr-media)
   */
  media?: string;
}

export interface TrackAttributes<T extends HTMLTrackElement = HTMLTrackElement> extends Attributes<T>
  , TrackListeners<T> {
  /**
   * {@link HTMLTrackElement}  →  {@link TrackAttributes}
   *
   * Marks this track as default. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-default)
   */
  default?: string;
  /**
   * {@link HTMLTrackElement}  →  {@link TrackAttributes}
   *
   * Type of track: `subtitles`, `captions`, `descriptions`, `chapters`, or `metadata`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-kind)
   */
  kind?: StringUnion<'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'>;
  /**
   * {@link HTMLTrackElement}  →  {@link TrackAttributes}
   *
   * User-visible label for the track.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-label)
   */
  label?: string;
  /**
   * {@link HTMLTrackElement}  →  {@link TrackAttributes}
   *
   * URL of the track file (e.g., `.vtt`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLTrackElement}  →  {@link TrackAttributes}
   *
   * Language of the track (e.g., `en`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/track#attr-srclang)
   */
  srcLang?: string;
}

export interface MapAttributes<T extends HTMLMapElement = HTMLMapElement> extends Attributes<T> {
  /**
   * {@link HTMLMapElement}  →  {@link MapAttributes}
   *
   * Name of the image map, referenced by `usemap`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/map#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLMapElement}  →  {@link MapAttributes}
   *
   * Specifies the role of a map element, often a region or decorative container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"region" | "presentation">;
}

export interface AreaAttributes<T extends HTMLAreaElement = HTMLAreaElement> extends Attributes<T>, InteractiveARIA {
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Alternate text for the area if the image fails to load.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-alt)
   */
  alt?: string;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Coordinates defining the clickable area (e.g., `x,y,r` for circle).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-coords)
   */
  coords?: string;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Shape of the area: `circle`, `default`, `poly`, or `rect`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-shape)
   */
  shape?: StringUnion<'circle' | 'default' | 'poly' | 'rect'>;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * URL of the linked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-href)
   */
  href?: string;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Where to open the link: `_self`, `_blank`, `_parent`, or `_top`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Suggests a filename for downloading the linked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-download)
   */
  download?: string;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Relationship to the linked resource (e.g., `nofollow`, `noopener`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/area#attr-rel)
   */
  rel?: string;
  /**
   * {@link HTMLAreaElement}  →  {@link AreaAttributes}
   *
   * Defines the role of an area element, typically a link or interactive button.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"link" | "button">;
}

export interface TableAttributes<T extends HTMLTableElement = HTMLTableElement> extends Attributes<T>, StructuralARIA {
  /**
   * {@link HTMLTableElement}  →  {@link TableAttributes}
   *
   * Sets the border width of the table (deprecated; use CSS instead).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/table#attr-border)
   */
  border?: string;
  /**
   * {@link HTMLTableElement}  →  {@link TableAttributes}
   *
   * Indicates the role of a table, such as a table or grid structure.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"table" | "grid" | "treegrid">;
}

export interface TableColAttributes<T extends HTMLTableColElement = HTMLTableColElement> extends Attributes<T>, StructuralARIA {
  /**
   * {@link HTMLTableColElement}  →  {@link TableColAttributes}
   *
   * Number of columns this `<col>` spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/col#attr-span)
   */
  span?: string;
  /**
   * {@link HTMLTableColElement}  →  {@link TableColAttributes}
   *
   * Specifies the role of a table column, typically a column header.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"columnheader">;
}

export interface TableCellAttributes<T extends HTMLTableCellElement = HTMLTableCellElement> extends Attributes<T>, StructuralARIA {
  /**
   * {@link HTMLTableCellElement}  →  {@link TableCellAttributes}
   *
   * Number of columns this cell spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-colspan)
   */
  colSpan?: string;
  /**
   * {@link HTMLTableCellElement}  →  {@link TableCellAttributes}
   *
   * Space-separated list of header cell IDs this cell is associated with.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-headers)
   */
  headers?: string;
  /**
   * {@link HTMLTableCellElement}  →  {@link TableCellAttributes}
   *
   * Number of rows this cell spans.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-rowspan)
   */
  rowSpan?: string;
  /**
   * {@link HTMLTableCellElement}  →  {@link TableCellAttributes}
   *
   * Scope of the header cell: `row`, `col`, `rowgroup`, or `colgroup`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-scope)
   */
  scope?: StringUnion<'row' | 'col' | 'rowgroup' | 'colgroup'>;
  /**
   * {@link HTMLTableCellElement}  →  {@link TableCellAttributes}
   *
   * Abbreviated version of the cell content for accessibility.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-abbr)
   */
  abbr?: string;
  /**
   * {@link HTMLTableCellElement}  →  {@link TableCellAttributes}
   *
   * Defines the role of a table cell, such as a cell or row header.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"cell" | "gridcell" | "rowheader">;
}

export interface FormAttributes<T extends HTMLFormElement = HTMLFormElement> extends Attributes<T>
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * URL to submit the form to.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-action)
   */
  action?: string;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * HTTP method for form submission: `get`, `post`, or `dialog`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-method)
   */
  method?: StringUnion<'get' | 'post' | 'dialog'>;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
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
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * Controls autocomplete: `on` or `off`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-autocomplete)
   */
  autocomplete?: StringUnion<'on' | 'off'>;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * Where to display the response: `_self`, `_blank`, `_parent`, or `_top`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-target)
   */
  target?: StringUnion<'_self' | '_blank' | '_parent' | '_top'>;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * Disables form validation. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-novalidate)
   */
  noValidate?: string;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * Name of the form for scripting or targeting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * Relationship to the form action (e.g., `nofollow`, `noopener`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-rel)
   */
  rel?: string;
  /**
   * {@link HTMLFormElement}  →  {@link FormAttributes}
   *
   * Indicates the role of a form, typically a form or search container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"form" | "search">;
}

export interface LabelAttributes<T extends HTMLLabelElement = HTMLLabelElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLLabelElement}  →  {@link LabelAttributes}
   *
   * ID of the form control this label is for.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/label#attr-for)
   */
  htmlFor?: string;
}

export interface InputAttributes<T extends HTMLInputElement = HTMLInputElement> extends Attributes<T>
  , InteractiveARIA
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T>
  , DragListeners<T> {
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * File types accepted (e.g., `image/*`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-accept)
   */
  accept?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Alternate text for image inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-alt)
   */
  alt?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
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
  >;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Focuses the input on page load. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-autofocus)
   */
  autofocus?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Marks the input as checked (for checkboxes/radios).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-checked)
   */
  checked?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Name of the directionality field to submit.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-dirname)
   */
  dirname?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Disables the input. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * URL to submit the form to (overrides form’s `action`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formaction)
   */
  formAction?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
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
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * HTTP method for form submission (overrides form’s `method`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formmethod)
   */
  formMethod?: StringUnion<'get' | 'post'>;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Disables validation (overrides form’s `novalidate`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formnovalidate)
   */
  formNoValidate?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Target for form submission (overrides form’s `target`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-formtarget)
   */
  formTarget?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Height of image inputs in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-height)
   */
  height?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * ID of a `<datalist>` for suggestions.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-list)
   */
  list?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Maximum value for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-max)
   */
  max?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Maximum length of text input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-maxlength)
   */
  maxLength?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Minimum value for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-min)
   */
  min?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Minimum length of text input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-minlength)
   */
  minLength?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Allows multiple values (e.g., for file or email inputs).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-multiple)
   */
  multiple?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Name of the input for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Regex pattern the input must match.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-pattern)
   */
  pattern?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Placeholder text for the input.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-placeholder)
   */
  placeholder?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Makes the input read-only. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-readonly)
   */
  readOnly?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Marks the input as required. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-required)
   */
  required?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Visible width of the input in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-size)
   */
  size?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * URL of the image for `type="image"`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Increment step for numeric inputs.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-step)
   */
  step?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
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
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Initial value of the input.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
   * Width of image inputs in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/input#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLInputElement}  →  {@link InputAttributes}
   *
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

export interface ButtonAttributes<T extends HTMLButtonElement = HTMLButtonElement> extends Attributes<T>
  , InteractiveARIA
  , AnimationListeners<T> {
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Disables the button. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * URL to submit the form to (overrides form’s `action`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formaction)
   */
  formAction?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
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
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * HTTP method for form submission (overrides form’s `method`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formmethod)
   */
  formMethod?: StringUnion<'get' | 'post'>;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Disables validation (overrides form’s `novalidate`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formnovalidate)
   */
  formNoValidate?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Target for form submission (overrides form’s `target`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formtarget)
   */
  formTarget?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Name of the button for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Button behavior: `button`, `submit`, `reset`, or `menu`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-type)
   */
  type?: StringUnion<'button' | 'submit' | 'reset' | 'menu'>;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Value submitted with the form.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLButtonElement}  →  {@link ButtonAttributes}
   *
   * Defines the role of a button, typically a button or menu item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"button" | "menuitem" | "menuitemcheckbox" | "menuitemradio">;
}

export interface SelectAttributes<T extends HTMLSelectElement = HTMLSelectElement> extends Attributes<T>
  , InteractiveARIA
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Autocomplete hint (e.g., `off`, `country`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-autocomplete)
   */
  autocomplete?: AutoCompleteUnion;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Disables the select. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Allows multiple selections. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-multiple)
   */
  multiple?: string;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Name of the select for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Marks the select as required. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-required)
   */
  required?: string;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Number of visible options.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-size)
   */
  size?: string;
  /**
   * {@link HTMLSelectElement}  →  {@link SelectAttributes}
   *
   * Indicates the role of a select element, such as a listbox or combobox.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"listbox" | "combobox">;
}

export interface OptGroupAttributes<T extends HTMLOptGroupElement = HTMLOptGroupElement> extends Attributes<T>
  , StructuralARIA {
  /**
   * {@link HTMLOptGroupElement}  →  {@link OptGroupAttributes}
   *
   * Disables the option group. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLOptGroupElement}  →  {@link OptGroupAttributes}
   *
   * Label for the option group.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup#attr-label)
   */
  label?: string;
  /**
   * {@link HTMLOptGroupElement}  →  {@link OptGroupAttributes}
   *
   * Specifies the role of an option group, typically a grouping container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"group">;
}

export interface OptionAttributes<T extends HTMLOptionElement = HTMLOptionElement> extends Attributes<T>
  , InteractiveARIA {
  /**
   * {@link HTMLOptionElement}  →  {@link OptionAttributes}
   *
   * Disables the option. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLOptionElement}  →  {@link OptionAttributes}
   *
   * User-visible label for the option.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-label)
   */
  label?: string;
  /**
   * {@link HTMLOptionElement}  →  {@link OptionAttributes}
   *
   * Marks the option as selected. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-selected)
   */
  selected?: string;
  /**
   * {@link HTMLOptionElement}  →  {@link OptionAttributes}
   *
   * Value submitted with the form.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/option#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLOptionElement}  →  {@link OptionAttributes}
   *
   * Defines the role of an option, typically a selectable option.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"option">;
}
export interface TextAreaAttributes<T extends HTMLTextAreaElement = HTMLTextAreaElement> extends Attributes<T>
  , InteractiveARIA
  , FormARIA
  , FormListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Autocomplete hint (e.g., `off`, `sentence`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-autocomplete)
   */
  autocomplete?: AutoCompleteUnion;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Number of visible columns.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-cols)
   */
  cols?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Name of the directionality field to submit.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-dirname)
   */
  dirname?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Disables the textarea. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Maximum length in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-maxlength)
   */
  maxLength?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Minimum length in characters.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-minlength)
   */
  minLength?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Name of the textarea for form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Placeholder text for the textarea.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-placeholder)
   */
  placeholder?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Makes the textarea read-only. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-readonly)
   */
  readOnly?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Marks the textarea as required. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-required)
   */
  required?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Number of visible rows.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-rows)
   */
  rows?: string;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Line wrapping: `soft` (default) or `hard`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/textarea#attr-wrap)
   */
  wrap?: StringUnion<'soft' | 'hard'>;
  /**
   * {@link HTMLTextAreaElement}  →  {@link TextAreaAttributes}
   *
   * Indicates the role of a textarea, typically a textbox.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"textbox">;
}

export interface OutputAttributes<T extends HTMLOutputElement = HTMLOutputElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLOutputElement}  →  {@link OutputAttributes}
   *
   * Space-separated IDs of inputs this output relates to.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-for)
   */
  htmlFor?: string;
  /**
   * {@link HTMLOutputElement}  →  {@link OutputAttributes}
   *
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLOutputElement}  →  {@link OutputAttributes}
   *
   * Name of the output for scripting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLOutputElement}  →  {@link OutputAttributes}
   *
   * Specifies the role of an output, typically a status indicator.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"status">;
}

export interface ProgressAttributes<T extends HTMLProgressElement = HTMLProgressElement> extends Attributes<T>
  , ProgressARIA
  , AnimationListeners<T> {
  /**
   * {@link HTMLProgressElement}  →  {@link ProgressAttributes}
   *
   * Current progress value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/progress#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLProgressElement}  →  {@link ProgressAttributes}
   *
   * Maximum progress value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/progress#attr-max)
   */
  max?: string;
  /**
   * {@link HTMLProgressElement}  →  {@link ProgressAttributes}
   *
   * Defines the role of a progress element, typically a progressbar.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"progressbar">;
}

export interface MeterAttributes<T extends HTMLMeterElement = HTMLMeterElement> extends Attributes<T>
  , ProgressARIA
  , AnimationListeners<T> {
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Current meter value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Minimum meter value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-min)
   */
  min?: string;
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Maximum meter value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-max)
   */
  max?: string;
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Boundary for low values.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-low)
   */
  low?: string;
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Boundary for high values.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-high)
   */
  high?: string;
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Optimal value for the meter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/meter#attr-optimum)
   */
  optimum?: string;
  /**
   * {@link HTMLMeterElement}  →  {@link MeterAttributes}
   *
   * Indicates the role of a meter, such as a progressbar or status indicator.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"progressbar" | "status">;
}

export interface FieldSetAttributes<T extends HTMLFieldSetElement = HTMLFieldSetElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLFieldSetElement}  →  {@link FieldSetAttributes}
   *
   * Disables the fieldset and its controls. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset#attr-disabled)
   */
  disabled?: string;
  /**
   * {@link HTMLFieldSetElement}  →  {@link FieldSetAttributes}
   *
   * Associates with a form by its `id`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset#attr-form)
   */
  form?: string;
  /**
   * {@link HTMLFieldSetElement}  →  {@link FieldSetAttributes}
   *
   * Name of the fieldset for scripting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset#attr-name)
   */
  name?: string;
  /**
   * {@link HTMLFieldSetElement}  →  {@link FieldSetAttributes}
   *
   * Specifies the role of a fieldset, typically a grouping or presentation container.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"group" | "presentation">;
}

export interface DetailsAttributes<T extends HTMLDetailsElement = HTMLDetailsElement> extends Attributes<T>
  , InteractiveARIA
  , ModalARIA
  , DetailsListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLDetailsElement}  →  {@link DetailsAttributes}
   *
   * Shows the details open by default. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/details#attr-open)
   */
  open?: string;
  /**
   * {@link HTMLDetailsElement}  →  {@link DetailsAttributes}
   *
   * Defines the role of a details element, such as a group or dialog.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"group" | "dialog">;
}

export interface DialogAttributes<T extends HTMLDialogElement = HTMLDialogElement> extends Attributes<T>
  , InteractiveARIA
  , ModalARIA
  , DialogListeners<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLDialogElement}  →  {@link DialogAttributes}
   *
   * Indicates the role of a dialog, typically a dialog or alertdialog.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"dialog" | "alertdialog">;
}

export interface ScriptAttributes<T extends HTMLScriptElement = HTMLScriptElement> extends Attributes<T> {
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * URL of the external script file.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-src)
   */
  src?: string;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * MIME type of the script (e.g., `text/javascript`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-type)
   */
  type?: string;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * Executes script asynchronously. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-async)
   */
  async?: string;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * Defers script execution until HTML is parsed. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer)
   */
  defer?: string;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * Controls CORS: `anonymous` (no credentials) or `use-credentials`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-crossorigin)
   */
  crossOrigin?: StringUnion<'anonymous' | 'use-credentials'>;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * Integrity hash for script validation (e.g., `sha256-...`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-integrity)
   */
  integrity?: string;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * Controls HTTP referrer info (e.g., `no-referrer`).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-referrerpolicy)
   */
  referrerPolicy?: string;
  /**
   * {@link HTMLScriptElement}  →  {@link ScriptAttributes}
   *
   * Excludes script for module-supporting browsers. Use `true` or empty string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-nomodule)
   */
  nomodule?: string;
}

export interface CanvasAttributes<T extends HTMLCanvasElement = HTMLCanvasElement> extends Attributes<T>
  , BusyARIA
  , CanvasListeners<T> {
  /**
   * {@link HTMLCanvasElement}  →  {@link CanvasAttributes}
   *
   * Width of the canvas in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/canvas#attr-width)
   */
  width?: string;
  /**
   * {@link HTMLCanvasElement}  →  {@link CanvasAttributes}
   *
   * Height of the canvas in pixels or CSS units.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/canvas#attr-height)
   */
  height?: string;
  /**
   * {@link HTMLCanvasElement}  →  {@link CanvasAttributes}
   *
   * Specifies the role of a canvas, such as an application or presentation area.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"application" | "presentation">;
}

export interface DataAttributes<T extends HTMLDataElement = HTMLDataElement> extends Attributes<T>
  , AnimationListeners<T> {
  /**
   * {@link HTMLDataElement}  →  {@link DataAttributes}
   *
   * Machine-readable value of the element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/data#attr-value)
   */
  value?: string;
  /**
   * {@link HTMLDataElement}  →  {@link DataAttributes}
   *
   * Defines the role of a data element, typically a term or presentation item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: StringUnion<"term" | "presentation">;
}