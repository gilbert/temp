<p  align="center">
<a href ="https://sinjs.com">
<img src="https://sinjs.com/sin.svg" width="400px">
</a>
</p>

# Sin

Sin is a lightweight, reactive JavaScript framework designed to craft dynamic, performant, and accessible web applications. It embraces a declarative, component-based approach, offering a unique blend of tagged template literals, reactive streams, and a minimalist API. If you understand HTML, CSS and JavaScript you will understand sin.

<pre><code><i><strong><a href="https://flems.io/sin">https://flems.io/sin</a></strong></i></code></pre>

### Features

- 🔥 Full Stack Web Framework
- 💍 HTML, CSS & JS in a sinful threesome
- 💦 DOM Hydration and SSR
- 🧐 SPA, MPA, SSR, SSG, CLI, ACME and WAT
- 📦 Package Management
- 👩‍💻 Best DX in town (sub eye blink hot reload)
- 🏎️ Lean and Fast (Only 2 dependencies) 12kb~ish

### Samples

- [Carousel](https://flems.io/https://gist.github.com/panoply/bb1b15cdae4e98bca253016e2c4ed9c4)
- [Toast](https://flems.io/https://gist.github.com/porsager/d799d962c435e5e647cc0f6a6b560909)

# Installation

Sin is (currently) private, accessible only with explicit authorization. The Sin CLI handles development, bundling, package management, and project generation, this means you don't need to use alternative managers such as npm or pnpm, because sin comes with package management feature built-in. After installation, use the `sin` binary for all development tasks.

```bash
source <(curl -fsSL install.sinjs.com)
```

### CDN

```js
import sin from 'https://sinjs.com'
```

### IEX

```powershell
iex (irm install.sinjs.com)
```

### Latest Versions

Sin is not yet available for consumption via the NPM Registry. Given that there are frequent changes and improvements, once the `sin` binary is exposed you can keep aligned via the Github Repository.

```bash
GITHUB_TOKEN=xxx sin i porsager/sin
```

> Obtain the GITHUB_TOKEN from Rasmus or one of us in the [discord](https://discord.gg/PQAsXkRGkp).

### Forked Linking

Forks of sin from `porsager/sin` can be used as global links.

```bash
sin link sin
```

### Project Structure

Sin projects use a default structure and when leveraging the sin CLI, projects should adhere to this directory layout.

```bash
├── +             # Server Side Scripting
├── +build        # Build Scripts
├── +public       # Pass-through files
├── index.js      # Client side entry
├── package.json  # Package
└── sin.lock      # Sin lock for package management
```

### VSCode Extension

Sintax provides some basic support for sin, including Syntax highlighting for literal styles and ile icons.

- [Sintax](https://marketplace.visualstudio.com/items?itemName=sissel.sintax)

### TypeScript

Sin provides comprehensive TypeScript definitions that capture its flexible and dynamic architecture. Types provided within `sin.d.ts`  cover the numerous overloads for various component signatures, recursive types for nested children, and generics for attributes and contexts.

```ts
// Virtuals
s('section', {}, ...[])                          // HyperScript auto-types Element
s<HTMLElement>``({}, ...[])                      // Generics for Styled Components
s<attrs, children>(({}, []) => [])               // Generics for Stateless Components
s<attrs, children, context>(({}, [], {}) => [])  // Generics for Statefull Component

// Utilities
s.Component<HTMLElement, children>               // Styled Component Utility
s.Component<attrs, children, context>            // Stateless and Statefull Utility
s.Context<context>                               // Component Context Merge
```

> [!NOTE]
> Sin's type definitions are designed for sin-specific usage and expand upon the `lib.dom.d.ts` variation. IntelliSense for attributes and elements apply precise type narrowing with JSDoc annotated descriptives and direct MDN references.

---

# Table of Contents

- [Elements](#elements)
- [Attributes](#attributes)
  - [dom](#dom--dom----)
  - [deferrable](#deferrable--deferrable-boolean-)
  - [key](#key--key-any-)
- [Arguments](#arguments)
  - [attrs](#attrs-)
  - [children](#children-)
  - [context](#context-)
- [Mounting](#mounting-smount)
- [Components](#components)
  - [Styled](#styled-component-s)
  - [Stateless](#stateless-component-s--)
  - [Statefull](#statefull-component-s----)
  - [Async](#async-component-sasync---)
- [CSS](#css-scss)
  - [reset](#resets-scssreset)
  - [units](#units)
  - [variables](#variables)
  - [alias](#alias-scssalias)
  - [ahothands](#shorthands)
- [Routing](#routing)
- [Live](#live)
- [HTTP](#http-shttp)
  - [Methods](#request-methods)
  - [Options](#request-options)
- [DOM Helpers](#dom-helpers)
  - [is](#is-sisalias)
  - [on](#on-son)
  - [p](#p)
  - [animate](#animate-sanimate)
- [Trust](#trust-strust)

---

# ```s`` ```

Sin revolves around components, which are the building blocks of your application. Components can be stateless, stateful, or asynchronous, and they support a variety of signatures. All components in Sin are made to allow overriding styles anywhere they are used.

> The beauty of the Sin component model is that you will never have to change your callsite usage, even if you need to advance the complexity of your component.

## Elements

Elements (vnodes) are composed as tagged template literals. Sin defaults to creating `div` elements if an HTML element type is not specified and allows `#` and class names `.` right after the element type or at the start of the tagged template literal to be passed.

```js
// Basic Element Structures
//
s``('Hello Sinner!')           // -> <div>Hello Sinner!</div>
s`#id`('Sinner with id')       // -> <div id="penance">Hello Sinner</div>
s`h1.loki`('Sinner class')     // -> <h1 class="loki">Sinner class</h1>

// Sinfull Element Styling
//
s`span
  font-size: 16px;
  text-decoration: underline;
  color: pink;
`('Sinfull Styling')          // -> <span class="s1cnspbk">Sinfull Styling</span>
```

<details>
<summary>
<strong>HyperScript Syntactical</strong>
</summary>
<p>

If you're coming from mithril.js and prefer the old HyperScript syntax, You can compose elements as normal:

```js
s('', 'Hello Sinner!')
s('#penance', 'Hello Sinner!')
s('h1.loki', [ s('h1', 'Hello Sinner!') ])
```

</p>
</details>

## Attributes

Element (vnode) attributes support HTML attribute properties. Sin resolves attributes via JavaScript and DOM APIs (`setAttribute`). Event handler binding supports all DOM events, including those without an `on` property, like `touchstart`. Event handlers are enhanced, with per-element references and additional properties for improved render control.

### dom `{ dom: () => {} }`

DOM Element render callback. Dom is a creation lifcycle hook which will call in the post rendering cycle of a sin view. You will attach third-party tools using this callback method, as it fires once the virtual node has been mounted, rendered and is ready.

```js
s`div`({
  dom: (element, attributes, children, context) => {
    element      // -> <div> Element
    attributes   // -> element attributes
    children     // -> nested content
    context      // -> context reference
  }
})
```

The `dom` key also accepts an array of handler functions which can be used to chain operations

```js
s`div`({
  dom: [
    (dom, attributes, children, context) => p(dom, attributes, children, context),
    (dom, attributes, children, context) => p(dom, attributes, children, context),
    (dom, attributes, children, context) => p(dom, attributes, children, context)
  ]
})
```

### deferrable `{ deferrable: boolean }`

The `deferrable` key accepts a boolean, it waits for children using deferred removal:

```js
s`div`({
  deferrable: false
})
```

### key `{ key: any }`

The `key` property is a value used to map a DOM element to its respective item in an array of data.

```js
s`div`({
  key: 1
})
```

## Arguments

In Sin, the `attrs`, `children`, and `state` arguments are fundamental to component creation and management, as they define the properties, content, and environment of components. Function signatures of sin components are comprised of 3 arguments. Each argument represents render specifics.

```js
s((attrs, children, context) => [
  s`h1`('Garden')
  s`button`(attrs, name)
])

```

### attrs `{}`

The `attrs` argument is a hashmap object. We use `attrs` as a blueprint for how a component behaves and appears, allowing you to define everything from standard HTML attributes to event handlers (e.g., `onclick`) and custom properties.

```js
const person = s(({ name = 'Eve', ...attrs }) => s`button`(attrs, name))

s.mount(() => [
  person({ name: 'Adam' }),
  person({ onclick: () => alert('Apples?') })
])
```

> [!NOTE]
> When passing attributes, we usually spread `...attrs` on the receiving component and extract non-standard values from the hashmap.
> Spreading attributes ensures properties are not applied directly as element attributes.
>
> **See this » [Flems Demonstration](https://flems.io/https://gist.github.com/panoply/ae2e0ae00b8695867c0f123d29f17e10)**

### children `[]`

The `children` argument represents the nested content within a sin component, forming the heart of its compositional power and UI hierarchies. It's a flexible, array-like structure that can include elements, primitive values (like strings or numbers), or arrays of other children.

```js
const people = s(({}, children) => s`ui`(children))

s.mount(() => people(
  s`li`(person({ name: 'Adam' })),
  s`li`('Eve'),
  s`li`(person({ onclick: () => alert('Apples?') }))
))
```

### context `{}`

The context argument holds global accessible methods which can be used to interact with the broader application. It encapsulates utilities for document manipulation, client-side routing, lifecycle management, and redraw control. We can extend `context` on a per-component basis and use it as a shared as data or method binding reference that sub-components can access.

```js
const people = s(({}, children, context) => [
  s`button`({ onclick: () => context.eat = !context.eat }, 'Eat the apple?')
  s`ui`(children),
  context.eat && s`h1`('Hell hath no fury!')
])

s.mount(({}, [], { doc, state }) => {

  state.eat = false
  state.name = 'xxx'
  state.food = () => {}

  // The doc key is readonly and represents the document
  doc.title('Garden of Eden')
  doc.lang('da')
  doc.head([
    s`link`({ rel: 'icon', href: '/favicon.ico', sizes: 'any' }),
    s`meta`({ name: 'apple-mobile-web-app-capable', content: 'yes' })
  ])

  return () => people(
    s`li`(person({ name: 'Adam' })),
    s`li`(person({ onclick: () => alert('Apples?') }))
  )
})
```

> [!NOTE]
> Treat the `context` as broader application reference and when possible, choose `attrs` for passing data
> between components or consider inline variable using [DAFT](#daft) (default argument function thunk) expressions.

## Mounting `s.mount(...)`

The mount method is used to render elements and components. By default, sin will mount to `document.body`, but you can provide a specific element. Mount can be used to construct the DOM for your application.

```js
// Mounting to document.body
s.mount(() => s`h1`('Hello Sinner'))

// Mounting to a specific element
s.mount(document.querySelector('#sinner') => s`h1`('Hello Sinner'))
```

# Components

Sin revolves around components, which are the building blocks of your application. Components can be stateless, stateful, or asynchronous, and they support a variety of signatures. All components in Sin are made to allow overriding styles anywhere they are used.

> The beauty of the Sin component model is that you will never have to change your callsite usage, even if you need to advance the complexity of your component.

## Styled Component `s``(...)`

[![Flems](https://img.shields.io/badge/flems-sandbox-playground?labelColor=34454d&color=cdcdcd&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjY2NCA5LjE2TDE4LjIxNiAzLjczNkMxOC4xMiAzLjYxNiAxNy45NTIgMy41NDQgMTcuODA4IDMuNTQ0SDE3LjEzNkMxNi4zMiAzLjU0NCAxNS41NzYgNC4wNzIgMTUuMzEyIDQuODY0TDE0LjI4IDcuOTZDMTQuMjA4IDguMiAxNC4zNzYgOC40NjQgMTQuNjQgOC40NjRIMTYuNDY0QzE2LjcyOCA4LjQ2NCAxNi44OTYgOC43MDQgMTYuODI0IDguOTQ0TDE2LjEwNCAxMS4xMjhDMTYuMDA4IDExLjM2OCAxNS43OTIgMTEuNTM2IDE1LjUyOCAxMS41MzZIMTMuNTM2QzEzLjI3MiAxMS41MzYgMTMuMDU2IDExLjcwNCAxMi45NiAxMS45NDRMMTEuNDk2IDE2LjM4NEMxMS4wNCAxNy43MjggMTAuMDMyIDE4Ljc2IDguNzU5OTkgMTkuMjRDOS4wMjM5OSAxOS41MjggOS4yNjM5OSAxOS41MjggOS40MzE5OSAxOS41MjhIMTQuNzEyQzE0Ljg4IDE5LjUyOCAxNS4wMjQgMTkuNDggMTUuMTQ0IDE5LjM2TDIzLjY2NCAxMC44NEMyNC4xMiAxMC4zODQgMjQuMTIgOS42MTYgMjMuNjY0IDkuMTZaTTkuNjk1OTkgMTIuMDRDOS43Njc5OSAxMS44IDkuNTc1OTkgMTEuNTM2IDkuMzM1OTkgMTEuNTM2SDcuNTM1OTlDNy4yOTU5OSAxMS41MzYgNy4xMjc5OSAxMS4yOTYgNy4xOTk5OSAxMS4wOEw3Ljk0Mzk5IDguODcyQzguMDE1OTkgOC42MDggOC4yMzE5OSA4LjQ2NCA4LjQ5NTk5IDguNDY0SDEwLjQ0QzEwLjcwNCA4LjQ2NCAxMC45MiA4LjI5NiAxMS4wMTYgOC4wNTZMMTIuNDggMy42MTZDMTIuOTEyIDIuMjcyIDEzLjk0NCAxLjI0IDE1LjIxNiAwLjc2QzE1LjEzMjkgMC42NjQ0NTcgMTUuMDI5MyAwLjU4ODkyNiAxNC45MTMgMC41MzkwNTRDMTQuNzk2NiAwLjQ4OTE4MyAxNC42NzA1IDAuNDY2MjYgMTQuNTQ0IDAuNDcySDkuMjg3OTlDOS4xNDM5OSAwLjQ3MiA4Ljk3NTk5IDAuNTIgOC44Nzk5OSAwLjY0TDAuMzU5OTkgOS4xNkMwLjI0ODIzNyA5LjI2OTUgMC4xNTk0NTYgOS40MDAxOSAwLjA5ODg0NzEgOS41NDQ0M0MwLjAzODIzNzkgOS42ODg2NiAwLjAwNzAxOTA0IDkuODQzNTUgMC4wMDcwMTkwNCAxMEMwLjAwNzAxOTA0IDEwLjE1NjUgMC4wMzgyMzc5IDEwLjMxMTMgMC4wOTg4NDcxIDEwLjQ1NTZDMC4xNTk0NTYgMTAuNTk5OCAwLjI0ODIzNyAxMC43MzA1IDAuMzU5OTkgMTAuODRMNS43ODM5OSAxNi4yNjRDNS45MDM5OSAxNi4zODQgNi4wNDc5OSAxNi40NTYgNi4xOTE5OSAxNi40NTZINi44Mzk5OUM3LjY1NTk5IDE2LjQ1NiA4LjM5OTk5IDE1LjkwNCA4LjY2Mzk5IDE1LjEzNkw5LjY5NTk5IDEyLjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://flems.io/https://gist.github.com/panoply/7b60cf8898c8d1f22dbdf6006b7b252a)

The styled component is the most basic form of component in Sin. It has no logic, but only defines the tag name and styles.

```js
// Definition
const sinner = s`button
  p 10 15
  fs 15
  mr 10
  bc cyan
`

// Basic Usage
sinner({
  onclick: () => alert('Blasphemy!')
},
  'Hello Sinner!'
)

// Style Override
sinner`
  br 4
  border 1 solid
  color white
  bc hotpink
`({
  onclick: () => alert('Blasphemy!')
},
  'Hello Sinner!'
)
```

## Stateless Component `s(() => ...)`

[![Flems](https://img.shields.io/badge/flems-sandbox-playground?labelColor=34454d&color=cdcdcd&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjY2NCA5LjE2TDE4LjIxNiAzLjczNkMxOC4xMiAzLjYxNiAxNy45NTIgMy41NDQgMTcuODA4IDMuNTQ0SDE3LjEzNkMxNi4zMiAzLjU0NCAxNS41NzYgNC4wNzIgMTUuMzEyIDQuODY0TDE0LjI4IDcuOTZDMTQuMjA4IDguMiAxNC4zNzYgOC40NjQgMTQuNjQgOC40NjRIMTYuNDY0QzE2LjcyOCA4LjQ2NCAxNi44OTYgOC43MDQgMTYuODI0IDguOTQ0TDE2LjEwNCAxMS4xMjhDMTYuMDA4IDExLjM2OCAxNS43OTIgMTEuNTM2IDE1LjUyOCAxMS41MzZIMTMuNTM2QzEzLjI3MiAxMS41MzYgMTMuMDU2IDExLjcwNCAxMi45NiAxMS45NDRMMTEuNDk2IDE2LjM4NEMxMS4wNCAxNy43MjggMTAuMDMyIDE4Ljc2IDguNzU5OTkgMTkuMjRDOS4wMjM5OSAxOS41MjggOS4yNjM5OSAxOS41MjggOS40MzE5OSAxOS41MjhIMTQuNzEyQzE0Ljg4IDE5LjUyOCAxNS4wMjQgMTkuNDggMTUuMTQ0IDE5LjM2TDIzLjY2NCAxMC44NEMyNC4xMiAxMC4zODQgMjQuMTIgOS42MTYgMjMuNjY0IDkuMTZaTTkuNjk1OTkgMTIuMDRDOS43Njc5OSAxMS44IDkuNTc1OTkgMTEuNTM2IDkuMzM1OTkgMTEuNTM2SDcuNTM1OTlDNy4yOTU5OSAxMS41MzYgNy4xMjc5OSAxMS4yOTYgNy4xOTk5OSAxMS4wOEw3Ljk0Mzk5IDguODcyQzguMDE1OTkgOC42MDggOC4yMzE5OSA4LjQ2NCA4LjQ5NTk5IDguNDY0SDEwLjQ0QzEwLjcwNCA4LjQ2NCAxMC45MiA4LjI5NiAxMS4wMTYgOC4wNTZMMTIuNDggMy42MTZDMTIuOTEyIDIuMjcyIDEzLjk0NCAxLjI0IDE1LjIxNiAwLjc2QzE1LjEzMjkgMC42NjQ0NTcgMTUuMDI5MyAwLjU4ODkyNiAxNC45MTMgMC41MzkwNTRDMTQuNzk2NiAwLjQ4OTE4MyAxNC42NzA1IDAuNDY2MjYgMTQuNTQ0IDAuNDcySDkuMjg3OTlDOS4xNDM5OSAwLjQ3MiA4Ljk3NTk5IDAuNTIgOC44Nzk5OSAwLjY0TDAuMzU5OTkgOS4xNkMwLjI0ODIzNyA5LjI2OTUgMC4xNTk0NTYgOS40MDAxOSAwLjA5ODg0NzEgOS41NDQ0M0MwLjAzODIzNzkgOS42ODg2NiAwLjAwNzAxOTA0IDkuODQzNTUgMC4wMDcwMTkwNCAxMEMwLjAwNzAxOTA0IDEwLjE1NjUgMC4wMzgyMzc5IDEwLjMxMTMgMC4wOTg4NDcxIDEwLjQ1NTZDMC4xNTk0NTYgMTAuNTk5OCAwLjI0ODIzNyAxMC43MzA1IDAuMzU5OTkgMTAuODRMNS43ODM5OSAxNi4yNjRDNS45MDM5OSAxNi4zODQgNi4wNDc5OSAxNi40NTYgNi4xOTE5OSAxNi40NTZINi44Mzk5OUM3LjY1NTk5IDE2LjQ1NiA4LjM5OTk5IDE1LjkwNCA4LjY2Mzk5IDE1LjEzNkw5LjY5NTk5IDEyLjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://flems.io/https://gist.github.com/panoply/32e1ada26743cc3d42b988a56f87b34e)

The Stateless component accepts an object for attributes and an array of children.

```js
// Definition
const sinner = s`button
  p 10 15
  fs 15
  bc hotpink
  br 4
  border 1 solid
  color white
`

// Usage
const apostate = s(({ onclick, ...attrs }, children) =>
  sinner({
    ...attrs,
    onclick: e => {
      alert('Alert is blasphemy!')
      onclick(e)
    }
  },
    children
  )
)
```

## Closure Component `s(() => () => ...)`

[![Flems](https://img.shields.io/badge/flems-sandbox-playground?labelColor=34454d&color=cdcdcd&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjY2NCA5LjE2TDE4LjIxNiAzLjczNkMxOC4xMiAzLjYxNiAxNy45NTIgMy41NDQgMTcuODA4IDMuNTQ0SDE3LjEzNkMxNi4zMiAzLjU0NCAxNS41NzYgNC4wNzIgMTUuMzEyIDQuODY0TDE0LjI4IDcuOTZDMTQuMjA4IDguMiAxNC4zNzYgOC40NjQgMTQuNjQgOC40NjRIMTYuNDY0QzE2LjcyOCA4LjQ2NCAxNi44OTYgOC43MDQgMTYuODI0IDguOTQ0TDE2LjEwNCAxMS4xMjhDMTYuMDA4IDExLjM2OCAxNS43OTIgMTEuNTM2IDE1LjUyOCAxMS41MzZIMTMuNTM2QzEzLjI3MiAxMS41MzYgMTMuMDU2IDExLjcwNCAxMi45NiAxMS45NDRMMTEuNDk2IDE2LjM4NEMxMS4wNCAxNy43MjggMTAuMDMyIDE4Ljc2IDguNzU5OTkgMTkuMjRDOS4wMjM5OSAxOS41MjggOS4yNjM5OSAxOS41MjggOS40MzE5OSAxOS41MjhIMTQuNzEyQzE0Ljg4IDE5LjUyOCAxNS4wMjQgMTkuNDggMTUuMTQ0IDE5LjM2TDIzLjY2NCAxMC44NEMyNC4xMiAxMC4zODQgMjQuMTIgOS42MTYgMjMuNjY0IDkuMTZaTTkuNjk1OTkgMTIuMDRDOS43Njc5OSAxMS44IDkuNTc1OTkgMTEuNTM2IDkuMzM1OTkgMTEuNTM2SDcuNTM1OTlDNy4yOTU5OSAxMS41MzYgNy4xMjc5OSAxMS4yOTYgNy4xOTk5OSAxMS4wOEw3Ljk0Mzk5IDguODcyQzguMDE1OTkgOC42MDggOC4yMzE5OSA4LjQ2NCA4LjQ5NTk5IDguNDY0SDEwLjQ0QzEwLjcwNCA4LjQ2NCAxMC45MiA4LjI5NiAxMS4wMTYgOC4wNTZMMTIuNDggMy42MTZDMTIuOTEyIDIuMjcyIDEzLjk0NCAxLjI0IDE1LjIxNiAwLjc2QzE1LjEzMjkgMC42NjQ0NTcgMTUuMDI5MyAwLjU4ODkyNiAxNC45MTMgMC41MzkwNTRDMTQuNzk2NiAwLjQ4OTE4MyAxNC42NzA1IDAuNDY2MjYgMTQuNTQ0IDAuNDcySDkuMjg3OTlDOS4xNDM5OSAwLjQ3MiA4Ljk3NTk5IDAuNTIgOC44Nzk5OSAwLjY0TDAuMzU5OTkgOS4xNkMwLjI0ODIzNyA5LjI2OTUgMC4xNTk0NTYgOS40MDAxOSAwLjA5ODg0NzEgOS41NDQ0M0MwLjAzODIzNzkgOS42ODg2NiAwLjAwNzAxOTA0IDkuODQzNTUgMC4wMDcwMTkwNCAxMEMwLjAwNzAxOTA0IDEwLjE1NjUgMC4wMzgyMzc5IDEwLjMxMTMgMC4wOTg4NDcxIDEwLjQ1NTZDMC4xNTk0NTYgMTAuNTk5OCAwLjI0ODIzNyAxMC43MzA1IDAuMzU5OTkgMTAuODRMNS43ODM5OSAxNi4yNjRDNS45MDM5OSAxNi4zODQgNi4wNDc5OSAxNi40NTYgNi4xOTE5OSAxNi40NTZINi44Mzk5OUM3LjY1NTk5IDE2LjQ1NiA4LjM5OTk5IDE1LjkwNCA4LjY2Mzk5IDE1LjEzNkw5LjY5NTk5IDEyLjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://flems.io/https://gist.github.com/panoply/2bbf9b783cbacdb2feefb956ccd09109)

The Closure Component is retains its state across redraws and expect a function callback return signature.

```js
// Definition
const sinner = s`button
  p 10 15
  fs 15
  bc hotpink
  br 4
  border 1 solid
  color white
`

const example = s(() => {

  let count = 0

  return () => sinner({
    onclick: () => count++
  },
    count === 0
    ? 'You are sinless!'
    : `You've committed ${count} sin${count > 1 ? "s" : ""}!`
  )
})
```

> [!NOTE]
> You can access `attrs`, `children` and `state` arguments in the closure callback function. The arguments available to the callback can be used to avoid stale data references.


## Async Component `s({ loading, error }, async () => ...)`

[![Flems](https://img.shields.io/badge/flems-sandbox-playground?labelColor=34454d&color=cdcdcd&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjY2NCA5LjE2TDE4LjIxNiAzLjczNkMxOC4xMiAzLjYxNiAxNy45NTIgMy41NDQgMTcuODA4IDMuNTQ0SDE3LjEzNkMxNi4zMiAzLjU0NCAxNS41NzYgNC4wNzIgMTUuMzEyIDQuODY0TDE0LjI4IDcuOTZDMTQuMjA4IDguMiAxNC4zNzYgOC40NjQgMTQuNjQgOC40NjRIMTYuNDY0QzE2LjcyOCA4LjQ2NCAxNi44OTYgOC43MDQgMTYuODI0IDguOTQ0TDE2LjEwNCAxMS4xMjhDMTYuMDA4IDExLjM2OCAxNS43OTIgMTEuNTM2IDE1LjUyOCAxMS41MzZIMTMuNTM2QzEzLjI3MiAxMS41MzYgMTMuMDU2IDExLjcwNCAxMi45NiAxMS45NDRMMTEuNDk2IDE2LjM4NEMxMS4wNCAxNy43MjggMTAuMDMyIDE4Ljc2IDguNzU5OTkgMTkuMjRDOS4wMjM5OSAxOS41MjggOS4yNjM5OSAxOS41MjggOS40MzE5OSAxOS41MjhIMTQuNzEyQzE0Ljg4IDE5LjUyOCAxNS4wMjQgMTkuNDggMTUuMTQ0IDE5LjM2TDIzLjY2NCAxMC44NEMyNC4xMiAxMC4zODQgMjQuMTIgOS42MTYgMjMuNjY0IDkuMTZaTTkuNjk1OTkgMTIuMDRDOS43Njc5OSAxMS44IDkuNTc1OTkgMTEuNTM2IDkuMzM1OTkgMTEuNTM2SDcuNTM1OTlDNy4yOTU5OSAxMS41MzYgNy4xMjc5OSAxMS4yOTYgNy4xOTk5OSAxMS4wOEw3Ljk0Mzk5IDguODcyQzguMDE1OTkgOC42MDggOC4yMzE5OSA4LjQ2NCA4LjQ5NTk5IDguNDY0SDEwLjQ0QzEwLjcwNCA4LjQ2NCAxMC45MiA4LjI5NiAxMS4wMTYgOC4wNTZMMTIuNDggMy42MTZDMTIuOTEyIDIuMjcyIDEzLjk0NCAxLjI0IDE1LjIxNiAwLjc2QzE1LjEzMjkgMC42NjQ0NTcgMTUuMDI5MyAwLjU4ODkyNiAxNC45MTMgMC41MzkwNTRDMTQuNzk2NiAwLjQ4OTE4MyAxNC42NzA1IDAuNDY2MjYgMTQuNTQ0IDAuNDcySDkuMjg3OTlDOS4xNDM5OSAwLjQ3MiA4Ljk3NTk5IDAuNTIgOC44Nzk5OSAwLjY0TDAuMzU5OTkgOS4xNkMwLjI0ODIzNyA5LjI2OTUgMC4xNTk0NTYgOS40MDAxOSAwLjA5ODg0NzEgOS41NDQ0M0MwLjAzODIzNzkgOS42ODg2NiAwLjAwNzAxOTA0IDkuODQzNTUgMC4wMDcwMTkwNCAxMEMwLjAwNzAxOTA0IDEwLjE1NjUgMC4wMzgyMzc5IDEwLjMxMTMgMC4wOTg4NDcxIDEwLjQ1NTZDMC4xNTk0NTYgMTAuNTk5OCAwLjI0ODIzNyAxMC43MzA1IDAuMzU5OTkgMTAuODRMNS43ODM5OSAxNi4yNjRDNS45MDM5OSAxNi4zODQgNi4wNDc5OSAxNi40NTYgNi4xOTE5OSAxNi40NTZINi44Mzk5OUM3LjY1NTk5IDE2LjQ1NiA4LjM5OTk5IDE1LjkwNCA4LjY2Mzk5IDE1LjEzNkw5LjY5NTk5IDEyLjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://flems.io/https://gist.github.com/panoply/4e3e517c8384a384de9b72a74665a7ea)


The Async Component accepts an object that can handle the loading and error states. The `loading` key can be a sin element, component or function, the `error` key is a callback hook fired on failure.

```js
// Definition
const judgement = s(
  {
    loading: sinner('Seeking Atonement...'),
    error: e => sinner(`There was an error: ${e}`)
  },
  async () => {
    await s.sleep(3000)
    return async () => sinner('Sins Forgiven!')
  }
)
```

## DAFT

DAFT (Default Argument Function Thunk) is a signature pattern of statefull Sin components which can be used for scope-level variables expressed as default arguments.

```js
s((attrs, children, context) => () =>
  s`h1`(
    (
      d = 'Default',
      a = 'Argument',
      f = 'Function',
      t = 'Thunk'
    ) => [
      'Sin Has ',d,a,f,t
    ]
  )
)
```

# CSS

Element styling can be expressed inline and allows for expressive cascades to be applied. The `:` and `;` are optional for single line definitions. No more bloated syntax.

```js
s`span
  font-size 16px
  text-decoration underline
  color pink
`
```

> [!NOTE]
> It's not possible to mix shorthand and standard styling conventions `:` and `;` you will lose the lean sintax (shorthand, implict unit)
>
> ```diff
> +  font-size 16
> +  fs 16
> +  font-size: 16;
> -  fs: 16;
> -  font-size: 16
> -  font-size 16;
> ```


## Styles  ```s.css`` ```

The `s.css` method can be used to define stylesheet/s and global styling that can be used anywhere in your application.

```css
s.css`
  /* your global stylesheet here */
`
```

## Resets ```s.css.reset`` ```

To reduce browser inconsistencies you can use the opinionated css reset style rules when writing your global CSS.

```js
s.css.reset`
  /* your global reset here */
`
```

<details>
<summary>
<strong>Sin Defaults</strong>
</summary>
<p>
Sin applies a very minimal default CSS reset, that includes:
</p>


```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
  text-transform: none;
}

* {
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
  hyphens: auto;
}

body {
  font-family: system-ui, sans-serif;
  min-height: 100svh;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

p {
  line-height: 1.5;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

ol, ul, li {
  list-style: none;
}
```

</details>

## Units

Sin will automatically add `px` as a unit when omitted, unless the relevant css property takes a unitless value.

```js
s`span
  font-size 16
  width 200
  height 600
`()
```


## Variables `$variable`

Sin provides a convenient way to access and define CSS variabes. The `$` prefix keywords will render vars.

```css
s.css`
  :root {
    $red tomato
    $white #fff
  }
`
```

We can reference, overwrite and even create variables on the component (element) level:

```js
s`
  $pink hotpink
  $size 200
`(
  s`p
    bc $white
    c $pink
    w $size
  `('Paragraph has 200px width, font color hotpink and background white!')
 )
```

## Alias `s.css.alias({...})`

The `s.css.alias` method allows you to define aliases for media queries that you can later use in your CSS. Aliases will also be made available to `s.is.*` and will reflect breakpoint changes via MatchMedia API.

```js
// Definition
s.css.alias({
  mobile: '@media (max-width: 767.98px)',
  tablet: '@media (max-width: 1200px)',
  desktop: '@media (min-width: 1500px)',
  ios: '@supports (-webkit-touch-callout: none)'
})

// Usage
s`
  @mobile {
   display none
  }
`('Not visible on mobile devices...')

```

### Shorthands

The most popular CSS properties can be references by its initials. A few popular properties have overlapping initials, Sin choose to support the most commonly used.

<details>
<summary>See list of abbreviations</summary>


| abbreviation | keyword               |
| ------------ | --------------------  |
| ai           | align-items           |
| b            | bottom                |
| bc           | background-color      |
| bg           | background            |
| bf           | backdrop-filter       |
| br           | border-radius         |
| bs           | box-shadow            |
| bi           | background-image      |
| c            | color                 |
| d            | display               |
| fg           | flex-grow             |
| fb           | flex-basis            |
| f            | float                 |
| fd           | flex-direction        |
| ff           | font-family           |
| fs           | font-size             |
| fw           | font-weight           |
| g            | gap                   |
| ga           | grid-area             |
| gg           | grid-gap              |
| gta          | grid-template-areas   |
| gtc          | grid-template-columns |
| gtr          | grid-template-rows    |
| h            | height                |
| jc           | justify-content       |
| l            | left                  |
| lh           | line-height           |
| ls           | letter-spacing        |
| m            | margin                |
| mb           | margin-bottom         |
| ml           | margin-left           |
| mr           | margin-right          |
| mt           | margin-top            |
| o            | opacity               |
| p            | padding               |
| pb           | padding-bottom        |
| pl           | padding-left          |
| pr           | padding-right         |
| pt           | padding-top           |
| pi           | place-items           |
| pe           | pointer-events        |
| r            | right                 |
| t            | top                   |
| ta           | text-align            |
| td           | text-decoration       |
| tt           | text-transform        |
| ts           | text-shadow           |
| us           | user-select           |
| ws           | white-space           |
| w            | width                 |
| zi           | z-index               |


</details>

## Routing `s.route(...)`

Sin includes the most `get out of your way` router possible. There is always a scoped router available in context which let's you implement routing (as nested as you like) — not being concerned about the mount point. Using `href` is highly encouraged and the default way of telling Sin to route away. Every sin `route` instance even has a sweet .toString method, so you can simply do `href: route + 'sub-page'`. You can also use `route.has()` if you want to highlight which route is active, and if that's too boring Sin sets an `[active]` attribute for you to use for styling.

```js
s.mount(({ route }) => [
  s`nav`(
    ['/', '/murray', '/lysander', '/profile'].map(x =>
      s`a
        background ${ route.has(path) && 'lightblue' }
      `({
        href: '/' + x
      },
        x.slice(1) || 'Home'
      )
    )
  ),
  s`main`(
    route({
      '/': () => 'Welcome to the world',
      '/:user': ({ user }) => 'You are checking out ' + user,
      '/profile': () => 'The glory of you'
    })
  )
])
```

### Target

For any ``s`a`({ href: "/my/route" }, ...)`` tag, Sin will automatically hook it into `history.pushState` routing. However, if you don't want this behavior (e.g to hit your `/oauth/github` backend route), just add a `target: '_self'` attribute to your anchor tag.

## Live `s.live`

The `s.live` method creates reactive streams that automatically update the UI when their values change. These streams are versatile, supporting numbers, strings, objects, and more. They can be observed, transformed, and used to drive dynamic behavior.


```js
const stream = s.live()
stream.value                                   // Current value of the stream
stream.valueOf()                               // Coerce value for operations (e.g., arithmetic for numbers)
stream.toJSON()                                // JSON serialization
stream.toString()                              // String representation
stream.get('')                                 // Derive a new stream from a property
stream.get(((value) => {})                     // or function
stream.set()                                   // Set the value directly or via a function
stream.observe((new, old, detach) => {})       // Observe value changes, returns unsubscribe function
stream.detach()                                // Detach all observers
stream.reduce((acc, value, i) => {}, initial)  // Reduce values into a new stream
stream.if(equals, isTrue, isFalse)             // Conditional value based on equality
```


## HTTP `s.http`

The `s.http` method perform HTTP requests with minimal boilerplate. Built on top of XMLHttpRequest, it offers a promise-based interface for asynchronous operations, supporting common HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD) and customizable request configurations.

```js
const status = { loaded: 0, total: 0 }
const x = (await s.http.put('/url', {
  body: file,
  responseType: 'text',
  config: xhr => xhr.upload.addEventListener('progress', e => {
    status.loaded = e.loaded
    status.total = e.total
    s.redraw()
  })
}).xhr).getResponseHeader('ETag').slice(1, -1)
```

### Request Methods

```js
s.http({})
s.http('/url', {})
s.http.get({})
s.http.put({})
s.http.post({})
s.http.patch({})
s.http.delete({})
s.http.head({})
```

### Request Options

All the standard configuration options for HTTP requests are avaiable, with additional sin specifics.

```js
s.http({
  url: '',                  // Request URL, can also be defined as first argument
  method: 'GET',            // HTTP method 'HEAD' | 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'
  redraw: true,             // Trigger redraw after resolution
  responseType: 'json',     // '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text'
  query: {},                // Query parameters (default: {})
  body: undefined,          // Request body data (default: undefined)
  user: undefined,          // Username for HTTP authorization (default: undefined)
  pass: undefined,          // Password for HTTP authorization (default: undefined, avoid due to plaintext)
  headers: {},              // Request headers (default: {})
  timeout: 0,               // Request timeout in milliseconds (default: 0, no timeout)
  config: (xhr) => {},      // Custom XMLHttpRequest configuration
})
```

# DOM Helpers

Sin provides dom helper methods that can be used to improve interfacing on the element (vnode) level.

### is `s.is.<alias>`

The `s.is.*` object contains read-only getter/setter references assigned at runtime. Entries on `s.is` will return a `boolean` of either `true` or `false` and maintained internally by Sin.

```js
// Whether or not code is executing on server.
s.is.server

// All CSS Aliases are exposed on s.is
s.is.mobile
s.is.tablet
s.is.desktop
```

### on `s.on(...)`


[![Flems](https://img.shields.io/badge/flems-sandbox-playground?labelColor=34454d&color=cdcdcd&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjY2NCA5LjE2TDE4LjIxNiAzLjczNkMxOC4xMiAzLjYxNiAxNy45NTIgMy41NDQgMTcuODA4IDMuNTQ0SDE3LjEzNkMxNi4zMiAzLjU0NCAxNS41NzYgNC4wNzIgMTUuMzEyIDQuODY0TDE0LjI4IDcuOTZDMTQuMjA4IDguMiAxNC4zNzYgOC40NjQgMTQuNjQgOC40NjRIMTYuNDY0QzE2LjcyOCA4LjQ2NCAxNi44OTYgOC43MDQgMTYuODI0IDguOTQ0TDE2LjEwNCAxMS4xMjhDMTYuMDA4IDExLjM2OCAxNS43OTIgMTEuNTM2IDE1LjUyOCAxMS41MzZIMTMuNTM2QzEzLjI3MiAxMS41MzYgMTMuMDU2IDExLjcwNCAxMi45NiAxMS45NDRMMTEuNDk2IDE2LjM4NEMxMS4wNCAxNy43MjggMTAuMDMyIDE4Ljc2IDguNzU5OTkgMTkuMjRDOS4wMjM5OSAxOS41MjggOS4yNjM5OSAxOS41MjggOS40MzE5OSAxOS41MjhIMTQuNzEyQzE0Ljg4IDE5LjUyOCAxNS4wMjQgMTkuNDggMTUuMTQ0IDE5LjM2TDIzLjY2NCAxMC44NEMyNC4xMiAxMC4zODQgMjQuMTIgOS42MTYgMjMuNjY0IDkuMTZaTTkuNjk1OTkgMTIuMDRDOS43Njc5OSAxMS44IDkuNTc1OTkgMTEuNTM2IDkuMzM1OTkgMTEuNTM2SDcuNTM1OTlDNy4yOTU5OSAxMS41MzYgNy4xMjc5OSAxMS4yOTYgNy4xOTk5OSAxMS4wOEw3Ljk0Mzk5IDguODcyQzguMDE1OTkgOC42MDggOC4yMzE5OSA4LjQ2NCA4LjQ5NTk5IDguNDY0SDEwLjQ0QzEwLjcwNCA4LjQ2NCAxMC45MiA4LjI5NiAxMS4wMTYgOC4wNTZMMTIuNDggMy42MTZDMTIuOTEyIDIuMjcyIDEzLjk0NCAxLjI0IDE1LjIxNiAwLjc2QzE1LjEzMjkgMC42NjQ0NTcgMTUuMDI5MyAwLjU4ODkyNiAxNC45MTMgMC41MzkwNTRDMTQuNzk2NiAwLjQ4OTE4MyAxNC42NzA1IDAuNDY2MjYgMTQuNTQ0IDAuNDcySDkuMjg3OTlDOS4xNDM5OSAwLjQ3MiA4Ljk3NTk5IDAuNTIgOC44Nzk5OSAwLjY0TDAuMzU5OTkgOS4xNkMwLjI0ODIzNyA5LjI2OTUgMC4xNTk0NTYgOS40MDAxOSAwLjA5ODg0NzEgOS41NDQ0M0MwLjAzODIzNzkgOS42ODg2NiAwLjAwNzAxOTA0IDkuODQzNTUgMC4wMDcwMTkwNCAxMEMwLjAwNzAxOTA0IDEwLjE1NjUgMC4wMzgyMzc5IDEwLjMxMTMgMC4wOTg4NDcxIDEwLjQ1NTZDMC4xNTk0NTYgMTAuNTk5OCAwLjI0ODIzNyAxMC43MzA1IDAuMzU5OTkgMTAuODRMNS43ODM5OSAxNi4yNjRDNS45MDM5OSAxNi4zODQgNi4wNDc5OSAxNi40NTYgNi4xOTE5OSAxNi40NTZINi44Mzk5OUM3LjY1NTk5IDE2LjQ1NiA4LjM5OTk5IDE1LjkwNCA4LjY2Mzk5IDE1LjEzNkw5LjY5NTk5IDEyLjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://flems.io/https://gist.github.com/panoply/c662596e14c94ca238ea063754cfad9b)


The `s.on` helper is a DOM Event listener which is forwarded to `addEventListener` event. This helper returns a function and can be passed to the element `{ dom }` as a callback.

```js
s`pre`({
  dom: s.on(window, 'keydown', (event, dom) => {

    dom.append(`Pressed: ${event.key}`)  // prints the key typed

  })
})
```

### `p(...)`

Sin has `p()` available in globalThis context which is a great log helper. Unlike native `console.*` methods `p` is designed as a pass-through interceptor, so content gets returned.

```js
// Numbers called within p() will be returned and also logged to console

const x = 333 + p(333) // x -> 666
const v = p(x) / 2     // v -> 333
```

### animate `s.animate(...)`

CSS Animation DOM helper utility

```js
s`
  [animate=entry] {
    opacity 1
  }

  [animate=exit] {
    opacity 0
  }
`({
  dom: s.animate
})
```

# Trust ```s.trust`` ```

Forgiving HTML or SVG strings into unescaped HTML or SVG.

```js
s.trust`<small>In the den of Sin</small>`   // Literal Expression
s.trust(`<h1>Woe to the wicked!</h1>`)      // Function Expression
```