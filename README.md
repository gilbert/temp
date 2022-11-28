<img align="center" width="100%"
  alt="Finally a proper marriage of HTML, CSS & JS"
  src="sin.svg?sanitize=true"
/>

# Sin

Sin merges HTML, CSS & Javascript to form a highly composable framework that'll cheer you up and never get in your way.

## The "Sintax"

```js
s`[tagName][#id][...classNames]
  [...styles]
`(
  [attributes],
  [...children]
)
```

Sin relies heavily on tagged templates to strip aways as much visual clutter as possible while still being basic Javascript needing no compilation to run. No more XMLy syntax and css is relieved from its colons and semicolons (if you want to). The most used css properties are even available by their initials as shorthands. If you feel like skipping units, like px or deg Sin will also happily add these for you.

## The Components

All components in Sin are made to allow overriding styles anywhere they're used. The beauty of the Sin component model is that you will never have to change your callsite usage, even if you need to advance the complexity of your component.

## The Styled Component ```s`` ```

The styled component is the most basic form of component in Sin. It has no logic, but only defines the tag name and styles.
```js
// Definition
const wonderButton = s`button
  background hotpink
`

// Usage
wonderButton({
  onclick: () => alert('Are you really using alert? Hell yeah!')
},
  'My wonderful button!'
)

```


## The Stateless Component `s(fn)`
```js
// Definition
const wonderButton = s(({ onclick, ...attrs }, children) => 
  s`button
    background hotpink
  `({
    ...attrs,
    onclick: e => {
      alert('I was clicked')
      onclick(e)
    }
  }
    children
  )
)

// Usage
wonderButton({
  onclick: () => alert('Are you really using alert? Yuck!')
},
  'My wonderful button!'
)
```

## The Stateful Component `s(fn => fn)`

## The Async Component `s(init, error, loading)`

## Routing `s.route`

Sin includes the most `get out of your way` router possible. There is always a scoped router available in context which let's you implement routing (as nested as you like) — not being concerned about the mount point. Using `href` is highly encouraged and the default way of telling Sin to route away. Every sin `route` instance even has a sweet .toString method, so you can simply do `href: route + 'sub-page'`. You can also use `route.has()` if you want to highlight which route is active, and if that's too boring Sin sets an `[active]` attribute for you to use for styling.

Ok, enough talk - here's an example

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

## The Helpers

### Media queries

### CSS units

### CSS property shorthands

### 

## Web3

Sin was born to be Web3! It even has a pyramid shaped logo, so it'll fit right in!
