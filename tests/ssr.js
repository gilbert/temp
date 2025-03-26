// @ts-nocheck
import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'

async function toHtml(x) {
  const result = await ssr(s.mount(() => x), {})
  return result.html
}

t`ssr`(
  t`style`(
    t`as object`(async () => [
      '<!--h--><div style="color:red"></div>',
      await toHtml(s('', { style: { color: 'red' } }))
    ]),
    t`as string`(async () => [
      '<!--h--><div style="color:red"></div>',
      await toHtml(s('', { style: 'color:red' }))
    ])  
  ),
  t`css-vars`(
    t`as object`(async () => [
      '<!--h--><div style="--color:red"></div>',
      await toHtml(s('', { style: { '--color': 'red' } }))
    ]),
    t`as string`(async () => [
      '<!--h--><div style="--color:red"></div>',
      await toHtml(s('', { style: '--color:red' }))
    ]),
    t`embedded in template literal`(async () => [
      '<!--h--><div style="--sauu0bf0:red"></div>',
      await toHtml(s` color: ${'red'}`())
    ])
  ),
  t`className`(
    t`as string`(async () => [
      '<!--h--><div class="a b"></div>',
      await toHtml(s('', { className: 'a b' }))
    ]),
    t`as array`(async () => [
      '<!--h--><div class="a b"></div>',
      await toHtml(s('', { className: ['a', 'b'] }))
    ]),
    t`as object`(async () => [
      '<!--h--><div class="a b"></div>',
      await toHtml(s('', { className: { a: true, b: true } }))
    ]),
    t`as object with false`(async () => [
      '<!--h--><div class="a"></div>',
      await toHtml(s('', { className: { a: true, b: false } }))
    ]),
    t`as object with null`(async () => [
      '<!--h--><div class="a"></div>',
      await toHtml(s('', { className: { a: true, b: null } }))
    ]),
    t`as object with undefined`(async () => [
      '<!--h--><div class="a"></div>',
      await toHtml(s('', { className: { a: true, b: undefined } }))
    ])
  ),
  t`class`(
    t`as string`(async () => [
      '<!--h--><div class="a b"></div>',
      await toHtml(s('', { class: 'a b' }))
    ]),
    t`as array`(async () => [
      '<!--h--><div class="a b"></div>',
      await toHtml(s('', { class: ['a', 'b'] }))
    ]),
    t`as object`(async () => [
      '<!--h--><div class="a"></div>',
      await toHtml(s('', { class: { a: true, b: false } }))
    ]),
  )
)
      