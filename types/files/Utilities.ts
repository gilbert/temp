/**
 * Sin `attrs` generic type default
 */
export type Attrs = {};

/**
 * Prevents Inference
 */
export type NoInfer<T> = T extends infer U ? U : never;

/**
 * Returns boolean `true` is type is `null` otherwise `false`
 */
export type isNull<T> = [T] extends [null] ? true : false

/**
 * Returns boolean `true` is type is `any` otherwise `false`
 */
export type isAny<T> = 0 extends 1 & NoInfer<T> ? true : false;

/**
 * Returns boolean `true` is type is `never` otherwise `false`
 */
export type isNever<T> = [T] extends [never] ? true : false;

/**
 * Returns boolean `true` is type is `unknown` otherwise `false`
 */
export type isUnknown<T> = unknown extends T ? isNull<T> extends false ? true : false : false

/**
 * Conditional Utility for checking `unknown` Type
 */
export type ifUnknown<T, True, False> = isUnknown<T> extends true ? True : False

/**
 * Conditional Utility for checking `unknown` Type
 */
export type ifNever<T, True, False> = isNever<T> extends true ? True : False

/**
 * Conditional Utility for checking `any` Type
 */
export type ifAny<T, True, False> = isAny<T> extends true ? True : False

/**
 * Conditional Utility for checking `null` Type
 */
export type ifNull<T, True, False> = isAny<T> extends true ? True : False

/**
 * Conditional Utility for checking whether `never` or `unknown` Type
 */
export type isInferred<T, True, False> = ifUnknown<T, True, ifNever<T, True, False>>


/**
 * Useful to flatten the type output to improve type hints shown in editors.
 *
 * @example
 *
 * type A = { right: number; };
 * type B = { left: number; };
 *
 * Simple<A & B>
 */
export type Simple<T> = {[KeyType in keyof T]: T[KeyType]} & {};

/**
 * Callback type for element events
 */
export type Void = void | Promise<void> | Promise<any> | any;

/**
 * Allows literal unions to persist without sacraficing auto-complete
 *
 * @example
 *
 * StringUnion<'devils' | 'advocate'> // default to string
 */
export type StringUnion<T> = T | (string & Record<never, never>);

/**
 * Allows for union types by combining primitive types and literals
 */
export type ComponentUnion<T> = T | (any & Record<never, never>);

/**
 * Conditional check to see whether `K` exists in `T`
 */
export type Has<T, K extends string, True, False> = K extends keyof T ? True : False;

/**
 * Create a union of object values. Optionally pick certain keys.
 *
 * @example
 *
 * interface Angels {
 *   obedient: 'Gabriel' | 'Zadkiel';
 *   fallen: 'Beelzebub' | 'Leviathan'
 * }
 *
 * ValueOf<Angels> // => 'Gabriel' | 'Zadkiel' | 'Beelzebub' | 'Leviathan'
 *
 * // Optionally pick keys
 *
 * ValueOf<Angels, 'fallen'> // => 'Beelzebub' | 'Leviathan'
 */
export type ValueOf<T, K extends keyof T = keyof T> = T[K];

/**
 * Omit any index signatures from the given object type, leaving only explicitly defined properties.
 *
 * @example
 *
 * interface Sins {
 *    [name: string]: unknown;
 *    blasphemy: boolean;
 * }
 *
 * OmitSignature<Sins> // => { blasphemy: boolean; }
 */
export type OmitSignature<T> = { [K in keyof T as {} extends Record<K, unknown> ? never : K]: T[K]; };

/**
 * Pick only index signatures from the given object type, leaving out all explicitly defined properties.
 *
 * @example
 *
* interface Sins {
*    [name: string]: unknown;
*    blasphemy: boolean;
* }
*
* PickSignature<Sins> // => { [name: string]: unknown; }
*/
export type PickSignature<T> = { [K in keyof T as {} extends Record<K, unknown> ? K : never]: T[K]; };

/**
 * Transform an interface into a type to aide with assignability.
 *
 * @example
 *
 * interface Penance {
 *    given: boolean;
 *    sin: string;
 * }
 *
 * const sinner: Cast<Penance>;
 */
export type Cast<T> = {[K in keyof T]: T[K]} & {};

/**
 * Sugar assignment of `TemplateStringsArray`
 */
export interface TagLiteral extends ReadonlyArray<string> { readonly raw: readonly string[]; }

/**
 * TagLiteral Interpolation
 */
export type Interpolate = any[]
