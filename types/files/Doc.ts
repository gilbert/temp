import type { Live } from "./Live";
import type { Children, View } from "./View";

/**
 * Sin Doc
 */
export type Doc = {
  /**
   * Set the documents `<html lang="">` value
   *
   * @example
   *
   * s.lang('en');
   */
  lang: Live<string>
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
  head: (children: Children) => View;
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
  title: Live<string>
  /**
   * Sets the HTTP Response headers.
   *
   * @example
   *
   * s.headers({
   *  'x-request-with': 'sin'
   * })
   */
  headers: Live<Record<string, string>>
  /**
   * Sets the HTTP Response status code
   *
   * @default 200;
   *
   * @example
   *
   * s.status(301);
   */
  status: Live<number>
}
