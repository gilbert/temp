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
export declare type Simple<T> = {[KeyType in keyof T]: T[KeyType]} & {};

/**
 * ### Event Void
 *
 * Callback type for element events
 */
export declare type Void = Promise<any> | any;

/**
 * ### StringUnion
 *
 * Allows literal unions to persist without sacraficing auto-complete
 *
 * @example
 *
 * StringUnion<'devils' | 'advocate'> // default to string
 */
export declare type StringUnion<T> = T | (string & Record<never, never>);

/**
 * ### ValueOf
 *
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
export declare type ValueOf<T, K extends keyof T = keyof T> = T[K];

/**
 * ### OmitSignature
 *
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
export declare type OmitSignature<T> = { [K in keyof T as {} extends Record<K, unknown> ? never : K]: T[K]; };



export declare type Spread<T extends object, A extends keyof T = keyof T> = A extends 'attrs'
  ? Omit<T, 'attrs'> & Pick<T, A>
  : T

/**
 * ### PickSignature
 *
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
export declare type PickSignature<T> = { [K in keyof T as {} extends Record<K, unknown> ? K : never]: T[K]; };

/**
 * ### Cast
 *
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
export declare type Cast<T> = {[K in keyof T]: T[K]} & {};

/**
 * ### Cast Merge
 *
 * Merges two objects without worrying about index signatures.
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
export declare type CastMerge<T, S> = { [K in keyof T as K extends keyof S ? never : K]: T[K]; } & S;

/**
 * ### Merge
 *
 * Merge two types into a new type. Keys of the second type overrides keys of the first type.
 *
 * @example
 *
 * interface Sinner { who: 'adam' | 'eve'; }
 * interface Garden { eve: string; adam: string; }
 *
 * const x: Merge<Sinner, Garden> // { who: 'adam' | 'eve', eve: string, adam: string }
 */
export declare type Merge<T, S> = Cast<
  CastMerge<PickSignature<T>, PickSignature<S>> &
  CastMerge<OmitSignature<T>, OmitSignature<S>>
>;


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
export declare type Identity<T> = T;

/**
 * ### Template Literal
 *
 * Sugar assignment of `TemplateStringsArray`
 */
export interface Literal extends ReadonlyArray<string> {
  readonly raw?: readonly string[];
}
