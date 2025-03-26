import { StringUnion } from "./Utilities";

export type ARIARole = StringUnion<
  | "alert"
  | "alertdialog"
  | "application"
  | "article"
  | "banner"
  | "button"
  | "cell"
  | "checkbox"
  | "columnheader"
  | "combobox"
  | "complementary"
  | "contentinfo"
  | "definition"
  | "dialog"
  | "directory"
  | "document"
  | "figure"
  | "form"
  | "grid"
  | "gridcell"
  | "group"
  | "heading"
  | "img"
  | "link"
  | "list"
  | "listbox"
  | "listitem"
  | "main"
  | "mark"
  | "math"
  | "menu"
  | "menubar"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "navigation"
  | "note"
  | "option"
  | "presentation"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "region"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "scrollbar"
  | "search"
  | "searchbox"
  | "separator"
  | "slider"
  | "spinbutton"
  | "status"
  | "suggestion"
  | "switch"
  | "tab"
  | "table"
  | "tablist"
  | "tabpanel"
  | "term"
  | "textbox"
  | "timer"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem"
>;

/**
 * Base ARIA attributes applicable to all HTML elements.
 */
export interface AriaAttrs {
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
export interface InteractiveARIA {
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
export interface StructuralARIA {
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
export interface FormARIA {
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
export interface ProgressARIA {
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
export interface ModalARIA {
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
export interface BusyARIA {
  /**
   * Indicates the element is being updated.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
   */
  ariaBusy?: boolean | "true" | "false";
}
