import type { StringUnion, Has } from "./Utilities";

/**
 * Extended type reference of {@link HTMLElementTagNameMap} to support unknown keys
 */
export interface HTMLTagElementMap extends HTMLElementTagNameMap { [tag: string]: HTMLElement; }

/**
 * Literal union of {@link HTMLElementTagNameMap} keys
 */
export type Selector = StringUnion<keyof HTMLElementTagNameMap>

/**
 * Suffixed tag name extraction
 */
export type Suffixed<T> = T extends `${infer Tag}${'.' | '#' | '['}${string}` ? Tag : T;

/**
 * Returns a HTML Element from {@link HTMLElementTagNameMap}
 *
 * > This will perform string operations and attempt to extract element names from
 * > selector Hyperscript expressions
 */
export type HTMLTagElement<HTMLElementName extends string> = Has<
  HTMLElementTagNameMap,
  HTMLElementName,
  HTMLTagElementMap[HTMLElementName],
  Has<
    HTMLElementTagNameMap,
    Suffixed<HTMLElementName>,
    HTMLTagElementMap[Suffixed<HTMLElementName>],
    HTMLElement
  >
>