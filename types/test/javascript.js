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


/* -------------------------------------------- */
/* HYPERSCRIPT ELEMENTS                         */
/* -------------------------------------------- */

// Testing HyperScript syntactical expressions
// Name completions will be provided here

s('div', '')
s('section', ['example'])

// Narrowing is possible with hyperscript syntacticals
// We will not get href as an option on the span vnode

s('span', { href: '' })
s('a', { href: '' })

// HyperScript tag name mutation expression should succeed
// <a> element will persist even with class names

s('a.foo.bar', { href: '' })
s('a#id', { href: '' })


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

const event2 = s.event() // -> internal callback is optional
const dispose = event2.observe(value => value) // -> value is { foo: string }

// Dispatch argument will adhere to the generic of event2

event2({ foo: 'xxx' })


/* -------------------------------------------- */
/* SIN ON                                       */
/* -------------------------------------------- */

// The s.on method requires a function callback

const oneventtest = s.on(window, 'click', (event, dom) => {

  event // Event
  dom // -> HTMLButtonElement

})

// The value of oneventtest is a function

oneventtest()

// We use s.on as a DOM Helper, lets ensure typing is correct

s`div`({
  dom: s.on(window, 'keydown', (event, dom) => {

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

// Stateless component structures are a function which
// returns a styled component. Check the signature

const section = s((attrs, children, context) => s`section`)

// Generics on stateless components return the type of attrs
// Here is where generic holds callback with generic object

const generic = s(({
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
  // bar: true  // -> uncomment to validate
})


/* -------------------------------------------- */
/* STATEFUL COMPONENTS                          */
/* -------------------------------------------- */

// Stateful component return a function and can use varying
// arguments and closure values. Here we test synchronous variations

const Stateful_sync_1 = s(({ foo = '' }, [], { route }) => () => s``('foo'))
const Stateful_sync_2 = s(({}, [], { route }) => () => [])
const Stateful_sync_3 = s(({}, [], { route }) => () => s``)
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

const stateless_attrs_1 = s(({
  xxx = '',
  num = 1000,
  bool = false,
  ...attrs
}) =>
  s``(
    ''
  )
)

const stateless_attrs_1 = s(({
  xxx = '',
  num = 1000,
  bool = false,
  ...attrs },
  children,
  context
) =>
  s``(
    children
  )
)

stateless_attrs_1({


})

const Stateful_attrs_2 = s((
  attrs,
  children,
  context
) => ({
  foo = '',
  bar = 1000,
  ...attrs
}) =>
  s``(
    children
  )

)

const stateless_attrs_3 = s(async ({
  foo = '',
  bar = 1000,
  ...attrs
 },
 children
) =>
  s``(
    children
  )
)

const Stateful_attrs_4 = s(async ({
  foo = '',
  bar = 1000,
  ...attrs
}, [], { doc }) => (attrs, children, context) => [])


Stateful_attrs_2`
  bc blue
`({

})
// The same logic will apply in the asynchronous Stateful example

Stateful_attrs_2({
  foo: '',
  // bar: 2000
})

// We need to ensure that curried overloads will correctly obtain arguments as
// they get passed down the chain.

const Stateful_chain_1 = s(async ({}, [], { route }) => (attrs, children) => [])
const Stateful_chain_2 = s(async ({}, [], { route }) => (attrs, children) => s``)


/* -------------------------------------------- */
/* ADDITONAL TESTING                            */
/* -------------------------------------------- */

// Component Curried Signatures
//
const a = s`button`

a({ onclick: () => {} }, '')

const b = s(({ prop = 'foo', ...attrs }) => s``(prop))

b({ prop: 'bar' })

const c = s(({ value }) => (attrs, children) => [ children, s`div`(value) ])

c({ value: 'baz' }, 'qux')

const d = s(() => (attrs, children) => children)

d([ s`h1`('hello'), s`h1`('world') ])

const e = s((attrs, children, context) => (attrs, children, context) => s``());

// Usage with tagged template:
e`bg red`({ a: 'Login', c: 200 }, s`h1`('xxx'));

// Usage with direct invocation:
e({ a: 'Login' }, 'Hello');

