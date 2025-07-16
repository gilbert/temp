import s from 'sin'
import { Button } from './defintions'

Button({
  tooltip: 'foo'
})

// Test Attrs
// Test Children (empty)
// Test Context
//
const stateful_1: s.Component<{
  str: string;
  num: number;
  bool: boolean;
}, [], {
  foo: string,
  bar: number
}> = s(({ str, num, bool, ...attrs }, [], { foo, bar, doc }) => {

  // attrs
  //
  p(str);   // TS knows string
  p(num);   // TS knows number
  p(bool);  // TS knows boolean


  // context
  //
  p(foo) // TS knows string
  p(bar) // TS knows number

  return () => [
    s``({
      onclick: (e, dom) => dom
    }, [
      'Hello World'
    ])
  ]
});

// Test Attrs
// Test Children (omitted)
// Test Context (omitted)
//
const stateful_2: s.Component<{
  a: string;
  b: number;
  c: boolean;
}> = s(({ a, b, c, ...attrs }, [], { doc }) => {

  p(a)
  p(b)
  p(c)

  return () => [
    s``({
      onclick: (e, dom) => dom
    }, [
      'Hello World'
    ])
  ]
});


// Test Attrs
// Test Children (applied)
// Test Context (omitted)
//
const stateful_3: s.Component<{}, [
  name: string,
  age: number
]> = s(({}, children, { doc }) => {

  p(children[0])
  p(children[1])

  return () => [
    s``({
      onclick: (e, dom) => dom
    }, [
      'Hello World'
    ])
  ]
});

const stateless_1: s.Component<{
  str: string
  num: number
  bool: boolean
}, [ name: string ]> = s(({ str, num, bool, ...attrs }, [child]) => {

  return s``(attrs, s``(child))

});

const input: s.Component<HTMLInputElement> = s`input`
const href: s.Component<HTMLAnchorElement> = s`a`

s.mount(() =>[


  stateful_1({ str: '', num: 1, bool: true }),
  stateful_2({ a: '', b: 1, c: false }, ['x']),
  stateless_1({ str: '', num: 1, bool: true }, 'hello'),

  // Styled Components
  input` c red; fw 600`({ value: 'xxx'  }),
  href` c blue`({ href: '' }, 'xxx')
])