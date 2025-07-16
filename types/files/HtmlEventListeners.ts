import type { Void } from "./Utilities";
import type { Context } from "./Context";
import type { Children } from "./View";

export type SetNonNullable<BaseType, Keys extends keyof BaseType = keyof BaseType> = {
	[Key in keyof BaseType]: Key extends Keys
		? NonNullable<BaseType[Key]>
		: BaseType[Key];
};

// Generic event handler type with non-optional arguments
export type EventHandler<Dom, Event, Attrs = any> = (this: Dom, ...args: [
  event?: SetNonNullable<Target<Dom, Event>>,
  dom?: Dom,
  attrs?: Attrs,
  children?: Children,
  context?: Context
]) => Void;


/**
 * Event DOM Target overrides - Ensures `event.target` returns HTMLElement.
 */
export type Target<T, E> = E & {
  /**
   * Sin redraw control on user-event. - Set to `false` to prevent dom draws.
   */
  redraw: boolean;
  /**
   * Returns the `dom` of the attrs event.
   */
  readonly target: T; // Made non-nullable
  /**
   * Returns the `dom` whose event listener callback was invoked, typically the same as `target`
   */
  readonly currentTarget: T; // Made non-nullable
  /**
   * @deprecated
   */
  readonly srcElement: T; // Made non-nullable
};

/**
 * Universal events that apply to all HTML elements
 */
export interface DOMListen<T extends HTMLElement> {
  /**
   * Fires when a non-primary mouse button (e.g., middle or right) is clicked, typically used for auxiliary actions.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)
   */
  onauxclick?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the object loses the input focus, such as when the user tabs away or clicks elsewhere.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
   */
  onblur?: EventHandler<T, FocusEvent>;
  /**
   * Fires when the user clicks the left mouse button on the object, triggering a standard click action.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
   */
  onclick?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
   */
  oncontextmenu?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the user double-clicks the object with the primary mouse button.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
   */
  ondblclick?: EventHandler<T, MouseEvent>;
  /**
   * Fires when an error occurs during the loading of an object, such as an image, script, or media element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)
   */
  onerror?: EventHandler<T, OnErrorEventHandler>;
  /**
   * Fires when the object receives input focus, such as when the user tabs to or clicks it.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
   */
  onfocus?: EventHandler<T, FocusEvent>;
  /**
   * Fires when an element or one of its descendants receives focus, bubbling up through the DOM.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusin_event)
   */
  onfocusin?: EventHandler<T, FocusEvent>;
  /**
   * Fires when an element or one of its descendants loses focus, bubbling up through the DOM.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusout_event)
   */
  onfocusout?: EventHandler<T, FocusEvent>;
  /**
   * Fires when the user presses a key on the keyboard, including modifier keys.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
   */
  onkeydown?: EventHandler<T, FocusEvent>;
  /**
   * Fires when the user presses an alphanumeric key. This event is deprecated; use `onkeydown` or `oninput` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
   */
  onkeypress?: EventHandler<T, FocusEvent>;
  /**
   * Fires when the user releases a key on the keyboard.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
   */
  onkeyup?: EventHandler<T, FocusEvent>;
  /**
   * Fires immediately after the browser fully loads an object, such as an image, script, or SVG element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
   */
  onload?: EventHandler<T, Event>;
  /**
   * Fires when the user presses a mouse button down over the object, initiating a click or drag.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
   */
  onmousedown?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the mouse pointer enters an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)
   */
  onmouseenter?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the mouse pointer leaves an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)
   */
  onmouseleave?: EventHandler<T, MouseEvent>;
  /**
   * Fires continuously when the user moves the mouse pointer over the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
   */
  onmousemove?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the mouse pointer moves outside the boundaries of the object or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
   */
  onmouseout?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the mouse pointer moves into the object or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
   */
  onmouseover?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the user releases a mouse button while the pointer is over the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
   */
  onmouseup?: EventHandler<T, MouseEvent>;
  /**
   * Fires when the mouse wheel is rotated. This event is deprecated; use `onwheel` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousewheel_event)
   */
  onmousewheel?: EventHandler<T, MouseEvent>;
  /**
   * Fires when a pointer interaction (e.g., touch or pen) is interrupted, such as lifting a finger unexpectedly.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)
   */
  onpointercancel?: EventHandler<T, PointerEvent>;
  /**
   * Fires when a pointer (e.g., mouse, touch, or pen) is pressed down on an element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)
   */
  onpointerdown?: EventHandler<T, PointerEvent>;
  /**
   * Fires when a pointer enters an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)
   */
  onpointerenter?: EventHandler<T, PointerEvent>;
  /**
   * Fires when a pointer leaves an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)
   */
  onpointerleave?: EventHandler<T, PointerEvent>;
  /**
   * Fires continuously when a pointer moves over an element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)
   */
  onpointermove?: EventHandler<T, PointerEvent>;
  /**
   * Fires when a pointer moves out of an element or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)
   */
  onpointerout?: EventHandler<T, PointerEvent>;
  /**
   * Fires when a pointer moves into an element or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)
   */
  onpointerover?: EventHandler<T, PointerEvent>;
  /**
   * Fires when a pointer is released over an element, such as lifting a finger or mouse button.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)
   */
  onpointerup?: EventHandler<T, PointerEvent>;
  /**
   * Fires when the user repositions the scroll box in a scrollable element, indicating scrolling activity.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
   */
  onscroll?: EventHandler<T, Event>;
  /**
   * Fires when scrolling has stopped in a scrollable element, after the user finishes scrolling.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)
   */
  onscrollend?: EventHandler<T, Event>;
  /**
   * Fires when a touch interaction is interrupted, such as lifting a finger unexpectedly during a gesture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)
   */
  ontouchcancel?: EventHandler<T, TouchEvent>;
  /**
   * Fires when a touch point is removed from an element, such as lifting a finger from the screen.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)
   */
  ontouchend?: EventHandler<T, TouchEvent>;
  /**
   * Fires continuously when a touch point moves over an element during a touch gesture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)
   */
  ontouchmove?: EventHandler<T, TouchEvent>;
  /**
   * Fires when a touch point contacts an element, initiating a touch gesture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)
   */
  ontouchstart?: EventHandler<T, TouchEvent>;
  /**
   * Fires when the window is about to be unloaded, such as when the user closes the tab or navigates away.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)
   */
  onunload?: EventHandler<T, Event>;
  /**
   * Fires when the mouse wheel or trackpad is scrolled over an element, providing delta values for scroll direction.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)
   */
  onwheel?: EventHandler<T, WheelEvent>;
}

/**
 * Media-specific events (for `<audio>`, `<video>`)
 */
export interface MediaListeners<T extends HTMLElement> {
  /**
   * Fires when the user aborts the download of a resource, such as a media element or fetch request.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
   */
  onabort?: EventHandler<T, UIEvent>;
  /**
   * Occurs when playback is possible for a media element, but further buffering may be required to
   * continue without interruption.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
   */
  oncanplay?: EventHandler<T, Event>;
  /**
   * Occurs when a media element can play through to the end without requiring additional buffering.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)
   */
  oncanplaythrough?: EventHandler<T, Event>;
  /**
   * Occurs when the duration attribute of a media element is updated, reflecting a change in media length.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
   */
  ondurationchange?: EventHandler<T, Event>;
  /**
   * Occurs when a media element is reset to its initial state, typically after its source is cleared.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
   */
  onemptied?: EventHandler<T, Event>;
  /**
   * Occurs when playback of a media element reaches its end.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
   */
  onended?: EventHandler<T, Event>;
  /**
   * Occurs when media data is loaded at the current playback position of a media element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
   */
  onloadeddata?: EventHandler<T, Event>;
  /**
   * Occurs when the duration and dimensions of a media element have been determined during loading.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
   */
  onloadedmetadata?: EventHandler<T, Event>;
  /**
   * Occurs when the browser begins looking for media data, marking the start of the loading process.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
   */
  onloadstart?: EventHandler<T, Event>;
  /**
   * Occurs when playback of a media element is paused, either by the user or programmatically.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
   */
  onpause?: EventHandler<T, Event>;
  /**
   * Occurs when playback of a media element is requested via the `play()` method, before it actually starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
   */
  onplay?: EventHandler<T, Event>;
  /**
   * Occurs when a media element has started playing, after buffering and any delays.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
   */
  onplaying?: EventHandler<T, Event>;
  /**
   * Occurs periodically to indicate progress while downloading media data for a media element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
   */
  onprogress?: EventHandler<T, ProgressEvent>;
  /**
   * Occurs when the playback rate of a media element changes, such as speeding up or slowing down.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
   */
  onratechange?: EventHandler<T, Event>;
  /**
   * Occurs when a seek operation on a media element completes, positioning playback at the new time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
   */
  onseeked?: EventHandler<T, Event>;
  /**
   * Occurs when a seek operation begins on a media element, moving the playback position.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
   */
  onseeking?: EventHandler<T, Event>;
  /**
   * Occurs when media download stalls due to insufficient data or network issues.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
   */
  onstalled?: EventHandler<T, Event>;
  /**
   * Occurs when media loading is intentionally suspended, such as when the browser pauses a download.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
   */
  onsuspend?: EventHandler<T, Event>;
  /**
   * Occurs periodically to report the current playback position of a media element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
   */
  ontimeupdate?: EventHandler<T, Event>;
  /**
   * Occurs when the volume of a media element changes, including muting or unmuting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
   */
  onvolumechange?: EventHandler<T, Event>;
  /**
   * Occurs when playback stops because the next frame of a media resource is unavailable, requiring buffering.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
   */
  onwaiting?: EventHandler<T, Event>;
}

/**
 * Form-specific events (for `<form>`, `<input>`, `<select>`, `<textarea>`)
 */
export interface FormListeners<T extends HTMLFormElement> {
  /**
   * Fires before an input element’s value is modified, allowing cancellation or modification of the input.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)
   */
  onbeforeinput?: EventHandler<T, InputEvent>;
  /**
   * Fires when the contents of an input element or selection have changed, such as after a user modifies a form field.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
   */
  onchange?: EventHandler<T, Event>;
  /**
   * Fires when content is copied to the clipboard, allowing modification or cancellation of the operation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)
   */
  oncopy?: EventHandler<T, ClipboardEvent>;
  /**
   * Fires when content is cut to the clipboard, allowing modification or cancellation of the operation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)
   */
  oncut?: EventHandler<T, ClipboardEvent>;
  /**
   * Fires when a form’s data is being constructed, allowing modification of the `FormData` object before submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)
   */
  onformdata?: EventHandler<T, FormDataEvent>;
  /**
   * Fires when the value of an input element changes due to user input, such as typing or pasting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)
   */
  oninput?: EventHandler<T, Event>;
  /**
   * Fires when an input element’s value fails validation constraints upon form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)
   */
  oninvalid?: EventHandler<T, Event>;
  /**
   * Fires when content is pasted from the clipboard into an element, allowing modification of the pasted data.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)
   */
  onpaste?: EventHandler<T, ClipboardEvent>;
  /**
   * Fires when the user resets a form, restoring its fields to their default values.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
   */
  onreset?: EventHandler<T, Event>;
  /**
   * Fires when the current text selection changes within an input or textarea element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
   */
  onselect?: EventHandler<T, Event>;
  /**
   * Fires when the document’s text selection changes, such as selecting or deselecting text.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)
   */
  onselectionchange?: EventHandler<T, Event>;
  /**
   * Fires when the user begins selecting text or content within an element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)
   */
  onselectstart?: EventHandler<T, Event>;
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
export interface DragListeners<T extends HTMLElement> {
  /**
   * Fires on the source object continuously during a drag operation while the user moves the dragged item.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
   */
  ondrag?: EventHandler<T, DragEvent>;
  /**
   * Fires on the source object when the user releases the mouse at the end of a drag operation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
   */
  ondragend?: EventHandler<T, DragEvent>;
  /**
   * Fires on the target element when the user drags an object into a valid drop target.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
   */
  ondragenter?: EventHandler<T, DragEvent>;
  /**
   * Fires on the target object when the user moves the dragged item out of a valid drop target during a drag operation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
   */
  ondragleave?: EventHandler<T, DragEvent>;
  /**
   * Fires on the target element continuously while the user drags an object over a valid drop target.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
   */
  ondragover?: EventHandler<T, DragEvent>;
  /**
   * Fires on the source object when the user starts dragging a text selection or selected object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
   */
  ondragstart?: EventHandler<T, DragEvent>;
  /**
   * Fires on the target element when the user drops a dragged object onto a valid drop target.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)
   */
  ondrop?: EventHandler<T, DragEvent>;
}

/**
 * Animation and transition events (for styled elements)
 */
export interface AnimationListeners<T extends HTMLElement> {
  /**
   * Fires when an animation is aborted unexpectedly, such as when the element is removed from the DOM before completion.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)
   */
  onanimationcancel?: EventHandler<T, AnimationEvent>;
  /**
   * Fires when a CSS animation completes successfully, after all iterations have finished.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
   */
  onanimationend?: EventHandler<T, AnimationEvent>;
  /**
   * Fires when a CSS animation completes a single iteration, but only if the animation has multiple iterations.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
   */
  onanimationiteration?: EventHandler<T, AnimationEvent>;
  /**
   * Fires when a CSS animation begins, after any delay specified in the animation has elapsed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
   */
  onanimationstart?: EventHandler<T, AnimationEvent>;
  /**
   * Fires when a CSS transition is cancelled before completion, such as when a property is removed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)
   */
  ontransitioncancel?: EventHandler<T, TransitionEvent>;
  /**
   * Fires when a CSS transition completes successfully, after reaching its end state.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
   */
  ontransitionend?: EventHandler<T, TransitionEvent>;
  /**
   * Fires when a CSS transition is first scheduled to run, before it actually starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)
   */
  ontransitionrun?: EventHandler<T, TransitionEvent>;
  /**
   * Fires when a CSS transition begins, after any delay has elapsed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)
   */
  ontransitionstart?: EventHandler<T, TransitionEvent>;
  /**
   * This is a legacy Webkit-specific alias of `onanimationend`. It is deprecated; use `onanimationend` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
   */
  onwebkitanimationend?: EventHandler<T, Event>;
  /**
   * This is a legacy Webkit-specific alias of `onanimationiteration`. It is deprecated; use `onanimationiteration` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
   */
  onwebkitanimationiteration?: EventHandler<T, Event>;
  /**
   * This is a legacy Webkit-specific alias of `onanimationstart`. It is deprecated; use `onanimationstart` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
   */
  onwebkitanimationstart?: EventHandler<T, Event>;
  /**
   * This is a legacy Webkit-specific alias of `ontransitionend`. It is deprecated; use `ontransitionend` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
   */
  onwebkittransitionend?: EventHandler<T, Event>;
}

/**
 * Canvas-specific events
 */
export interface CanvasListeners<T extends HTMLElement> {
  /**
   * Fires when a WebGL context is lost, typically due to hardware or driver issues, requiring reinitialization.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
   */
  oncontextlost?: EventHandler<T, Event>;
  /**
   * Fires when a lost WebGL context is restored, allowing rendering to resume on a `<canvas>` element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)
   */
  oncontextrestored?: EventHandler<T, Event>;
}

/**
 * Dialog-specific events
 */
export interface DialogListeners<T extends HTMLElement> {
  /**
   * Fires when a dialog or similar cancellable action is aborted by the user, such as pressing Esc in a `<dialog>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event)
   */
  oncancel?: EventHandler<T, Event>;
  /**
   * Fires when a `<dialog>` element is closed, either by the user or programmatically.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)
   */
  onclose?: EventHandler<T, Event>;
}

/**
 * Details-specific events
 */
export interface DetailsListeners<T extends HTMLElement> {
  /**
   * Fires when a `<details>` element’s open state toggles, either opening or closing the details.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)
   */
  ontoggle?: EventHandler<T, Event>;
}

/**
 * Slot-specific events
 */
export interface SlotListeners<T extends HTMLElement> {
  /**
   * Fires when the content assigned to a `<slot>` element in a shadow DOM changes.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)
   */
  onslotchange?: EventHandler<T, Event>;
}

/**
 * Track-specific events
 */
export interface TrackListeners<T extends HTMLElement> {
  /**
   * Fires when a text track cue changes, such as in a `<track>` element for subtitles or captions.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)
   */
  oncuechange?: EventHandler<T, Event>;
}

/**
 * Video-specific events (extends MediaListeners)
 */
export interface VideoListeners<T extends HTMLElement> extends MediaListeners<T> {
  /**
   * Fires when a video element’s intrinsic size changes, such as when new metadata is loaded.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)
   */
  onresize?: EventHandler<T, UIEvent>;
}

/**
 * SVG-specific events (for SVG elements like <animate>)
 */
export interface SVGListeners<T extends HTMLElement> {
  /**
   * Fires when an SVG animation begins, corresponding to the `begin` attribute of an `<animate>` element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/beginEvent_event)
   */
  onbegin?: EventHandler<T, Event>;
  /**
   * Fires when an SVG animation repeats, triggered by the `repeatCount` or `repeatDur` attributes.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/repeatEvent_event)
   */
  onrepeat?: EventHandler<T, Event>;
  /**
   * Fires when an SVG animation ends, corresponding to the `end` attribute of an `<animate>` element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/endEvent_event)
   */
  onend?: EventHandler<T, Event>;
}

/**
 * Popover-specific events (for elements with popover attribute)
 */
export interface PopoverListeners<T extends HTMLElement> {
  /**
   * Fires just before an element’s `popover` state toggles (e.g., before showing or hiding a popover).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)
   */
  onbeforetoggle?: EventHandler<T, Event>;
  /**
   * Fires when an element’s `popover` state toggles (e.g., showing or hiding a popover).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)
   */
  ontoggle?: EventHandler<T, Event>;
}

/**
 * Pointer capture-specific events (for elements using pointer capture)
 */
export interface PointerListeners<T extends HTMLElement> {
  /**
   * Fires when an element captures a pointer (e.g., mouse or touch) after a `setPointerCapture` call.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)
   */
  ongotpointercapture?: EventHandler<T, PointerEvent>;
  /**
   * Fires when an element loses pointer capture, such as when released via `releasePointerCapture`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)
   */
  onlostpointercapture?: EventHandler<T, PointerEvent>;
}

/**
 * Notification-specific events (for notification elements, though rare in HTML context)
 */
export interface NotificationListeners<T extends HTMLElement> {
  /**
   * Fires when a notification is displayed, typically used with the Notifications API.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event)
   */
  onshow?: EventHandler<T, Event>;
}

/**
 * Security policy violation event (for elements affected by CSP)
 */
export interface SecurityListeners<T extends HTMLElement> {
  /**
   * Fires when a Content Security Policy violation occurs, such as an attempt to load a blocked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)
   */
  onsecuritypolicyviolation?: EventHandler<T, SecurityPolicyViolationEvent>;
}