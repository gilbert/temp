import s from '../..'
import { Button } from './test.d'

Button({
  tooltip: ''
})

const statefull: s.Component<{
  str: string;
  num: number;
  bool: boolean;
}, [], { foo: string, bar: number }> = s(({ str, num, bool, ...attrs }, [], { foo, bar }) => {

  console.log(foo.toUpperCase());  // TS knows string
  console.log(bar + 1);            // TS knows number

  return () => [
    s``({
      onclick: (e, dom) => dom
    }, [
      'Hello World'
    ])
  ]
});

const stateless: s.Component = s<{
  str: string;
  num: number;
  bool: boolean;
}>(({ str, num, bool, ...attrs }, [child]) => {

  return s``(attrs, s``(child))

});

const styled: s.Component<HTMLHeadingElement> = s`h1`

s.mount(() =>[
  statefull({ str: '', num: 1, bool: true }),
  stateless({ str: '', num: 1, bool: true }, 'hello', 'world'),
  styled` c red; fw 600`('abc')
])