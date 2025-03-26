import type { SinElement, Static } from "./Components"
import { Context } from "./Context";
import { Children, View } from "./View";



/**
 * A utility class for creating static HTML elements with sin- or church-related examples.
 */
export interface Tagged {
  /**
   * Sin `<a>` (tagged shorthand)
   *
   * @example
   * s.a({ href: '/apostasy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`a`({ href: '/apostasy' }, 'Renouncing faith')
   */
  a?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLAnchorElement>
    (attrs: SinElement<HTMLAnchorElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<abbr>` (sintax shorthand)
   *
   * @example
   * s.abbr({ title: 'absolution' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`abbr`({ title: 'absolution' }, 'Forgiveness of sins')
   */
  abbr?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<acronym>` (sintax shorthand)
   *
   * @example
   * s.acronym({ title: 'atonement' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`acronym`({ title: 'atonement' }, 'Reconciliation with God')
   */
  acronym?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<address>` (sintax shorthand)
   *
   * @example
   * s.address({ class: 'blasphemy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`address`({ class: 'blasphemy' }, 'Disrespecting the divine')
   */
  address?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<area>` (sintax shorthand)
   *
   * @example
   * s.area({ href: '/baptism' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`area`({ href: '/baptism' }, 'Rite of initiation')
   */
  area?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLAreaElement>
    (attrs: SinElement<HTMLAreaElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<article>` (sintax shorthand)
   *
   * @example
   * s.article({ id: 'confession' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`article`({ id: 'confession' }, 'Admitting sins')
   */
  article?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<aside>` (sintax shorthand)
   *
   * @example
   * s.aside({ class: 'covetousness' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`aside`({ class: 'covetousness' }, 'Greedy desire')
   */
  aside?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<audio>` (sintax shorthand)
   *
   * @example
   * s.audio({ src: '/depravity.mp3' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`audio`({ src: '/depravity.mp3' }, 'Moral corruption')
   */
  audio?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLAudioElement>
    (attrs: SinElement<HTMLAudioElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a b element.
   * @example
   * s.b({ class: 'envy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`b`({ class: 'envy' }, 'Resenting blessings')
   */
  b?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a base element.
   * @example
   * s.base({ href: '/fornication' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`base`({ href: '/fornication' }, 'Sexual immorality')
   */
  base?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLBaseElement>
    (attrs: SinElement<HTMLBaseElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a bdi element.
   * @example
   * s.bdi({ id: 'gluttony' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`bdi`({ id: 'gluttony' }, 'Excessive indulgence')
   */
  bdi?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a bdo element.
   * @example
   * s.bdo({ dir: 'rtl', id: 'heresy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`bdo`({ dir: 'rtl', id: 'heresy' }, 'False doctrine')
   */
  bdo?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a big element.
   * @example
   * s.big({ class: 'iniquity' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`big`({ class: 'iniquity' }, 'Deep wickedness')
   */
  big?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a blockquote element.
   * @example
   * s.blockquote({ cite: '/jealousy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`blockquote`({ cite: '/jealousy' }, 'Envious longing')
   */
  blockquote?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLQuoteElement>
    (attrs: SinElement<HTMLQuoteElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a body element.
   * @example
   * s.body({ id: 'knavery' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`body`({ id: 'knavery' }, 'Dishonest trickery')
   */
  body?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLBodyElement>
    (attrs: SinElement<HTMLBodyElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a br element.
   * @example
   * s.br({ class: 'lust' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`br`({ class: 'lust' }, 'Uncontrolled desire')
   */
  br?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLBRElement>
    (attrs: SinElement<HTMLBRElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a button element.
   * @example
   * s.button({ onclick: 'handleMalice()' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`button`({ onclick: 'handleMalice()' }, 'Intent to harm')
   */
  button?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLButtonElement>
    (attrs: SinElement<HTMLButtonElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a canvas element.
   * @example
   * s.canvas({ id: 'neglect' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`canvas`({ id: 'neglect' }, 'Failing duties')
   */
  canvas?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLCanvasElement>
    (attrs: SinElement<HTMLCanvasElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a caption element.
   * @example
   * s.caption({ class: 'offense' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`caption`({ class: 'offense' }, 'Moral wrongdoing')
   */
  caption?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableCaptionElement>
    (attrs: SinElement<HTMLTableCaptionElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a cite element.
   * @example
   * s.cite({ title: 'pride' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`cite`({ title: 'pride' }, 'Excessive self-regard')
   */
  cite?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a code element.
   * @example
   * s.code({ class: 'quarrel' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`code`({ class: 'quarrel' }, 'Sinful strife')
   */
  code?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a col element.
   * @example
   * s.col({ span: '1', class: 'rebellion' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`col`({ span: '1', class: 'rebellion' }, 'Defying authority')
   */
  col?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableColElement>
    (attrs: SinElement<HTMLTableColElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a colgroup element.
   * @example
   * s.colgroup({ span: '2', id: 'sin' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`colgroup`({ span: '2', id: 'sin' }, 'General wrongdoing')
   */
  colgroup?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableColElement>
    (attrs: SinElement<HTMLTableColElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a data element.
   * @example
   * s.data({ value: 'transgression' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`data`({ value: 'transgression' }, 'Breaking laws')
   */
  data?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLDataElement>
    (attrs: SinElement<HTMLDataElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a datalist element.
   * @example
   * s.datalist({ id: 'unrighteousness' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`datalist`({ id: 'unrighteousness' }, 'State of injustice')
   */
  datalist?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLDataListElement>
    (attrs: SinElement<HTMLDataListElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a dd element.
   * @example
   * s.dd({ class: 'vice' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`dd`({ class: 'vice' }, 'Moral flaw')
   */
  dd?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a del element.
   * @example
   * s.del({ cite: '/wrath' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`del`({ cite: '/wrath' }, 'Uncontrolled anger')
   */
  del?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLModElement>
    (attrs: SinElement<HTMLModElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a details element.
   * @example
   * s.details({ id: 'x-rated' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`details`({ id: 'x-rated' }, 'Explicit immorality')
   */
  details?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLDetailsElement>
    (attrs: SinElement<HTMLDetailsElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a dfn element.
   * @example
   * s.dfn({ title: 'yearning' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`dfn`({ title: 'yearning' }, 'Sinful longing')
   */
  dfn?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a dialog element.
   * @example
   * s.dialog({ id: 'zealotry' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`dialog`({ id: 'zealotry' }, 'Excessive zeal')
   */
  dialog?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLDialogElement>
    (attrs: SinElement<HTMLDialogElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a div element.
   * @example
   * s.div({ id: 'penance' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`div`({ id: 'penance' }, 'Acts of repentance')
   */
  div?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLDivElement>
    (attrs: SinElement<HTMLDivElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a dl element.
   * @example
   * s.dl({ class: 'grace' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`dl`({ class: 'grace' }, 'Divine favor')
   */
  dl?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLDListElement>
    (attrs: SinElement<HTMLDListElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a dt element.
   * @example
   * s.dt({ id: 'salvation' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`dt`({ id: 'salvation' }, 'Deliverance from sin')
   */
  dt?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<em>` (sintax shorthand)
   *
   * @example
   * s.em({ class: 'sacrament' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`em`({ class: 'sacrament' }, 'Sacred rite')
   */
  em?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<embed>` (sintax shorthand)
   *
   * @example
   * s.embed({ src: '/repentance' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`embed`({ src: '/repentance' }, 'Turning from sin')
   */
  embed?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLEmbedElement>
    (attrs: SinElement<HTMLEmbedElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a fieldset element.
   * @example
   * s.fieldset({ id: 'eucharist' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`fieldset`({ id: 'eucharist' }, 'Holy communion')
   */
  fieldset?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLFieldSetElement>
    (attrs: SinElement<HTMLFieldSetElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a figcaption element.
   * @example
   * s.figcaption({ class: 'liturgy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`figcaption`({ class: 'liturgy' }, 'Worship ritual')
   */
  figcaption?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a figure element.
   * @example
   * s.figure({ id: 'sanctuary' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`figure`({ id: 'sanctuary' }, 'Sacred space')
   */
  figure?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a footer element.
   * @example
   * s.footer({ class: 'benediction' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`footer`({ class: 'benediction' }, 'Closing blessing')
   */
  footer?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a form element.
   * @example
   * s.form({ action: '/hymnody' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`form`({ action: '/hymnody' }, 'Singing hymns')
   */
  form?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLFormElement>
    (attrs: SinElement<HTMLFormElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<h1>` (sintax shorthand)
   *
   * @example
   * s.h1({ id: 'vestments' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`h1`({ id: 'vestments' }, 'Clergy garments')
   */
  h1?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadingElement>
    (attrs: SinElement<HTMLHeadingElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<h2>` (sintax shorthand)
   *
   * @example
   * s.h2({ class: 'catechism' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`h2`({ class: 'catechism' }, 'Doctrine teaching')
   */
  h2?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadingElement>
    (attrs: SinElement<HTMLHeadingElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<h3>` (sintax shorthand)
   *
   * @example
   * s.h3({ id: 'intercession' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`h3`({ id: 'intercession' }, 'Praying for others')
   */
  h3?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadingElement>
    (attrs: SinElement<HTMLHeadingElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<h4>` (sintax shorthand)
   *
   * @example
   * s.h4({ class: 'chalice' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`h4`({ class: 'chalice' }, 'Communion cup')
   */
  h4?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadingElement>
    (attrs: SinElement<HTMLHeadingElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<h5>` (sintax shorthand)
   *
   * @example
   * s.h5({ id: 'pulpit' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`h5`({ id: 'pulpit' }, 'Preaching platform')
   */
  h5?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadingElement>
    (attrs: SinElement<HTMLHeadingElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<h6>` (sintax shorthand)
   *
   * @example
   * s.h6({ class: 'tithe' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`h6`({ class: 'tithe' }, 'Tenth offering')
   */
  h6?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadingElement>
    (attrs: SinElement<HTMLHeadingElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a head element.
   * @example
   * s.head({ id: 'redemption' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`head`({ id: 'redemption' }, 'Deliverance from sin')
   */
  head?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHeadElement>
    (attrs: SinElement<HTMLHeadElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a header element.
   * @example
   * s.header({ class: 'purgation' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`header`({ class: 'purgation' }, 'Cleansing from sin')
   */
  header?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<hr>` (sintax shorthand)
   *
   * @example
   * s.hr({ class: 'mortal-sin' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`hr`({ class: 'mortal-sin' }, 'Grave offense')
   */
  hr?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHRElement>
    (attrs: SinElement<HTMLHRElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<html>` (sintax shorthand)
   *
   * @example
   * s.html({ lang: 'en', id: 'venial-sin' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`html`({ lang: 'en', id: 'venial-sin' }, 'Lesser sin')
   */
  html?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLHtmlElement>
    (attrs: SinElement<HTMLHtmlElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<i>` (sintax shorthand)
   *
   * @example
   * s.i({ class: 'temptation' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`i`({ class: 'temptation' }, 'Urge to sin')
   */
  i?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<iframe>` (sintax shorthand)
   *
   * @example
   * s.iframe({ src: '/concupiscence' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`iframe`({ src: '/concupiscence' }, 'Sinful desire')
   */
  iframe?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLIFrameElement>
    (attrs: SinElement<HTMLIFrameElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<img>` (sintax shorthand)
   *
   * @example
   * s.img({ src: '/original-sin.jpg' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`img`({ src: '/original-sin.jpg' }, 'Inherited sinfulness')
   */
  img?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLImageElement>
    (attrs: SinElement<HTMLImageElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<ins>` (sintax shorthand)
   *
   * @example
   * s.ins({ cite: '/fallen' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`ins`({ cite: '/fallen' }, 'Post-sin state')
   */
  ins?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLModElement>
    (attrs: SinElement<HTMLModElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a kbd element.
   * @example
   * s.kbd({ class: 'guilt' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`kbd`({ class: 'guilt' }, 'Remorse for sin')
   */
  kbd?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a label element.
   * @example
   * s.label({ for: 'wickedness' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`label`({ for: 'wickedness' }, 'Evil conduct')
   */
  label?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLLabelElement>
    (attrs: SinElement<HTMLLabelElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a legend element.
   * @example
   * s.legend({ class: 'mercy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`legend`({ class: 'mercy' }, 'Divine compassion')
   */
  legend?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLLegendElement>
    (attrs: SinElement<HTMLLegendElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a li element.
   * @example
   * s.li({ class: 'faith' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`li`({ class: 'faith' }, 'Trust in God')
   */
  li?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLLIElement>
    (attrs: SinElement<HTMLLIElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a link element.
   * @example
   * s.link({ href: '/holiness.css' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`link`({ href: '/holiness.css' }, 'Divine purity')
   */
  link?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLLinkElement>
    (attrs: SinElement<HTMLLinkElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a main element.
   * @example
   * s.main({ id: 'judgment' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`main`({ id: 'judgment' }, 'Divine reckoning')
   */
  main?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a map element.
   * @example
   * s.map({ name: 'prayer' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`map`({ name: 'prayer' }, 'Speaking to God')
   */
  map?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLMapElement>
    (attrs: SinElement<HTMLMapElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a mark element.
   * @example
   * s.mark({ class: 'damnation' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`mark`({ class: 'damnation' }, 'Eternal punishment')
   */
  mark?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a meta element.
   * @example
   * s.meta({ name: 'redemption', content: 'salvation' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`meta`({ name: 'redemption', content: 'salvation' }, 'Sin deliverance')
   */
  meta?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLMetaElement>
    (attrs: SinElement<HTMLMetaElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a meter element.
   * @example
   * s.meter({ value: '0.5', id: 'penitent' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`meter`({ value: '0.5', id: 'penitent' }, 'Repentant state')
   */
  meter?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLMeterElement>
    (attrs: SinElement<HTMLMeterElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a nav element.
   * @example
   * s.nav({ class: 'divinity' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`nav`({ class: 'divinity' }, 'Godly nature')
   */
  nav?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a noscript element.
   * @example
   * s.noscript({ id: 'scripture' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`noscript`({ id: 'scripture' }, 'Holy writings')
   */
  noscript?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<object>` (sintax shorthand)
   *
   * @example
   * s.object({ data: '/sermon.pdf' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`object`({ data: '/sermon.pdf' }, 'Preached message')
   */
  object?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLObjectElement>
    (attrs: SinElement<HTMLObjectElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<ol>` (sintax shorthand)
   *
   * @example
   * s.ol({ id: 'parable' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`ol`({ id: 'parable' }, 'Moral story')
   */
  ol?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLOListElement>
    (attrs: SinElement<HTMLOListElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<optgroup>` (sintax shorthand)
   *
   * @example
   * s.optgroup({ label: 'virtue' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`optgroup`({ label: 'virtue' }, 'Moral excellence')
   */
  optgroup?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLOptGroupElement>
    (attrs: SinElement<HTMLOptGroupElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<option>` (sintax shorthand)
   *
   * @example
   * s.option({ value: 'charity' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`option`({ value: 'charity' }, 'Love and giving')
   */
  option?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLOptionElement>
    (attrs: SinElement<HTMLOptionElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<output>` (sintax shorthand)
   *
   * @example
   * s.output({ for: 'hope' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`output`({ for: 'hope' }, 'Faithful expectation')
   */
  output?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLOutputElement>
    (attrs: SinElement<HTMLOutputElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a p element.
   * @example
   * s.p({ id: 'peace' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`p`({ id: 'peace' }, 'Divine calm')
   */
  p?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLParagraphElement>
    (attrs: SinElement<HTMLParagraphElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a param element.
   * @example
   * s.param({ name: 'eternity', value: 'forever' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`param`({ name: 'eternity', value: 'forever' }, 'Endless time')
   */
  param?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLParamElement>
    (attrs: SinElement<HTMLParamElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a picture element.
   * @example
   * s.picture({ id: 'heaven' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`picture`({ id: 'heaven' }, 'Divine realm')
   */
  picture?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLPictureElement>
    (attrs: SinElement<HTMLPictureElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a pre element.
   * @example
   * s.pre({ class: 'hell' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`pre`({ class: 'hell' }, 'Place of torment')
   */
  pre?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLPreElement>
    (attrs: SinElement<HTMLPreElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a progress element.
   * @example
   * s.progress({ value: '0.7', id: 'sanctity' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`progress`({ value: '0.7', id: 'sanctity' }, 'Holiness progress')
   */
  progress?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLProgressElement>
    (attrs: SinElement<HTMLProgressElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a q element.
   * @example
   * s.q({ cite: '/gospel' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`q`({ cite: '/gospel' }, 'Good news')
   */
  q?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLQuoteElement>
    (attrs: SinElement<HTMLQuoteElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<rp>` (sintax shorthand)
   *
   * @example
   * s.rp({ class: 'disciple' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`rp`({ class: 'disciple' }, 'Follower of faith')
   */
  rp?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<rt>` (sintax shorthand)
   *
   * @example
   * s.rt({ class: 'prophet' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`rt`({ class: 'prophet' }, 'Divine messenger')
   */
  rt?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a ruby element.
   * @example
   * s.ruby({ id: 'messiah' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`ruby`({ id: 'messiah' }, 'Anointed one')
   */
  ruby?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<s>` (sintax shorthand)
   *
   * @example
   * s.s({ class: 'apocalypse' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`s`({ class: 'apocalypse' }, 'End times')
   */
  s?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a samp element.
   * @example
   * s.samp({ id: 'revelation' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`samp`({ id: 'revelation' }, 'Divine disclosure')
   */
  samp?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a script element.
   * @example
   * s.script({ src: '/miracle.js' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`script`({ src: '/miracle.js' }, 'Divine act')
   */
  script?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLScriptElement>
    (attrs: SinElement<HTMLScriptElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a section element.
   * @example
   * s.section({ id: 'trinity' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`section`({ id: 'trinity' }, 'Three in one')
   */
  section?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a select element.
   * @example
   * s.select({ name: 'creed' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`select`({ name: 'creed' }, 'Statement of belief')
   */
  select?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLSelectElement>
    (attrs: SinElement<HTMLSelectElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a small element.
   * @example
   * s.small({ class: 'altar' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`small`({ class: 'altar' }, 'Sacred table')
   */
  small?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a source element.
   * @example
   * s.source({ src: '/psalm.mp3' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`source`({ src: '/psalm.mp3' }, 'Sacred song')
   */
  source?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLSourceElement>
    (attrs: SinElement<HTMLSourceElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a span element.
   * @example
   * s.span({ id: 'deacon' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`span`({ id: 'deacon' }, 'Church servant')
   */
  span?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLSpanElement>
    (attrs: SinElement<HTMLSpanElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a strong element.
   * @example
   * s.strong({ class: 'bishop' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`strong`({ class: 'bishop' }, 'Church overseer')
   */
  strong?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a style element.
   * @example
   * s.style({ type: 'text/css', id: 'clergy' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`style`({ type: 'text/css', id: 'clergy' }, 'Religious leaders')
   */
  style?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLStyleElement>
    (attrs: SinElement<HTMLStyleElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a sub element.
   * @example
   * s.sub({ class: 'monk' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`sub`({ class: 'monk' }, 'Devoted ascetic')
   */
  sub?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a summary element.
   * @example
   * s.summary({ id: 'nun' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`summary`({ id: 'nun' }, 'Consecrated woman')
   */
  summary?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a sup element.
   * @example
   * s.sup({ class: 'priest' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`sup`({ class: 'priest' }, 'Sacred minister')
   */
  sup?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a table element.
   * @example
   * s.table({ id: 'abbey' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`table`({ id: 'abbey' }, 'Monastic house')
   */
  table?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableElement>
    (attrs: SinElement<HTMLTableElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a tbody element.
   * @example
   * s.tbody({ class: 'monastery' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`tbody`({ class: 'monastery' }, 'Religious community')
   */
  tbody?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableSectionElement>
    (attrs: SinElement<HTMLTableSectionElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a td element.
   * @example
   * s.td({ id: 'cathedral' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`td`({ id: 'cathedral' }, 'Bishop’s church')
   */
  td?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableCellElement>
    (attrs: SinElement<HTMLTableCellElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a template element.
   * @example
   * s.template({ id: 'chapel' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`template`({ id: 'chapel' }, 'Small sanctuary')
   */
  template?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTemplateElement>
    (attrs: SinElement<HTMLTemplateElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a textarea element.
   * @example
   * s.textarea({ name: 'shrine' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`textarea`({ name: 'shrine' }, 'Holy site')
   */
  textarea?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTextAreaElement>
    (attrs: SinElement<HTMLTextAreaElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a tfoot element.
   * @example
   * s.tfoot({ class: 'temple' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`tfoot`({ class: 'temple' }, 'Worship place')
   */
  tfoot?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableSectionElement>
    (attrs: SinElement<HTMLTableSectionElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a th element.
   * @example
   * s.th({ id: 'convent' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`th`({ id: 'convent' }, 'Nuns’ residence')
   */
  th?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableCellElement>
    (attrs: SinElement<HTMLTableCellElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a thead element.
   * @example
   * s.thead({ class: 'basilica' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`thead`({ class: 'basilica' }, 'Honored church')
   */
  thead?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableSectionElement>
    (attrs: SinElement<HTMLTableSectionElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a time element.
   * @example
   * s.time({ datetime: '2025-03-26', id: 'vigil' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`time`({ datetime: '2025-03-26', id: 'vigil' }, 'Watchful prayer')
   */
  time?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTimeElement>
    (attrs: SinElement<HTMLTimeElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a title element.
   * @example
   * s.title({ id: 'rite' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`title`({ id: 'rite' }, 'Ceremonial act')
   */
  title?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTitleElement>
    (attrs: SinElement<HTMLTitleElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a tr element.
   * @example
   * s.tr({ class: 'litany' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`tr`({ class: 'litany' }, 'Prayer series')
   */
  tr?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTableRowElement>
    (attrs: SinElement<HTMLTableRowElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a track element.
   * @example
   * s.track({ src: '/canticle.vtt' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`track`({ src: '/canticle.vtt' }, 'Sacred hymn')
   */
  track?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLTrackElement>
    (attrs: SinElement<HTMLTrackElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a u element.
   * @example
   * s.u({ class: 'saint' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`u`({ class: 'saint' }, 'Holy person')
   */
  u?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Sin `<ul>` (sintax shorthand)
   *
   * @example
   * s.ul({ id: 'martyr' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`ul`({ id: 'martyr' }, 'Faithful witness')
   */
  ul?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLUListElement>
    (attrs: SinElement<HTMLUListElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a var element.
   *
   * @example
   * s.var({ class: 'pilgrim' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`var`({ class: 'pilgrim' }, 'Spiritual traveler')
   */
  var?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a video element.
   *
   * @example
   * s.video({ src: '/relic.mp4' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`video`({ src: '/relic.mp4' }, 'Sacred remnant')
   */
  video?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLVideoElement>
    (attrs: SinElement<HTMLVideoElement>, children?: Children, context?: Context): View
  }

  /**
   * Creates a wbr element.
   *
   * @example
   * s.wbr({ class: 'icon' }, 'Shorthand')
   *
   * // Equivalent to the literal syntax
   * s`wbr`({ class: 'icon' }, 'Holy image')
   */
  wbr?: {
    (strings: TemplateStringsArray, ...style: any[]): Static<HTMLElement>; }
    (attrs: SinElement<HTMLElement>, children?: Children, context?: Context): View
  }
