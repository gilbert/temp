import s from 'sin'

/* -------------------------------------------- */
/* LITERAL ELEMENTS                             */
/* -------------------------------------------- */

// Testing all possible vnode element expressions
// Ensures that primitives can pass without complaints

s`div`
s`div`('')
s`div`(null)
s`div`(1000)
s`ul`(s`li`('one'), s`li`('two'))
s`ul`([ s`li`('one'), s`li`('two') ])
s`h1`(['string'])
s`h1`('string', ['string'])

// Narrowing is not possible with literal elements
// All possible HTML Attributes will be passed

s`a`({ href: '' }, 'link')
s`a`({ href: '' }, s`span`('link'))

// Notice we can pass href despite the element being <div>

s`div`({ href: '' })

// Attribute primitives explicitly

s`section`({ id: 'foo', name: 'bar' })
s``({ ariaLabel: 'aria-example' })

// Full element expressions of both attributes + children

s``({ id: 'test' }, 'hello world')


// Generic HTMLElements can be passed for narrowing
// The generic of HTMLDivElement will not expose href
// whereas HTMLLinkElement will expose href

s<HTMLLinkElement>`a`({ href: '' })
s<HTMLDivElement>`div`({ href: '' }) // <- FAILS

/* -------------------------------------------- */
/* HYPERSCRIPT ELEMENTS                         */
/* -------------------------------------------- */

// Testing HyperScript syntactical expressions
// Name completions will be provided here

s('div', '')
s('section', ['example'])

// Narrowing is possible with hyperscript syntacticals
// We will not get href as an option on the span vnode

s('a', { href: '' })
s('span', { href: '' }) //       <- FAILS

// HyperScript tag name mutation expression should succeed
// <a> element will persist even with class names

s('a.foo.bar', { href: '' }) //   <- PASS
s('a#id', { href: '' }) //        <- PASS


/* -------------------------------------------- */
/* SIN ATTRIBUTES                               */
/* -------------------------------------------- */

// Lets ensure that elements get sin specific attributes
// Hover descriptions will apply if type is valid

s``({
  key: '',
  deferrable: false,
  dom: (element, attributes, children, context) => {
    element          // -> HTMLElement
    attributes       // -> All Attributes
    children?.[0]    // -> Array of children
    context          // -> Context object
  }
})

// The { dom } property attribute accepts an array

s``({
  dom: [
    (element, attributes, children, context) => {
      element          // -> HTMLElement
      attributes       // -> All Attributes
      children?.[0]    // -> Array of children
      context          // -> Context object
    },
    (element, attributes, children, context) => {
      element          // -> HTMLElement
      attributes       // -> All Attributes
      children?.[0]    // -> Array of children
      context          // -> Context object
    },
    (element, attributes, children, context) => {
      element          // -> HTMLElement
      attributes       // -> All Attributes
      children?.[0]    // -> Array of children
      context          // -> Context object
    }
  ]
})

/* -------------------------------------------- */
/* SIN TRUST                                    */
/* -------------------------------------------- */

// Sin trust can be a literal or function

s.trust`<div></div>`
s.trust('<div></div>')

/* -------------------------------------------- */
/* SIN ROUTE                                    */
/* -------------------------------------------- */

// The route method has a multitude of methods we
// will ensure they are all covered here. We will
// also check s.route.root alias to ensure identicals
// also check s.route.parent alias to ensure identicals

s.route('')
s.route.root('')
s.route.parent.root('')
s.route.has('')
s.route.root.has('')
s.route.parent.has('')

// Route assignments and values

s.route.prefix = '#!'
s.route.prefix = ''
s.route.path
s.route.root.prefix = '!#'
s.route.root.prefix = ''
s.route.root.path
s.route.parent.prefix = '!#'
s.route.parent.prefix = ''
s.route.parent.path

// Route Query specifics

s.route.query.clear()
s.route.query.get('')
s.route.root.query.clear()
s.route.root.query.get('')
s.route.parent.query.clear()
s.route.parent.query.get('')

// Route query replace accepts a string or key > value

s.route.query.replace('')
s.route.query.replace({})
s.route.root.query.replace('')
s.route.root.query.replace({})
s.route.parent.query.replace('')
s.route.parent.query.replace({})

// Route query set accepts different primitive values

s.route.query.set('', '')
s.route.query.set('', 100)
s.route.query.set('', false)
s.route.root.query.set('', '')
s.route.root.query.set('', 100)
s.route.root.query.set('', false)
s.route.parent.query.set('', 100)
s.route.parent.query.set('', false)


/* -------------------------------------------- */
/* SIN HTTP                                     */
/* -------------------------------------------- */

// We can pass url as first argument or within object
// When passed as first argument, will be omitted next

s.http('/xxx', {  }) // -> url will not be supplied
s.http({ url: '/' })

// We can narrow on http on the method level
// We need to ensure that url and method get omitted

s.http.get('', { })
s.http.patch('', { })
s.http.post('', { })
s.http.delete('', { })
s.http.head('', { })
s.http.put('', { })

// Lets ensure we are resolving a thenable promise

s.http('/').then(data => data)

// In TypeScript generics can be passed response data
// The data argument here will hold { foo } based on generic

s.http<{ foo: string }>('/').then(data => data)

// Lets now test the accepted schema structure

s.http({
  url: '',
  body: {},
  headers: { 'a': 'b'},
  pass: '',
  query: {},
  redraw: true,
  method: 'GET',
  responseType: 'json',
  timeout: 0,
  user: '',
  config: (xhr) => xhr, // -> xhr holds XMLHttpRequest
})

/* -------------------------------------------- */
/* SIN EVENTS                                   */
/* -------------------------------------------- */

// Event observer created an instance

const event = s.event(() => {})
const unsub = event.observe((value) => console.log('observe'))

event('hello')
unsub() // -> disposal

// Events have abort signal available
// The signal method is an instance of AbortSignal

event.signal.aborted

// We can use generics on events and the generic type
// will be passed through the instance

const event2 = s.event<{ foo: string }>() // -> internal callback is optional
const dispose = event2.observe(value => value) // -> value is { foo: string }

// Dispatch argument will adhere to the generic of event2

event2({ foo: 'xxx' })


/* -------------------------------------------- */
/* SIN ON                                       */
/* -------------------------------------------- */

// We will ensure generic is assigned to dom argument
// The s.on method requires a function callback

const oneventtest = s.on<HTMLButtonElement>(window as any, 'click', (event, dom) => {

  event // Event
  dom // -> HTMLButtonElement

})

// The value of oneventtest is a function

oneventtest()

// We use s.on as a DOM Helper, lets ensure typing is correct

s`div`({
  dom: s.on(window as any, 'keydown', (event, dom) => {

    event // -> keydown event
    dom // -> HTMLElement

  })
})


/* -------------------------------------------- */
/* SIN COMPONENTS                               */
/* -------------------------------------------- */

// We have styled component that can omit the callback
// These are styled components. Hover over each variable
// to confirm the signature of StyledComponent

const div = s`div`;
const ul = s`ul`;

// Calling StyledComponent we can pass element attributes
// We can also pass children or none

div()
div({ foo: 'bar' })
div({ foo: 'bar' }, 'child')

// Style Component can accept styled component children

div({ foo: 'bar' }, s`div`)
ul(s`li`('a'), s`li`('b'))
ul([ s`li`, s`li` ])


/* -------------------------------------------- */
/* STATELESS COMPONENT                          */
/* -------------------------------------------- */

const stateless_sync_1 = s(() => s``)
const stateless_sync_2 = s((attrs) => s``('xxx'))
const stateless_sync_3 = s(({}, []) => [])
const stateless_sync_4 = s(({}, children) => [ s`div`() ])
const stateless_sync_5 = s(({ xxx = '', num = 1000, bool = false, ...attrs }, children) => [])
const stateless_sync_6 = s(({ x = '' }, []) => () => s``('foo'))

stateless_sync_6` d block`({ x: 'xxx' })

/* -------------------------------------------- */
/* STATEFUL COMPONENTS                          */
/* -------------------------------------------- */

// Stateful component return a function and can use varying
// arguments and closure values. Here we test synchronous variations

const Stateful_sync_1 = s((attrs, children, { route }) => () => s``('foo'))
const Stateful_sync_2 = s(({}, children, { route }) => () => [])
const Stateful_sync_3 = s((attrs, children, { route }) => () => s``)
const Stateful_sync_4 = s(({}, [], { route }) => () => '')
const Stateful_sync_5 = s(({}, [], { route }) => () => ['', s``(s`div`('xxx'))])

// Stateful components can also be async in the sense that we
// provide the first callback function an async signature

const Stateful_async_1 = s(async ({}, [], { route }) => () => s``('foo'))
const Stateful_async_2 = s(async ({}, [], { route }) => () => [])
const Stateful_async_3 = s(async ({}, [], { route }) => () => s``)
const Stateful_async_4 = s(async ({}, [], { route }) => () => '')
const Stateful_async_5 = s(async ({}, [], { route }) => () => ['', s``(s`div`('xxx'))])


// We will now provide attrs to Stateful components.
// In most cases component attrs will be defaulted

const Stateful_attrs_1 = s(({ xxx = '', num = 1000, bool = false, ...attrs }) => [])
const Stateful_attrs_2 = s(async ({ foo = '', bar = 1000, ...attrs }) => () => [])
const Stateful_attrs_3 = s(async ({ foo = '', bar = 1000, ...attrs }, children) => () => [])
const Stateful_attrs_4 = s(async ({ foo = '', bar = 1000, ...attrs }, children, context) => () => [])

// Both Async and Sync Stateful variations will auto-complete
// exposing defaults

Stateful_attrs_1({
 bool: true

})

Stateful_attrs_2`
  bc blue
`({

})


// Lets chain Stateful components as a curried expression

const Stateful_curried_1 = s(() => () => [])
const Stateful_curried_2 = s(() => (attrs, children) => [])
const Stateful_curried_3 = s(async () => ({}, children) => () => s``(children))

// Generics accept attrs and context to be passed and
// callbacks can be async. Generics will be passed down the curried chain.

const Stateful_curried_4 = s<{
  a: string;
  b?: string;
  c?: string;
}, [], { fun: () => {}; }>(({ a }, [], { fun, doc }) => ({ b }) => {


  // Context Reference

  fun // -> () => void
  doc // -> Doc

  // Attrs Reference

  a // -> string
  b // -> string


  return () => s``(
    c // -> string
  )

})

// We can digest curried expression and overwrite styling
// but we need to ensure that our attrs generics still complete!

Stateful_curried_4`
 bc blue
`({

  a: ''  //
})

const Stateful_curried_5 = s<{
  a: string;
  b: string;
  c: string;
}, [], { fn: any }>(({ a }, [], { fn }) =>  async ({ b }, [], { doc }) => {


  return [
    s``('')
  ]

})


// Stateless component structures are a function which
// returns a styled component. Check the signature

const section = s((attrs, children) => s`section`('xxx'))

// Generics on stateless components return the type of attrs
// Here is where generic holds callback with generic object

const generic = s<{
  foo?: string;
  bar?: boolean
}>(({
    foo = '',
    bar = false,
  ...attrs
}, children) => [

  s`div`,  // -> this is valid though it seems wrong
  children,

])

// Lets now check the callback function and ensure types applied

generic({
  foo: '',      // -> autocompletion applied

})


/* -------------------------------------------- */
/* DAFT                                         */
/* -------------------------------------------- */

const daft = s(({}, []) => s``(
  (
    foo: string = '',
    bar: boolean = false,
    baz: number = 1000,
    qux: { x: string } = { x: 'xxx' }
  ) =>
    s``(
      foo,
      'hello',
      'world',
      bar ? baz : qux.x
    )
  )
)

/* -------------------------------------------- */
/* ADDITONAL TESTING                            */
/* -------------------------------------------- */

// Component Curried Signatures
//
const a = s`button`

a({ onclick: () => {} }, '')

const b = s(({ prop = 'foo', ...attrs }) => s``(prop))

b({ prop: 'bar' })

const c = s(({ value = '', ...attrs }) => (attrs, children) => [ children, s`div`(value) ])

c({ value: 'baz' }, 'qux')

const d = s(() => (attrs, children) => children)

d([ s`h1`('hello'), s`h1`('world') ])

const e = s((attrs, children, context) => () => s``(children));

// Usage with tagged template:
e`
  bg red
`({
  a: 'Login',
  c: 200
},
  s`h1`('xxx')
);

// Usage with direct invocation:
e({ a: 'Login' }, 'Hello');

