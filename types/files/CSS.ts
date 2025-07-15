import type { TagLiteral as CSSLiteral, Interpolate } from "./Utilities";
import type { Tag, View } from "./View";


// CSS Vars type value exposed on `tag.vars`
export type Vars = {
  /**
   * The CSS property name.
   *
   * > Will represent either the shorthand or native naming
   */
  property: string;
  /**
   * The CSS applied unit (defaults to `px`)
   *
   * > If property name does not expect a numeric value this will be empty string
   *
   * @default ''
   */
  unit: string;
  /**
   * The 0-based index occurence within the tagged literal expression
   */
  index: number;
  /**
   * Flags opacity transformation for CSS vars, which defaults to `false`.
   * Value will be a function if an opacity modifier (e.g, `/50`) is detected.
   *
   * @default false
   */
  transform: false | ((x: number | string) => string);
  /**
   * Array of CSS function names (e.g, `['calc','translateY']` etc) that are
   * applied to the CSS variable value, sliced from the parsing stack.
   *
   * @default []
   */
  fns: string[];
  /**
   *  Arbitrary signature for dynamic CSS Variables `--vars`
   */
  [key: `--${string}`]: any;
}

export type CSS = {
  /**
   * CSS Style Sheet - Write classes and define cascade specifics.
   *
   * @example
   * // 𓋹 Blessed be the vain and holy aesthetic
   *
   * s.css`
   *  .dark {
   *    color hotpink
   *    background black
   *  }
   * `
   */
  (css: CSSLiteral, ...interpolate: Interpolate): () => View;
  (css: string): () => View;
  /**
   * Sets aliases for CSS media queries, feature supports or anything that is blocked scoped.
   *
   * @example
   * // 𓋹 Decree the bounds and etch the queries
   *
   * s.css.alias({
   *  mobile: '@media (max-width: 767px)',
   *  tablet: '@media (max-width: 1200px)'
   * });
   *
   */
  alias: {
    (id: string, as: string): string;
    (alias: Record<string, string>): string;
  }
  /**
   * Applies global CSS Resets and/or overwrites.
   *
   * > **PLEASE NOTE**
   * >
   * > Sin will apply a subset of normalisation resets
   * > and merge with the provided cascades.
   *
   * @example
   * // 𓋹 The sinners hand wipes clean the slate
   *
   * s.css.reset`
   *  body {
   *   ff Arial
   *   fs 15
   *  }
   * `
   */
  reset: {
    (css: CSSLiteral, ...interpolate: Interpolate): void
    (css: string): void
  }
  /**
   * CSS custom unit control
   *
   * @example
   *
   * // Option 1 - key > value
   * s.css.unit('n', (value, property) => (x * .25) + 'rem' )
   *
   * // Option 2 - as object
   * s.css.unit({ n: (value, property) => (x * .25) + 'rem' })
   */
  unit: {
    (id: string, fn: (value: string, property: string) => string): void;
    (units: Record<string, (value: string, property: string) => string>): void;
  }
}
