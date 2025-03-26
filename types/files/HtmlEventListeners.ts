import type { Context } from "./Context";
import type { Children } from "./View";
import type { Merge, Void } from "./Utilities";

export type Target<T, E> = E & {
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
}

type Params<Event, DOM, Attrs> =
  | []
  | [ event: Target<DOM, Event> ]
  | [ event: Target<DOM, Event>, dom: DOM]
  | [ event: Target<DOM, Event>, dom: DOM, attrs: Attrs]
  | [ event: Target<DOM, Event>, dom: DOM, attrs: Attrs, children: Children<DOM> ]
  | [ event: Target<DOM, Event>, dom: DOM, attrs: Attrs, children: Children<DOM>, context: Context]

/**
 * Universal events that apply to all HTML elements
 */
export interface Listener<T extends HTMLElement = HTMLElement> {
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
  onauxclick?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the object loses the input focus, such as when the user tabs away or clicks elsewhere.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
   */
  onblur?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires when the user clicks the left mouse button on the object, triggering a standard click action.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
   */
  onclick?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
   */
  oncontextmenu?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the user double-clicks the object with the primary mouse button.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
   */
  ondblclick?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
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
  onfocus?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires when an element or one of its descendants receives focus, bubbling up through the DOM.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusin_event)
   */
  onfocusin?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires when an element or one of its descendants loses focus, bubbling up through the DOM.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusout_event)
   */
  onfocusout?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires when the user presses a key on the keyboard, including modifier keys.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
   */
  onkeydown?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires when the user presses an alphanumeric key. This event is deprecated; use `onkeydown` or `oninput` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
   */
  onkeypress?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires when the user releases a key on the keyboard.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
   */
  onkeyup?: <Attrs = {}>(this: T, ...attrs: Params<FocusEvent, T, Attrs>) => Void
  /**
   * Fires immediately after the browser fully loads an object, such as an image, script, or SVG element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
   */
  onload?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when the user presses a mouse button down over the object, initiating a click or drag.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
   */
  onmousedown?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the mouse pointer enters an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)
   */
  onmouseenter?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the mouse pointer leaves an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)
   */
  onmouseleave?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires continuously when the user moves the mouse pointer over the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
   */
  onmousemove?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the mouse pointer moves outside the boundaries of the object or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
   */
  onmouseout?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the mouse pointer moves into the object or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
   */
  onmouseover?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the user releases a mouse button while the pointer is over the object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
   */
  onmouseup?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when the mouse wheel is rotated. This event is deprecated; use `onwheel` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousewheel_event)
   */
  onmousewheel?: <Attrs = {}>(this: T, ...attrs: Params<MouseEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer interaction (e.g., touch or pen) is interrupted, such as lifting a finger unexpectedly.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)
   */
  onpointercancel?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer (e.g., mouse, touch, or pen) is pressed down on an element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)
   */
  onpointerdown?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer enters an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)
   */
  onpointerenter?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer leaves an element’s boundaries, without bubbling to ancestors.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)
   */
  onpointerleave?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires continuously when a pointer moves over an element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)
   */
  onpointermove?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer moves out of an element or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)
   */
  onpointerout?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer moves into an element or one of its descendants.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)
   */
  onpointerover?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when a pointer is released over an element, such as lifting a finger or mouse button.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)
   */
  onpointerup?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when the user repositions the scroll box in a scrollable element, indicating scrolling activity.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
   */
  onscroll?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when scrolling has stopped in a scrollable element, after the user finishes scrolling.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)
   */
  onscrollend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when a touch interaction is interrupted, such as lifting a finger unexpectedly during a gesture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)
   */
  ontouchcancel?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void
  /**
   * Fires when a touch point is removed from an element, such as lifting a finger from the screen.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)
   */
  ontouchend?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void
  /**
   * Fires continuously when a touch point moves over an element during a touch gesture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)
   */
  ontouchmove?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void
  /**
   * Fires when a touch point contacts an element, initiating a touch gesture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)
   */
  ontouchstart?: <Attrs = {}>(this: T, ...attrs: Params<TouchEvent, T, Attrs>) => Void
  /**
   * Fires when the window is about to be unloaded, such as when the user closes the tab or navigates away.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)
   */
  onunload?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when the mouse wheel or trackpad is scrolled over an element, providing delta values for scroll direction.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)
   */
  onwheel?: <Attrs = {}>(this: T, ...attrs: Params<WheelEvent, T, Attrs>) => Void
}

/**
 * Media-specific events (for <audio>, <video>)
 */
export interface MediaListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Occurs when playback is possible for a media element, but further buffering may be required to continue without interruption.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
   */
  oncanplay?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when a media element can play through to the end without requiring additional buffering.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)
   */
  oncanplaythrough?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when the duration attribute of a media element is updated, reflecting a change in media length.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
   */
  ondurationchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when a media element is reset to its initial state, typically after its source is cleared.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
   */
  onemptied?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when playback of a media element reaches its end.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
   */
  onended?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when media data is loaded at the current playback position of a media element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
   */
  onloadeddata?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when the duration and dimensions of a media element have been determined during loading.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
   */
  onloadedmetadata?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when the browser begins looking for media data, marking the start of the loading process.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
   */
  onloadstart?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when playback of a media element is paused, either by the user or programmatically.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
   */
  onpause?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when playback of a media element is requested via the `play()` method, before it actually starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
   */
  onplay?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when a media element has started playing, after buffering and any delays.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
   */
  onplaying?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
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
  onratechange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when a seek operation on a media element completes, positioning playback at the new time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
   */
  onseeked?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when a seek operation begins on a media element, moving the playback position.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
   */
  onseeking?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when media download stalls due to insufficient data or network issues.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
   */
  onstalled?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when media loading is intentionally suspended, such as when the browser pauses a download.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
   */
  onsuspend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs periodically to report the current playback position of a media element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
   */
  ontimeupdate?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when the volume of a media element changes, including muting or unmuting.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
   */
  onvolumechange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Occurs when playback stops because the next frame of a media resource is unavailable, requiring buffering.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
   */
  onwaiting?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Form-specific events (for <form>, <input>, <select>, <textarea>)
 */
export interface FormListeners<T extends HTMLElement = HTMLElement> {
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
  onchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
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
  oninput?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when an input element’s value fails validation constraints upon form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)
   */
  oninvalid?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
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
  onreset?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when the current text selection changes within an input or textarea element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
   */
  onselect?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when the document’s text selection changes, such as selecting or deselecting text.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)
   */
  onselectionchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when the user begins selecting text or content within an element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)
   */
  onselectstart?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
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
export interface DragListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires on the source object continuously during a drag operation while the user moves the dragged item.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
   */
  ondrag?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
  /**
   * Fires on the source object when the user releases the mouse at the end of a drag operation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
   */
  ondragend?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
  /**
   * Fires on the target element when the user drags an object into a valid drop target.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
   */
  ondragenter?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
  /**
   * Fires on the target object when the user moves the dragged item out of a valid drop target during a drag operation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
   */
  ondragleave?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
  /**
   * Fires on the target element continuously while the user drags an object over a valid drop target.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
   */
  ondragover?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
  /**
   * Fires on the source object when the user starts dragging a text selection or selected object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
   */
  ondragstart?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
  /**
   * Fires on the target element when the user drops a dragged object onto a valid drop target.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)
   */
  ondrop?: <Attrs = {}>(this: T, ...attrs: Params<DragEvent, T, Attrs>) => Void
}

/**
 * Animation and transition events (for styled elements)
 */
export interface AnimationListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when an animation is aborted unexpectedly, such as when the element is removed from the DOM before completion.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)
   */
  onanimationcancel?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS animation completes successfully, after all iterations have finished.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
   */
  onanimationend?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS animation completes a single iteration, but only if the animation has multiple iterations.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
   */
  onanimationiteration?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS animation begins, after any delay specified in the animation has elapsed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
   */
  onanimationstart?: <Attrs = {}>(this: T, ...attrs: Params<AnimationEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS transition is cancelled before completion, such as when a property is removed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)
   */
  ontransitioncancel?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS transition completes successfully, after reaching its end state.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
   */
  ontransitionend?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS transition is first scheduled to run, before it actually starts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)
   */
  ontransitionrun?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void
  /**
   * Fires when a CSS transition begins, after any delay has elapsed.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)
   */
  ontransitionstart?: <Attrs = {}>(this: T, ...attrs: Params<TransitionEvent, T, Attrs>) => Void
  /**
   * This is a legacy Webkit-specific alias of `onanimationend`. It is deprecated; use `onanimationend` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
   */
  onwebkitanimationend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * This is a legacy Webkit-specific alias of `onanimationiteration`. It is deprecated; use `onanimationiteration` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
   */
  onwebkitanimationiteration?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * This is a legacy Webkit-specific alias of `onanimationstart`. It is deprecated; use `onanimationstart` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
   */
  onwebkitanimationstart?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * This is a legacy Webkit-specific alias of `ontransitionend`. It is deprecated; use `ontransitionend` instead.
   *
   * @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
   */
  onwebkittransitionend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Canvas-specific events
 */
export interface CanvasListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when a WebGL context is lost, typically due to hardware or driver issues, requiring reinitialization.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
   */
  oncontextlost?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when a lost WebGL context is restored, allowing rendering to resume on a `<canvas>` element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)
   */
  oncontextrestored?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Dialog-specific events
 */
export interface DialogListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when a dialog or similar cancellable action is aborted by the user, such as pressing Esc in a `<dialog>`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event)
   */
  oncancel?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when a `<dialog>` element is closed, either by the user or programmatically.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)
   */
  onclose?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Details-specific events
 */
export interface DetailsListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when a `<details>` element’s open state toggles, either opening or closing the details.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)
   */
  ontoggle?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Slot-specific events
 */
export interface SlotListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when the content assigned to a `<slot>` element in a shadow DOM changes.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)
   */
  onslotchange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Track-specific events
 */
export interface TrackListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when a text track cue changes, such as in a `<track>` element for subtitles or captions.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)
   */
  oncuechange?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Video-specific events (extends MediaListeners)
 */
export interface VideoListeners<T extends HTMLElement = HTMLElement> extends MediaListeners<T> {
  /**
   * Fires when a video element’s intrinsic size changes, such as when new metadata is loaded.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)
   */
  onresize?: <Attrs = {}>(
    this: T,
  ...attrs: Params<UIEvent, T, Attrs>
  ) => Void;
}

/**
 * SVG-specific events (for SVG elements like <animate>)
 */
export interface SVGListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when an SVG animation begins, corresponding to the `begin` attribute of an `<animate>` element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/beginEvent_event)
   */
  onbegin?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when an SVG animation repeats, triggered by the `repeatCount` or `repeatDur` attributes.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/repeatEvent_event)
   */
  onrepeat?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when an SVG animation ends, corresponding to the `end` attribute of an `<animate>` element.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/endEvent_event)
   */
  onend?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Popover-specific events (for elements with popover attribute)
 */
export interface PopoverListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires just before an element’s `popover` state toggles (e.g., before showing or hiding a popover).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)
   */
  onbeforetoggle?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
  /**
   * Fires when an element’s `popover` state toggles (e.g., showing or hiding a popover).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)
   */
  ontoggle?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Pointer capture-specific events (for elements using pointer capture)
 */
export interface PointerListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when an element captures a pointer (e.g., mouse or touch) after a `setPointerCapture` call.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)
   */
  ongotpointercapture?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
  /**
   * Fires when an element loses pointer capture, such as when released via `releasePointerCapture`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)
   */
  onlostpointercapture?: <Attrs = {}>(this: T, ...attrs: Params<PointerEvent, T, Attrs>) => Void
}

/**
 * Notification-specific events (for notification elements, though rare in HTML context)
 */
export interface NotificationListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when a notification is displayed, typically used with the Notifications API.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event)
   */
  onshow?: <Attrs = {}>(this: T, ...attrs: Params<Event, T, Attrs>) => Void
}

/**
 * Security policy violation event (for elements affected by CSP)
 */
export interface SecurityListeners<T extends HTMLElement = HTMLElement> {
  /**
   * Fires when a Content Security Policy violation occurs, such as an attempt to load a blocked resource.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)
   */
  onsecuritypolicyviolation?: <Attrs = {}>(
    this: T,
    event?: SecurityPolicyViolationEvent,
    dom?: T,
    attrs?: Attrs,
    children?: Children<T>,
    context?: Context
  ) => Void;
}