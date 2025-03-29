/**
 * ### Event Void
 *
 * Callback type for element events
 */
declare type Void = Promise<any> | any;
/**
 * ### StringUnion
 *
 * Allows literal unions to persist without sacraficing auto-complete
 *
 * @example
 *
 * StringUnion<'devils' | 'advocate'> // default to string
 */
declare type StringUnion<T> = T | (string & Record<never, never>);
/**
 * ### Identity
 *
 * Applies typed sugar casting, for class extended interfaces
 *
 * @example
 *
 * class Sinner {
 *
 *  static who: 'adam' | 'eve';
 *
 * }
 *
 * interface Garden extends Identity<typeof Sinner> { }
 */
declare type Identity<T> = T;
/**
 * ### Template Literal
 *
 * Sugar assignment of `TemplateStringsArray`
 */
interface Literal extends ReadonlyArray<string> {
    readonly raw?: readonly string[];
}

interface CSS {
    (...params: any[]): {
        name: string;
        classes: string;
        id: string;
        args: any[];
        vars: {};
        parent: any;
    };
    alias: (k: any, v: any) => string | void;
    reset: (x?: any[], ...xs: any[]) => any;
    unit: (k: any, fn: any) => void | Map<any, any>;
}
interface Units {
    /**
     * The value of `name` and the CSS `property`
     */
    (name: string, callback: (value: string, property: string) => string): void;
    (units: {
        [name: string]: (value: string, property: string) => string;
    }): void;
}

/**
 * HTTP Parameter Options
 */
interface Params$1<T = {}> {
    /**
     * The request method
     *
     * @default 'GET'
     */
    method?: StringUnion<'HEAD' | 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'>;
    /**
     * Whether or not to apply redraw upon request resolution.
     *
     * @default true
     */
    redraw?: boolean;
    /**
     * The XMLHttpRequest property responseType is an enumerated string value
     * specifying the type of data contained in the response.
     *
     * @default ""
     */
    responseType?: StringUnion<"" | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text'>;
    /**
     * JSON Content
     *
     * @deprecated
     * @default 'application/json'
     */
    json?: string;
    /**
     * Query Parameters
     *
     * @default {}
     */
    query?: any;
    /**
     * The data to be serialized into the body (for other types of requests).
     *
     * @default undefined
     */
    body?: T;
    /**
     * A username for HTTP authorization.
     *
     * @default undefined
     */
    user?: string;
    /**
     * A password for HTTP authorization. This option is provided for XMLHttpRequest compatibility,
     * but you should avoid using it because it sends the password in plain text over the network.
     *
     * @default undefined
     */
    pass?: string;
    /**
     * Request headers
     *
     * @default {}
     */
    headers?: {
        [header: string]: string;
    };
    /**
     * Exposes the underlying XMLHttpRequest object for low-level configuration and optional
     * replacement (by returning a new XHR).
     */
    config?: (xhr: XMLHttpRequest) => undefined | void | XMLHttpRequest;
    /**
     * The amount of milliseconds a request can take before automatically being terminated.
     *
     * @default 0
     */
    timeout?: number;
}
/**
 * HTTP request method functions
 *
 * @example
 *
 * s.http.get()
 * s.http.post()
 * s.http.put()
 *
 * // etc etc
 */
declare class Methods {
    /**
     * HTTP GET Request
     *
     * @example
     *
     * s.http.get('/api/path', {});
     */
    static get<T>(url: string, params?: Omit<Params$1, 'method'>): Promise<T>;
    /**
     * HTTP POST Request
     *
     * @example
     *
     * s.http.post('/api/path', {});
     */
    static post<T>(url: string, params?: Omit<Params$1, 'method'>): Promise<T>;
    /**
     * HTTP PUT Request
     *
     * @example
     *
     * s.http.put('/api/path', {});
     */
    static put<T>(url: string, params?: Omit<Params$1, 'method'>): Promise<T>;
    /**
     * HTTP PATCH Request
     *
     * @example
     *
     * s.http.put('/api/path', {});
     */
    static patch<T>(url: string, params?: Omit<Params$1, 'method'>): Promise<T>;
    /**
     * HTTP DELETE Request
     *
     * @example
     *
     * s.http.delete('/api/path', {});
     */
    static delete<T>(url: string, params?: Omit<Params$1, 'method'>): Promise<T>;
    /**
     * HTTP HEAD Request
     *
     * @example
     *
     * s.http.head('/api/path', {});
     */
    static head<T>(url: string, params?: Omit<Params$1, 'method'>): Promise<T>;
}
/**
 * #### HTTP Method/s
 *
 * Function type/s for the `s.http` method, including `s.http.get`, `s.http.post` etc.
 */
interface Http extends Identity<typeof Methods> {
    /**
    * HTTP Request
    *
    * @example
    *
    * s.http('/api/path', {
    *  method: 'GET',
    *  redraw: true,
    *  responseType: 'json',
    *  json: 'application/json',
    *  query: {},
    *  body: {},
    *  user: '',
    *  pass: '',
    *  headers: {},
    *  timeout: 0,
    *  config: (xhr) => {},
    * })
    */
    <T>(url: string, params?: Params$1<T>): Promise<T>;
}

/**
 * Function type for the `s.live` method,
 */
interface Live<T = any> {
    /**
     * Return the live value stream
     *
     * @example
     *
     * s.live(10).value // => 10
     */
    readonly value: T;
    /**
     * ValueOf live stream
     *
     * @example
     *
     * s.live(10).valueOf() // => 10
     */
    valueOf: <V = T>() => V;
    /**
     * Get and update the live value
     *
     * @example
     *
     * s.live(10).get(x => x + 1) // => 11
     */
    get: <V>(fn: (x: T) => V) => V;
    /**
     * Set the live value stream
     *
     * @example
     *
     * s.live(10).set(20) // => 20
     * s.live(10).set(x => x + 10) // => 20
     */
    set: (x: T | ((x: T) => T)) => Live<T>;
    /**
     * Observe live value stream. Callback function will remove observer.
     *
     * @example
     *
     * const fn = x => x + 1
     *
     * s.live.observe(fn)
     * s.live.observe(fn, true) // observe once
     * s.live.observe(fn)() // removes observer
     */
    observe: <V>(fn: (x: T) => V, once?: boolean) => () => boolean;
    /**
     * Live stream reducer function
     *
     * @example
     *
     * s.live.reduce((x, v, i) => x + v, 100);
     *
     */
    reduce: <A>(fn: <V = T>(acc: A, value: T, index?: number) => V, initial?: T) => Live<T>;
    /**
     * Detach live stream observer
     *
     * @example
     *
     * s.live(10).detach();
     */
    detach(): void;
    /**
     * Live determination on whether or not value is equal to parameter.
     *
     * @example
     *
     * const a = s.live(10);
     * const b = a.set(100)();
     *
     * console.log([
     *  a.if(200)(), // false
     *  a.if(100)(), // true
     *  b.if(300)()  // false
     *  b.if(100)()  // true
     * ]);
     *
     */
    if: (...fn: Live<T>[]) => () => boolean;
}

/**
 * Sin Doc
 */
interface Doc {
    /**
     * Set the documents `<html lang="">` value
     *
     * @example
     *
     * s.lang('en');
     */
    lang: Live<string>;
    /**
     * Renders elements within document `<head>`
     *
     * @example
     *
     * s.mount(({}, [], { doc }) => doc.head([
     *
     *  s`link`({ rel: 'manifest' href: '/site.webmanifest' })
     *
     * ]))
     */
    head: <Attrs = {}>(...nodes: Children<Attrs>) => View[];
    /**
     * Sets the document `<title>` value.
     *
     * @default ''
     * @example
     *
     * s.mount(({}, [], { doc }) => doc.head([
     *
     *  s`title`('Welcome Sinners!')
     *
     * ]))
     */
    title: Live<string>;
    /**
     * Sets the HTTP Response headers.
     *
     * @example
     *
     * s.headers({
     *  'x-request-with': 'sin'
     * })
     */
    headers: Live<{
        [header: string]: string;
    }>;
    /**
     * Sets the HTTP Response status code
     *
     * @default 200;
     *
     * @example
     *
     * s.status(301);
     */
    status: Live<number>;
}

type AutoCompleteUnion = StringUnion<'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-year' | 'bday-day' | 'bday-month' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel-area-code' | 'tel' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work'>;

/**
 * Extends the {@link View} `attrs` to include sin specific attributes.
 * Called by the {@link Attrs} namespace interface entries.
 */
interface SinAttrs<T = HTMLElement> {
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
    dom?: <Attrs = {}>(
    /**
    * The DOM Element
    */
    root?: T, 
    /**
    * Element attributes
    */
    attrs?: Attrs, 
    /**
    * Parent Component Views
    */
    children?: View<Attrs>[], 
    /**
    * Component Context
    */
    context?: Context) => Promise<any> | any;
    /**
     * Waits for children using deferred removal
     *
     * @default false
     */
    deferrable?: boolean;
    /**
     * The value used to map a DOM element to its respective item in an array of data.
     */
    key?: any;
}

type ARIARole = StringUnion<"alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "main" | "mark" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "suggestion" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem">;
/**
 * Base ARIA attributes applicable to all HTML elements.
 */
interface AriaAttrs {
    /**
     * Defines a role for an element to enhance accessibility.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
     */
    role?: ARIARole;
    /**
     * Provides a label for an element.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
     */
    ariaLabel?: string;
    /**
     * Identifies elements that label this one.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
     */
    ariaLabelledBy?: string;
    /**
     * Describes the element in detail.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description)
     */
    ariaDescription?: string;
    /**
     * Identifies elements providing a description.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
     */
    ariaDescribedBy?: string;
    /**
     * Indicates if an element is hidden from assistive tech.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
     */
    ariaHidden?: boolean | "true" | "false";
    /**
     * Specifies how live updates are announced.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
     */
    ariaLive?: StringUnion<"off" | "assertive" | "polite">;
    /**
     * Indicates if an update is atomic (all or none).
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
     */
    ariaAtomic?: boolean | "true" | "false";
    /**
     * Identifies elements this one controls.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
     */
    ariaControls?: string;
    /**
     * Identifies elements owned by this one.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
     */
    ariaOwns?: string;
    /**
     * Suggests a navigation flow to assistive tech.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
     */
    ariaFlowTo?: string;
    /**
     * Lists keyboard shortcuts for the element.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)
     */
    ariaKeyShortcuts?: string;
    /**
     * Provides a human-readable role description.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
     */
    ariaRoleDescription?: string;
    /**
     * Supplies a braille label for accessibility.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel)
     */
    ariaBrailleLabel?: string;
    /**
     * Describes the role for braille devices.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) */
    ariaBrailleRoleDescription?: string;
}
/**
 * ARIA attributes for interactive elements (e.g., buttons, links, inputs).
 */
interface InteractiveARIA {
    /**
     * Identifies the active descendant element.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescen
     dant) */
    ariaActiveDescendant?: string;
    /**
     * Indicates if the element is disabled.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
     */
    ariaDisabled?: boolean | "true" | "false";
    /**
     * Shows if the element is expanded or collapsed.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
     */
    ariaExpanded?: boolean | "true" | "false";
    /**
     * Indicates the element has a popup.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
     */
    ariaHasPopup?: boolean | StringUnion<"false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog">;
    /**
     * Shows if a toggle is pressed.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
     */
    ariaPressed?: boolean | StringUnion<"false" | "mixed" | "true">;
    /**
     * Indicates a checked state (e.g., checkbox).
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
     */
    ariaChecked?: boolean | StringUnion<"false" | "mixed" | "true">;
    /**
     * Shows if the element is selected.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
     */
    ariaSelected?: boolean | "true" | "false";
    /**
     * Marks the element as invalid.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
     */
    ariaInvalid?: boolean | StringUnion<"false" | "true" | "grammar" | "spelling">;
    /**
     * Identifies an error message element.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
     */
    ariaErrorMessage?: string;
    /**
     * Indicates if the element is required.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)
     */
    ariaRequired?: boolean | "true" | "false";
    /**
     * Shows if the element is grabbed (drag-and-drop).
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
     */
    ariaGrabbed?: boolean | "true" | "false";
    /**
     * Defines the drop effect for drag-and-drop.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
     */
    ariaDropEffect?: StringUnion<"none" | "copy" | "execute" | "link" | "move" | "popup">;
}
/**
 * ARIA attributes for structural elements (e.g., tables, lists, grids).
 */
interface StructuralARIA {
    /**
     * Specifies the hierarchical level (e.g., headings).
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)
     */
    ariaLevel?: number | `${number}`;
    /**
     * Indicates position in a set.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
     */
    ariaPosInSet?: number | `${number}`;
    /**
     * Defines the total size of a set.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
     */
    ariaSetSize?: number | `${number}`;
    /**
     * Specifies the total number of columns.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
     */
    ariaColCount?: number | `${number}`;
    /**
     * Indicates the column index.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
     */
    ariaColIndex?: number | `${number}`;
    /**
     * Defines the number of columns spanned.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
     */
    ariaColSpan?: number | `${number}`;
    /**
     * Specifies the total number of rows.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
     */
    ariaRowCount?: number | `${number}`;
    /**
     * Indicates the row index.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
     */
    ariaRowIndex?: number | `${number}`;
    /**
     * Defines the number of rows spanned.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
     */
    ariaRowSpan?: number | `${number}`;
    /**
     * Specifies sorting direction.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
     */
    ariaSort?: StringUnion<"none" | "ascending" | "descending" | "other">;
}
/**
 * ARIA attributes for form-like or input elements (e.g., inputs, textareas).
 */
interface FormARIA {
    /**
     * Describes autocomplete behavior.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
     */
    ariaAutoComplete?: StringUnion<"none" | "inline" | "list" | "both">;
    /**
     * Indicates if the element supports multiple lines.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
     */
    ariaMultiLine?: boolean | "true" | "false";
    /**
     * Provides a placeholder hint.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
     */
    ariaPlaceholder?: string;
    /**
     * Marks the element as read-only.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
     */
    ariaReadOnly?: boolean | "true" | "false";
    /**
     * Indicates if multiple items can be selected.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
     */
    ariaMultiSelectable?: boolean | "true" | "false";
    /**
     * Specifies the element’s orientation.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
     */
    ariaOrientation?: StringUnion<"horizontal" | "vertical">;
}
/**
 * ARIA attributes for progress or measurement elements (e.g., progress, meter).
 */
interface ProgressARIA {
    /**
     * Defines the maximum value.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
     */
    ariaValueMax?: number | `${number}`;
    /**
     * Defines the minimum value.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
     */
    ariaValueMin?: number | `${number}`;
    /**
     * Specifies the current value.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
     */
    ariaValueNow?: number | `${number}`;
    /**
     * Provides a text representation of the value.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
     */
    ariaValueText?: string;
}
/**
 * ARIA attributes for modal or dialog-like elements.
 */
interface ModalARIA {
    /**
     * Indicates if the element is modal.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
     */
    ariaModal?: boolean | "true" | "false";
}
/**
 * ARIA attributes for elements with busy states (e.g., loading content).
 */
interface BusyARIA {
    /**
     * Indicates the element is being updated.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
     */
    ariaBusy?: boolean | "true" | "false";
}

type Target<T, E> = E & {
    /**
     * Returns the `dom` of the attrs event.
     */
    readonly target: T;
    /**
     * Returns the `dom` whose event listener callback was invoked, typically the same as `target`
     */
    readonly currentTarget: T;
    /**
     * @deprecated
     */
    readonly srcElement: T;
};
type Params<Event, DOM, Attrs> = [] | [event: Target<DOM, Event>] | [event: Target<DOM, Event>, dom: DOM] | [event: Target<DOM, Event>, dom: DOM, attrs: Attrs] | [event: Target<DOM, Event>, dom: DOM, attrs: Attrs, children: Children<DOM>] | [event: Target<DOM, Event>, dom: DOM, attrs: Attrs, children: Children<DOM>, context: Context];
/**
 * Universal events that apply to all HTML elements
 */
interface Listener<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when the user aborts the download of a resource, such as a media element or fetch request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
     */
    onabort?: <Attrs = {}>(this: T, ...attrs: Params<UIEvent, T, Attrs>) => Void;
    /**
     * Fires when a non-primary mouse button (e.g., middle or right) is clicked, typically used for auxiliary actions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)
     */
    onauxclick?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the object loses the input focus, such as when the user tabs away or clicks elsewhere.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
     */
    onblur?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires when the user clicks the left mouse button on the object, triggering a standard click action.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
     */
    onclick?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the user clicks the right mouse button in the client area, opening the context menu.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
     */
    oncontextmenu?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the user double-clicks the object with the primary mouse button.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
     */
    ondblclick?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when an error occurs during the loading of an object, such as an image, script, or media element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)
     */
    onerror?: OnErrorEventHandler;
    /**
     * Fires when the object receives input focus, such as when the user tabs to or clicks it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
     */
    onfocus?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires when an element or one of its descendants receives focus, bubbling up through the DOM.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusin_event)
     */
    onfocusin?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires when an element or one of its descendants loses focus, bubbling up through the DOM.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusout_event)
     */
    onfocusout?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires when the user presses a key on the keyboard, including modifier keys.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
     */
    onkeydown?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires when the user presses an alphanumeric key. This event is deprecated; use `onkeydown` or `oninput` instead.
     *
     * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
     */
    onkeypress?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires when the user releases a key on the keyboard.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
     */
    onkeyup?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void;
    /**
     * Fires immediately after the browser fully loads an object, such as an image, script, or SVG element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
     */
    onload?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when the user presses a mouse button down over the object, initiating a click or drag.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
     */
    onmousedown?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the mouse pointer enters an element’s boundaries, without bubbling to ancestors.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)
     */
    onmouseenter?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the mouse pointer leaves an element’s boundaries, without bubbling to ancestors.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)
     */
    onmouseleave?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires continuously when the user moves the mouse pointer over the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
     */
    onmousemove?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the mouse pointer moves outside the boundaries of the object or one of its descendants.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
     */
    onmouseout?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the mouse pointer moves into the object or one of its descendants.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
     */
    onmouseover?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the user releases a mouse button while the pointer is over the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
     */
    onmouseup?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when the mouse wheel is rotated. This event is deprecated; use `onwheel` instead.
     *
     * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousewheel_event)
     */
    onmousewheel?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer interaction (e.g., touch or pen) is interrupted, such as lifting a finger unexpectedly.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)
     */
    onpointercancel?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer (e.g., mouse, touch, or pen) is pressed down on an element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)
     */
    onpointerdown?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer enters an element’s boundaries, without bubbling to ancestors.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)
     */
    onpointerenter?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer leaves an element’s boundaries, without bubbling to ancestors.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)
     */
    onpointerleave?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires continuously when a pointer moves over an element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)
     */
    onpointermove?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer moves out of an element or one of its descendants.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)
     */
    onpointerout?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer moves into an element or one of its descendants.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)
     */
    onpointerover?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when a pointer is released over an element, such as lifting a finger or mouse button.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)
     */
    onpointerup?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when the user repositions the scroll box in a scrollable element, indicating scrolling activity.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
     */
    onscroll?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when scrolling has stopped in a scrollable element, after the user finishes scrolling.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)
     */
    onscrollend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when a touch interaction is interrupted, such as lifting a finger unexpectedly during a gesture.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)
     */
    ontouchcancel?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void;
    /**
     * Fires when a touch point is removed from an element, such as lifting a finger from the screen.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)
     */
    ontouchend?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void;
    /**
     * Fires continuously when a touch point moves over an element during a touch gesture.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)
     */
    ontouchmove?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void;
    /**
     * Fires when a touch point contacts an element, initiating a touch gesture.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)
     */
    ontouchstart?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void;
    /**
     * Fires when the window is about to be unloaded, such as when the user closes the tab or navigates away.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)
     */
    onunload?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when the mouse wheel or trackpad is scrolled over an element, providing delta values for scroll direction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)
     */
    onwheel?: <Attrs = {}>(this: T, ...attrs: Params<WheelEvent, T, Attrs>) => Void;
}
/**
 * Media-specific events (for <audio>, <video>)
 */
interface MediaListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Occurs when playback is possible for a media element, but further buffering may be required to continue without interruption.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
     */
    oncanplay?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when a media element can play through to the end without requiring additional buffering.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)
     */
    oncanplaythrough?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when the duration attribute of a media element is updated, reflecting a change in media length.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
     */
    ondurationchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when a media element is reset to its initial state, typically after its source is cleared.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
     */
    onemptied?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when playback of a media element reaches its end.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
     */
    onended?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when media data is loaded at the current playback position of a media element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
     */
    onloadeddata?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when the duration and dimensions of a media element have been determined during loading.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
     */
    onloadedmetadata?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when the browser begins looking for media data, marking the start of the loading process.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
     */
    onloadstart?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when playback of a media element is paused, either by the user or programmatically.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
     */
    onpause?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when playback of a media element is requested via the `play()` method, before it actually starts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
     */
    onplay?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when a media element has started playing, after buffering and any delays.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
     */
    onplaying?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs periodically to indicate progress while downloading media data for a media element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
     */
    onprogress: (ev: ProgressEvent) => void;
    /**
     * Occurs when the playback rate of a media element changes, such as speeding up or slowing down.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
     */
    onratechange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when a seek operation on a media element completes, positioning playback at the new time.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
     */
    onseeked?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when a seek operation begins on a media element, moving the playback position.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
     */
    onseeking?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when media download stalls due to insufficient data or network issues.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
     */
    onstalled?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when media loading is intentionally suspended, such as when the browser pauses a download.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
     */
    onsuspend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs periodically to report the current playback position of a media element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
     */
    ontimeupdate?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when the volume of a media element changes, including muting or unmuting.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
     */
    onvolumechange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Occurs when playback stops because the next frame of a media resource is unavailable, requiring buffering.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
     */
    onwaiting?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Form-specific events (for <form>, <input>, <select>, <textarea>)
 */
interface FormListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires before an input element’s value is modified, allowing cancellation or modification of the input.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)
     */
    onbeforeinput?: (ev: InputEvent) => void;
    /**
     * Fires when the contents of an input element or selection have changed, such as after a user modifies a form field.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
     */
    onchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when content is copied to the clipboard, allowing modification or cancellation of the operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)
     */
    oncopy?: (ev: ClipboardEvent) => void;
    /**
     * Fires when content is cut to the clipboard, allowing modification or cancellation of the operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)
     */
    oncut?: (ev: ClipboardEvent) => void;
    /**
     * Fires when a form’s data is being constructed, allowing modification of the `FormData` object before submission.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)
     */
    onformdata?: (ev: FormDataEvent) => void;
    /**
     * Fires when the value of an input element changes due to user input, such as typing or pasting.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)
     */
    oninput?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when an input element’s value fails validation constraints upon form submission.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)
     */
    oninvalid?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when content is pasted from the clipboard into an element, allowing modification of the pasted data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)
     */
    onpaste?: (ev: ClipboardEvent) => void;
    /**
     * Fires when the user resets a form, restoring its fields to their default values.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
     */
    onreset?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when the current text selection changes within an input or textarea element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
     */
    onselect?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when the document’s text selection changes, such as selecting or deselecting text.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)
     */
    onselectionchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when the user begins selecting text or content within an element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)
     */
    onselectstart?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when a form is submitted, either by user action or programmatically, allowing validation or cancellation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)
     */
    onsubmit?: (ev: SubmitEvent) => void;
}
/**
 * Drag-and-drop events (for draggable elements)
 */
interface DragListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires on the source object continuously during a drag operation while the user moves the dragged item.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
     */
    ondrag?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
    /**
     * Fires on the source object when the user releases the mouse at the end of a drag operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
     */
    ondragend?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
    /**
     * Fires on the target element when the user drags an object into a valid drop target.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
     */
    ondragenter?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
    /**
     * Fires on the target object when the user moves the dragged item out of a valid drop target during a drag operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
     */
    ondragleave?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
    /**
     * Fires on the target element continuously while the user drags an object over a valid drop target.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
     */
    ondragover?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
    /**
     * Fires on the source object when the user starts dragging a text selection or selected object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
     */
    ondragstart?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
    /**
     * Fires on the target element when the user drops a dragged object onto a valid drop target.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)
     */
    ondrop?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void;
}
/**
 * Animation and transition events (for styled elements)
 */
interface AnimationListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when an animation is aborted unexpectedly, such as when the element is removed from the DOM before completion.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)
     */
    onanimationcancel?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS animation completes successfully, after all iterations have finished.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
     */
    onanimationend?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS animation completes a single iteration, but only if the animation has multiple iterations.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
     */
    onanimationiteration?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS animation begins, after any delay specified in the animation has elapsed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
     */
    onanimationstart?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS transition is cancelled before completion, such as when a property is removed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)
     */
    ontransitioncancel?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS transition completes successfully, after reaching its end state.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
     */
    ontransitionend?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS transition is first scheduled to run, before it actually starts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)
     */
    ontransitionrun?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void;
    /**
     * Fires when a CSS transition begins, after any delay has elapsed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)
     */
    ontransitionstart?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void;
    /**
     * This is a legacy Webkit-specific alias of `onanimationend`. It is deprecated; use `onanimationend` instead.
     *
     * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
     */
    onwebkitanimationend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * This is a legacy Webkit-specific alias of `onanimationiteration`. It is deprecated; use `onanimationiteration` instead.
     *
     * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
     */
    onwebkitanimationiteration?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * This is a legacy Webkit-specific alias of `onanimationstart`. It is deprecated; use `onanimationstart` instead.
     *
     * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
     */
    onwebkitanimationstart?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * This is a legacy Webkit-specific alias of `ontransitionend`. It is deprecated; use `ontransitionend` instead.
     *
     * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
     */
    onwebkittransitionend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Canvas-specific events
 */
interface CanvasListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when a WebGL context is lost, typically due to hardware or driver issues, requiring reinitialization.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
     */
    oncontextlost?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when a lost WebGL context is restored, allowing rendering to resume on a `<canvas>` element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)
     */
    oncontextrestored?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Dialog-specific events
 */
interface DialogListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when a dialog or similar cancellable action is aborted by the user, such as pressing Esc in a `<dialog>`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event)
     */
    oncancel?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when a `<dialog>` element is closed, either by the user or programmatically.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)
     */
    onclose?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Details-specific events
 */
interface DetailsListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when a `<details>` element’s open state toggles, either opening or closing the details.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)
     */
    ontoggle?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Track-specific events
 */
interface TrackListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when a text track cue changes, such as in a `<track>` element for subtitles or captions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)
     */
    oncuechange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Video-specific events (extends MediaListeners)
 */
interface VideoListeners<T extends HTMLElement = HTMLElement> extends MediaListeners<T> {
    /**
     * Fires when a video element’s intrinsic size changes, such as when new metadata is loaded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)
     */
    onresize?: <Attrs = {}>(this: T, ...attrs: Params<UIEvent, T, Attrs>) => Void;
}
/**
 * Popover-specific events (for elements with popover attribute)
 */
interface PopoverListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires just before an element’s `popover` state toggles (e.g., before showing or hiding a popover).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)
     */
    onbeforetoggle?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
    /**
     * Fires when an element’s `popover` state toggles (e.g., showing or hiding a popover).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)
     */
    ontoggle?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void;
}
/**
 * Pointer capture-specific events (for elements using pointer capture)
 */
interface PointerListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when an element captures a pointer (e.g., mouse or touch) after a `setPointerCapture` call.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)
     */
    ongotpointercapture?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
    /**
     * Fires when an element loses pointer capture, such as when released via `releasePointerCapture`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)
     */
    onlostpointercapture?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void;
}
/**
 * Security policy violation event (for elements affected by CSP)
 */
interface SecurityListeners<T extends HTMLElement = HTMLElement> {
    /**
     * Fires when a Content Security Policy violation occurs, such as an attempt to load a blocked resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)
     */
    onsecuritypolicyviolation?: <Attrs = {}>(this: T, event?: SecurityPolicyViolationEvent, dom?: T, attrs?: Attrs, children?: Children<T>, context?: Context) => Void;
}

/**
 * Data Attributes
 */
type DataAttributes = Record<`data-${string}`, string | number | boolean | null | undefined>;
interface Attributes<T extends HTMLElement> extends Partial<DataAttributes>, AriaAttrs, SinAttrs<T>, Listener<T>, PointerListeners<T>, PopoverListeners<T> {
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
    enterkeyhint?: StringUnion<'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'>;
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
    inputmode?: StringUnion<"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url">;
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
interface LinkAttrs<T extends HTMLLinkElement> extends Attributes<T>, SecurityListeners<T> {
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
    crossOrigin?: StringUnion<'anonymous' | 'use-credentials'>;
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
interface StyleAttrs<T extends HTMLStyleElement> extends Attributes<T> {
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
interface QuoteAttrs<T extends HTMLQuoteElement> extends Attributes<T>, AnimationListeners<T>, DragListeners<T> {
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
interface OListAttrs<T extends HTMLOListElement> extends Attributes<T>, StructuralARIA, AnimationListeners<T>, DragListeners<T> {
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
    type?: StringUnion<'1' | 'a' | 'A' | 'i' | 'I'>;
    /**
     * Specifies the role of an ordered list, such as a list or menu.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
     */
    role?: StringUnion<"list" | "directory" | "menu" | "tablist" | "tree">;
}
interface LIAttrs<T extends HTMLLIElement> extends Attributes<T>, StructuralARIA, AnimationListeners<T>, DragListeners<T> {
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
interface AnchorAttrs<T extends HTMLAnchorElement> extends Attributes<T>, InteractiveARIA {
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
interface TimeAttrs<T extends HTMLTimeElement> extends Attributes<T>, AnimationListeners<T> {
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
interface ModAttrs<T extends HTMLModElement> extends Attributes<T>, AnimationListeners<T> {
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
interface ImageAttrs<T extends HTMLImageElement> extends Attributes<T> {
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
    crossOrigin?: StringUnion<'anonymous' | 'use-credentials'>;
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
    decoding?: StringUnion<'sync' | 'async' | 'auto'>;
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
    loading?: StringUnion<'eager' | 'lazy'>;
    /**
     * Specifies the role of an image, typically as an image or decorative element.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
     */
    role?: StringUnion<"img" | "presentation">;
}
interface IFrameAttrs<T extends HTMLIFrameElement> extends Attributes<T>, BusyARIA {
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
    sandbox?: StringUnion<'allow-forms' | 'allow-modals' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-same-origin' | 'allow-scripts' | 'allow-top-navigation'>;
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
    referrerPolicy?: string;
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
interface EmbedAttrs<T extends HTMLEmbedElement> extends Attributes<T>, BusyARIA {
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
interface ObjectAttrs<T extends HTMLObjectElement> extends Attributes<T>, BusyARIA {
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
interface VideoAttrs<T extends HTMLVideoElement> extends Attributes<T>, BusyARIA, VideoListeners<T>, DragListeners<T>, AnimationListeners<T> {
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
interface AudioAttrs<T extends HTMLAudioElement> extends Attributes<T>, BusyARIA, MediaListeners<T>, AnimationListeners<T> {
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
interface SourceAttrs<T extends HTMLSourceElement> extends Attributes<T> {
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
interface TrackAttrs<T extends HTMLTrackElement> extends Attributes<T>, TrackListeners<T> {
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
    srcLang?: string;
}
interface MapAttrs<T extends HTMLMapElement> extends Attributes<T> {
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
interface AreaAttrs<T extends HTMLAreaElement> extends Attributes<T>, InteractiveARIA {
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
interface TableAttrs<T extends HTMLTableElement> extends Attributes<T>, StructuralARIA {
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
interface TableColAttrs<T extends HTMLTableColElement> extends Attributes<T>, StructuralARIA {
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
interface TableCellAttrs<T extends HTMLTableCellElement> extends Attributes<T>, StructuralARIA {
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
interface FormAttrs<T extends HTMLFormElement> extends Attributes<T>, FormARIA, FormListeners<T>, AnimationListeners<T> {
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
    enctype?: StringUnion<'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>;
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
interface LabelAttrs<T extends HTMLLabelElement> extends Attributes<T>, AnimationListeners<T> {
    /**
     * ID of the form control this label is for.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/label#attr-for)
     */
    htmlFor?: string;
}
interface InputAttrs<T extends HTMLInputElement> extends Attributes<T>, InteractiveARIA, FormARIA, FormListeners<T>, AnimationListeners<T>, DragListeners<T> {
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
    autocomplete?: StringUnion<'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-year' | 'bday-day' | 'bday-month' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel-area-code' | 'tel' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work'>;
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
    formEnctype?: StringUnion<'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>;
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
    minLength?: string;
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
    type?: StringUnion<'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'datetime' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button'>;
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
    role?: StringUnion<"checkbox" | "combobox" | "radio" | "searchbox" | "slider" | "spinbutton" | "switch" | "textbox">;
}
interface ButtonAttrs<T extends HTMLButtonElement> extends Attributes<T>, InteractiveARIA, AnimationListeners<T> {
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
    formEnctype?: StringUnion<'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>;
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
interface SelectAttrs<T extends HTMLSelectElement> extends Attributes<T>, InteractiveARIA, FormARIA, FormListeners<T>, AnimationListeners<T> {
    /**
     * Autocomplete hint (e.g., `off`, `country`).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/select#attr-autocomplete)
     */
    autocomplete?: AutoCompleteUnion;
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
interface OptGroupAttrs<T extends HTMLOptGroupElement> extends Attributes<T>, StructuralARIA {
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
interface OptionAttrs<T extends HTMLOptionElement> extends Attributes<T>, InteractiveARIA {
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
interface TextAreaAttrs<T extends HTMLTextAreaElement> extends Attributes<T>, InteractiveARIA, FormARIA, FormListeners<T>, AnimationListeners<T> {
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
    minLength?: string;
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
interface OutputAttrs<T extends HTMLOutputElement> extends Attributes<T>, AnimationListeners<T> {
    /**
     * Space-separated IDs of inputs this output relates to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/output#attr-for)
     */
    htmlFor?: string;
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
interface ProgressAttrs<T extends HTMLProgressElement> extends Attributes<T>, ProgressARIA, AnimationListeners<T> {
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
interface MeterAttrs<T extends HTMLMeterElement> extends Attributes<T>, ProgressARIA, AnimationListeners<T> {
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
interface FieldSetAttrs<T extends HTMLFieldSetElement> extends Attributes<T>, AnimationListeners<T> {
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
interface DetailsAttrs<T extends HTMLDetailsElement> extends Attributes<T>, InteractiveARIA, ModalARIA, DetailsListeners<T>, AnimationListeners<T> {
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
interface DialogAttrs<T extends HTMLDialogElement> extends Attributes<T>, InteractiveARIA, ModalARIA, DialogListeners<T>, AnimationListeners<T> {
    /**
     * Indicates the role of a dialog, typically a dialog or alertdialog.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
     */
    role?: StringUnion<"dialog" | "alertdialog">;
}
interface ScriptAttrs<T extends HTMLScriptElement> extends Attributes<T> {
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
    referrerPolicy?: string;
    /**
     * Excludes script for module-supporting browsers. Use `true` or empty string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-nomodule)
     */
    nomodule?: string;
}
interface CanvasAttrs<T extends HTMLCanvasElement> extends Attributes<T>, BusyARIA, CanvasListeners<T> {
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
interface DataAttrs<T extends HTMLDataElement> extends Attributes<T>, AnimationListeners<T> {
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

type SinElement<T> = (T extends HTMLBaseElement ? Attributes<T> : T extends HTMLLinkElement ? LinkAttrs<T> : T extends HTMLStyleElement ? StyleAttrs<T> : T extends HTMLQuoteElement ? QuoteAttrs<T> : T extends HTMLOListElement ? OListAttrs<T> : T extends HTMLLIElement ? LIAttrs<T> : T extends HTMLAnchorElement ? AnchorAttrs<T> : T extends HTMLQuoteElement ? QuoteAttrs<T> : T extends HTMLTimeElement ? TimeAttrs<T> : T extends HTMLModElement ? ModAttrs<T> : T extends HTMLModElement ? ModAttrs<T> : T extends HTMLImageElement ? ImageAttrs<T> : T extends HTMLIFrameElement ? IFrameAttrs<T> : T extends HTMLEmbedElement ? EmbedAttrs<T> : T extends HTMLObjectElement ? ObjectAttrs<T> : T extends HTMLVideoElement ? VideoAttrs<T> : T extends HTMLAudioElement ? AudioAttrs<T> : T extends HTMLSourceElement ? SourceAttrs<T> : T extends HTMLTrackElement ? TrackAttrs<T> : T extends HTMLMapElement ? MapAttrs<T> : T extends HTMLAreaElement ? AreaAttrs<T> : T extends HTMLTableElement ? TableAttrs<T> : T extends HTMLTableColElement ? TableColAttrs<T> : T extends HTMLTableColElement ? TableColAttrs<T> : T extends HTMLTableCellElement ? TableCellAttrs<T> : T extends HTMLTableCellElement ? TableCellAttrs<T> : T extends HTMLFormElement ? FormAttrs<T> : T extends HTMLLabelElement ? LabelAttrs<T> : T extends HTMLInputElement ? InputAttrs<T> : T extends HTMLButtonElement ? ButtonAttrs<T> : T extends HTMLSelectElement ? SelectAttrs<T> : T extends HTMLOptGroupElement ? OptGroupAttrs<T> : T extends HTMLOptionElement ? OptionAttrs<T> : T extends HTMLTextAreaElement ? TextAreaAttrs<T> : T extends HTMLOutputElement ? OutputAttrs<T> : T extends HTMLProgressElement ? ProgressAttrs<T> : T extends HTMLMeterElement ? MeterAttrs<T> : T extends HTMLFieldSetElement ? FieldSetAttrs<T> : T extends HTMLDetailsElement ? DetailsAttrs<T> : T extends HTMLDialogElement ? DialogAttrs<T> : T extends HTMLScriptElement ? ScriptAttrs<T> : T extends HTMLCanvasElement ? CanvasAttrs<T> : T extends HTMLDataElement ? DataAttrs<T> : T extends HTMLElement ? Attributes<T> : T extends HTMLUListElement ? Attributes<T> : never);
interface Component {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>;
    <T extends HTMLElement>(attrs: SinElement<T>, children?: Children): View<T>;
    <T extends HTMLElement>(...children: Children): View<T>;
    <T extends HTMLElement>(fn: (attrs: any, children: Children, context: Context) => Children): View<T>;
}
interface Static<T> {
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
declare interface Constructor {
    /**
     * Tagged Literal Component with View/s
     *
     * @example
     *
     * s`input`('Hello Sinner!')
     */
    <T extends HTMLElement>(tag: Literal, ...style: string[]): Static<SinElement<T>>;
}

/**
 * Route handler options argument type
 *
 * @example
 *
 * s.route({ '/': () => [] }, {
 *   replace: false,
 *   scroll: true,
 *   state: {}
 * })
 */
interface Options<T = {}> {
    /**
     * History pushState replace
     *
     * @default false
     */
    replace?: boolean;
    /**
     * Scroll restoration
     *
     * @default true
     */
    scroll?: boolean;
    /**
     * History pushState state object
     *
     * @default {}
     */
    state?: T;
}
/**
 * Route `query` value interface
 *
 * @example
 *
 * s.route.query // Route.Query
 */
interface Query {
    /**
     * Get a query parameter value
     *
     * @example
     *
     * // ?garden=eden&fruit=apple
     *
     * s.route.query.get('fruit') // => apple
     */
    get: (key: string) => string;
    /**
     * Set a query parameter value
     *
     * @example
     *
     * // ?garden=eden
     *
     * s.route.query.set('garden', 'eden')
     */
    set: <T = any>(key: string, value: T) => void;
    /**
     * Replaces query parameters. Accepts object or string
     *
     * @example
     *
     * // ?adam=male&eve=female
     *
     * s.route.query.replace({
     *   adam: 'male',
     *   eve: 'female',
     * })
     */
    replace: <T = {} | string>(params: T) => URLSearchParams;
    /**
     * Clear/remove the query parameters from URL
     *
     * @example
     *
     * s.route.query.clear()
     */
    clear: () => void;
}
/**
 * Route handler value interface
 */
interface Handler<A> {
    /**
     * Route Handler
     */
    [path: `/${string}`]: (() => Constructor | Constructor[]) | Constructor | Constructor[];
}
/**
 * #### Route Instance/s and Method
 *
 * Function type for the `s.route` method and `{ route }` instance/s.
 */
interface Route {
    /**
     * Visit route
     *
     * @example
     *
     * s.route('/sinner')
     */
    (route: string): void;
    /**
     * Route Handler
     *
     * @example
     *
     * s.route({
     *  // Component
     *  '/sin-component': s`main`([
     *    s`h1`('Hail the wicked!')
     *  ]),
     *  // Function
     *  '/sin-function': () => [
     *    s`section`('Joyous Blasphemy')
     *  ],
     * })
     */
    <A>(routes: Handler<A>, options?: Options): View;
    /**
     * Returns the current URL pathname (route)
     *
     * @example
     *
     * s.route.path // => '/'
     */
    readonly path: string;
    /**
     * Pathmode prefixing used to define hashbang routing
     *
     * @default ''
     */
    prefix: StringUnion<'' | '#!'>;
    /**
     * Query Parameter utilities
     */
    query: Query;
    /**
     * The parent route instance.
     *
     * @example
     *
     * s.route.parent.path // /a/b > /a is parent
     */
    parent: Route;
    /**
     * The root route handler (alias of `s.route`)
     *
     * @example
     *
     * s.root // => Route
     */
    root: Route;
    /**
     * Whether or not the provided string is a pathname of the URL
     *
     * @example
     *
     * // Pathname: /sinner/loki
     *
     * s.route.has('loki') // => true;
     * s.route.has('sin') // => false;
     */
    has(path: string): boolean;
    /**
     * Returns the current URL pathname (route)
     *
     * @example
     *
     * s.toString() // => '/'
     */
    toString(): string;
}

/**
 * Sin Component Context
 */
interface Context {
    /**
     * Sin SSR (last modified date of `sin build`)
     */
    readonly modified?: number;
    /**
     * A boolean indicating whether or not component is hydrating
     */
    readonly hydrating: boolean;
    /**
     * References `window.location`
     */
    location: Pick<globalThis.Window, 'location'>;
    /**
     * Document Methods
     */
    doc: Doc;
    /**
     * Route Control
     */
    route: Route;
    /**
     * Called when component is removed or destroyed.
     *
     * @example
     *
     * const section = s`section`('Penance Required!');
     *
     * section.onremove() => console.log('Forgiven')
     */
    onremove: (cb: () => void) => void;
    /**
     * Exclude component from global redraws. Expects a `boolean` parameter!
     *
     * > By default, components will redraw.
     *
     * @example
     *
     * s(({},[], { ignore }) => ignore(true))   // Component is ignored during redraw
     * s(({},[], { ignore }) => ignore(false))  // Component applies redraw (default)
     */
    ignore: (enable: boolean) => void;
    /**
     * Re-initializes the component and redraws without removal.
     *
     * > Use `refresh()` to update stateful data without killing the component.
     *
     * @example
     *
     * s(({}, [], { refresh }) => refresh())
     */
    refresh: () => void;
    /**
     * Reinitialize component, similar to updating `key` reference.
     *
     * > Use `reload()` to crucify and resurrect the component.
     *
     * @example
     *
     * s(({}, [], { reload }) => reload())
     */
    reload: () => void;
    /**
     * Synchronous Redraw on the component level
     *
     * @example
     *
     * s(({}, [], { redraw }) => redraw())
     */
    redraw: () => Promise<void>;
}

/**
 * The child node of a component
 */
type Child<Attrs = {}> = Views<Attrs> | string | number | undefined;
/**
 * Children of a component
 */
type Children<Attrs = {}> = [] | Child<Attrs>[];
/**
 * Children of a component
 */
interface Redraw {
    (): void;
    /**
     * Force Redraw
     */
    force(): void;
}
/**
 * Component view instance `{ tag }` interface
 */
interface Tag {
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
    readonly vars: {};
}
/**
 * Sin components will return a View interface
 *
 * @example
 *
 * s`button`('Hello Sinner!') // => View
 */
interface View<Attrs = {}> {
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
type Views<Attrs = {}> = View<Attrs> | View<Attrs>[];

/**
 * DOM element argument type
 */
type DOM = HTMLElement | Element | {};
type MountDOM<Attrs = {}> = (dom: DOM, attrs: Attrs, children: View[] | [], context: Context) => Children;
/**
 * Function type for the `s.mount` method.
 *
 * @example
 *
* s.mount((dom, component, context) => [])
*/
interface Mount {
    <Attrs = {}>(dom: HTMLElement | Element | {}, sin: MountDOM<Attrs>): Views<Attrs>;
    <Attrs = {}>(fn: (attrs: Attrs, children: View[] | [], context: Context) => Children): Views<Attrs>;
    <Attrs = {}>(fn: (children: View[] | [], context: Context) => Children): Views<Attrs>;
    <Attrs = {}>(fn: (children: View[] | [], context: Context) => Children): Views<Attrs>;
}

declare class Sin {
    /**
     * Global Window Object
     */
    static readonly window: Window & typeof globalThis;
    /**
      * Scroll Restoration
      */
    static readonly scroll: boolean;
    /**
     * Check server
     */
    static readonly is: {
        /**
         * Whether or not code is executing on server.
         */
        server: boolean;
    };
    /**
     * Redrawing
     */
    static readonly redrawing: boolean;
    /**
     * JSX
     */
    static jsx: View;
    /**
     * Delay redraw or operation.
     *
     * @example
     *
     * // For in that sleep of death...
     * await sleep(2000)
     * // What dreams my come?
     */
    static sleep(x: number): Promise<number>;
    /**
     * Sin Redraw
     */
    static redraw: Redraw;
    /**
     * Sin Style
     *
     * Set the base `<style>` which sin uses.
     *
     * @example
     *
     * const style = document.createElement('style');
     *
     * s.style(style) // => HTMLStyleElement
     *
     * // Omitting parameter returns current <style> sin is using
     * s.style() // => HTMLStyleElement
     */
    static style: (element?: HTMLStyleElement) => HTMLStyleElement;
    /**
     * ### Sin Event
     *
     * @todo Speak with Rasmus
     *
     * @example
     *
     * const sinned = s.event(x => console.log(x))
     *
     * sinned.observe('repent')
     */
    static event<T = any>(cb?: (x: T) => void): {
        /**
         * Observe event (Returns an unobserver callback function)
         */
        observe: (x: any, once: any) => () => boolean;
    };
    /**
     * Sin CSS
     */
    static css: {
        <T = any>(...params: T[]): Literal;
        /**
         * CSS Alias Syntaxes
         *
         * @todo Rasmus Example
         */
        alias: {
            /**
             * Set alias using key and value
             */
            (name: string, value: string): void;
            /**
             * Set alias using object
             */
            (value: {
                [query: string]: string;
            }): void;
        };
        /**
         * CSS Resets
         *
         * @todo Rasmus Example
         */
        reset: (x?: any[], ...xs: any[]) => Literal;
        /**
         * CSS custom unit control
         *
         * @example
         *
         * // Option 1
         * s.css.unit('n', (value, property) => (x * .25) + 'rem' )
         *
         * // Option 2
         * s.css.unit({ n: (value, property) => (x * .25) + 'rem' })
         */
        unit: Units;
    };
    /**
     * CSS Animate utility
     */
    static animate: () => (defferable?: boolean) => void;
    /**
     * Mount
     */
    static mount: Mount;
    /**
     * HTTP utility for requests
     *
     * @example
     *
     * s.http('/api/path', {
     *  method: 'GET',
     *  redraw: true,
     *  responseType: 'json',
     *  json: 'application/json',
     *  query: {},
     *  body: {},
     *  user: '',
     *  pass: '',
     *  headers: {},
     *  timeout: 0,
     *  config: (xhr) => {},
     * })
     */
    static http: Http;
    /**
     * Create live stream with value. Optionally pass a list of observers.
     *
     * @example
     *
     * const a = s.live(10);
     * const b = s.live(20, x => {}, x => {});
     */
    static live: Live;
    /**
     * Sin Routing
     */
    static route: Route;
    /**
     * DOM Event listener - forwarded to `addEventListener`
     *
     * @example
     *
     * const { dom } = s`button`('Click for atonement!');
     *
     * s.on(dom, 'click', (e) => {
     *
     *  // In the den of sin!
     *
     * }, {
     *  passive: true
     * })
     */
    static on: {
        <T extends HTMLElement, K extends keyof WindowEventMap = keyof WindowEventMap>(
        /**
         * The DOM Element listener will be attached
         */
        target: T, 
        /**
         * The event name
         */
        event: K, 
        /**
         * The listener callback function
         */
        listener: (this: Window, event: WindowEventMap[K]) => any, 
        /**
         * Event Options
         */
        options?: boolean | AddEventListenerOptions): void;
    };
    /**
     * Forgiving HTML or SVG string forms into unescaped HTML or SVG.
     *
     * > Unsanitized user input is **Forbidden!**
     *
     * @example
     *
     * s.trust(`<h1>Woe to the wicked!</h1>`)
     */
    static trust<T extends HTMLElement>(strings: string, ...values: string[]): T;
    /**
     * Error
     */
    static error(): Children;
}

declare namespace S {
    const Component: Component;
    const Http: Http;
    const Live: Live;
    const View: View;
    const Route: Route;
    const Mount: Mount;
    const CSS: CSS;
    const Context: Context;
}

declare const s: Identity<typeof Sin> & Component;

export { S, s as default };
