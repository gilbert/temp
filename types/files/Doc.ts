import type { View, Children } from "./View";
import type { Live } from "./Live";
import type { Route } from "./Route";

/**
 * Sin Doc
 */
export interface Doc {
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
  headers: Live<{ [header: string]: string }>
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
