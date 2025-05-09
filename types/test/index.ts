import s from '../../sin'


const div = s`div`; // Literal<HTMLElement>
const section = s`section`; // Literal<HTMLElement>

s.live({ hello: 'world' }).get('hello')

const ev = s.event((e) => console.log(e))

div()

const case1 = s<HTMLAnchorElement>`a`({

}); // ✅ StatelessComponent<HTMLElement>


// const case2 = s`div`(s`div`, s`section`); // ✅ View<Attrs>
const case3 = s`div`(s`div`(), s`section`()); // ✅ View<Attrs>
const case4 = s`div`([ s`div`(), s`section`() ]); // ✅ View<Attrs>
const case5 = s`div
  fs ${90}
`({
  onclick() {},

}, s`div`(), s`section`()); // ✅ View<Attrs>

s('a', [
  s('a', [
    s``()
  ])
])

const caseHyperScript = s('button.btn', { onclick: () => {} }, [
  s('a', { href: '' }, 'click')
])

s('.foo', {  })
// Definition
const button = s`button
  background hotpink
`

// Usage
button(
  { onclick: (e, dom) => alert('sin') },
  'My wonderful button!'
)

s`div`
s`div`('')
s`div`(null)
s`div`(1000)
s`ul`(s`li`('one'), s`li`('two'))
s`ul`([ s`li`('one'), s`li`('two') ])
s`a`({ href: '' }, 'link')
s`a`({ href: '' }, s`span`('link'))

// HyperScript Element Signatures
//
s('div', '')
s('div', 1000)
s('ul', s('li', 'one'), s('li', 'two'))
s('ul', [ s('li', 'one'), s('li', 'two') ])
s('a', { href: '' }, 'link')
s('a', { href: '' }, s`span`('link'))

// Component Function Signatures
//
s(() => s`div`)
s((attrs) => s`div`(''))
s((attrs, children) => [ children])
s((attrs, children, context) => [])
s(() => {

  return ({ ...attrs }, children) => s``(
    children
  )

})

// Component Curried Signatures
//
const a = s`button`
a({ onclick: () => {} }, '')

const b = s(({ prop = 'foo', ...attrs }) => s``(prop))
b({ prop: 'bar' })

const c = s(({ value }) => (attrs, children) => [ children, s`div`(value) ])
c({ value: 'baz' }, 'qux')

const e = s(() => (attrs, children) => children)
e([ s`h1`('hello'), s`h1`('world') ])


const ii = s((attrs1, children1, context1) => {

  return (attrs2, children2, context2) => s``()

});

// Usage with tagged template:
ii`bg red`({ a: 'Login', c: 200 }, s`h1`('xxx'));

// Usage with direct invocation:
ii({ a: 'Login' }, 'Hello');


const wonderButton = s`button
  background hotpink
`

wonderButton({
  onclick: e => {
    alert('I was clicked')
  }
},
 ''
)

const statefull = s(({
  a = '',
  b = false,
  c = 100
}, children) => {


  return () => s`div`(
    {
      onclick: ()=> {}
    },
    'foo'
  )

})


statefull`
  xxx
`({


}, )



const none = s(() => [
  wonderButton({
    onclick: e => {
      alert('I was clicked')

    }
  },
    'd'
  )
])

s('.foo')
const uu = s(({
  onClick,
  foo = '',
  bar = 42,
  baz = false
}, children) =>

  wonderButton({
    onclick: e => {
      alert('I was clicked')
      onClick(e)
    }
  },
    children
  )

);

const x = uu({
  bar: 42,

}, ); // Should provide completions for `onClick`, `foo`, `bar`

x.attrs
uu({ baz: true }); // Allows other attributes

const statelessWonderButton = s(({ onclick, ...attrs }, children) =>
  wonderButton({
    onclick: e => {
      alert('I was clicked')
      onclick(e)
    }
  },
    children
  )
)

const Address = s<{
  street: string,
  street2: string,
  city: string,
  postal_code: string,
  postal_code_position: string,
  area: string,
  att: string,
  vat: string,
  phones: string[],
  emails: string[],
  country_name: string
}>(({
  street,
  street2,
  city,
  postal_code,
  postal_code_position,
  area,
  att,
  vat,
  phones,
  emails,
  country_name
}) =>
  s`.address`(
    s``(s`span.street`(street)),
    street2 && s``(s`span.street2`(street2)),
    postal_code_position === 'after_city_same_line'
      ? s``(s`span.city`(city), ' ', s`span.postal_code`(postal_code))
      : postal_code_position === 'after_city_own_line'
      ? [s`.city`(city), postal_code && s`.postal_code`(postal_code)]
      : !postal_code_position && postal_code
      ? s``(postal_code && s`span.postal_code`(postal_code), postal_code && ' ', s`span.city`(city))
      : s`.city`(city),
    postal_code_position === 'after_area_same_line'
      ? s``(area && s`span.area`(area), area && ' ', s`span.postal_code`(postal_code))
      : postal_code_position === 'after_area_own_line'
      ? [area && s`.area`(area), s`.postal_code`(postal_code)]
      : area && s`.area`(area),
    country_name && s`.country_name`(country_name),
    att && s`.att`('Att: ' + att),
    vat && s`.vat`('VAT: ' + vat),
    phones && s`.phones`(
      phones.map(x =>
        s`a;td underline;mr 8; display inline-block`({ href: 'tel:' + x }, x)
      )
    ),
    emails && s`.emails`(
      emails.map(x =>
        s`a;td underline;mr 8; display inline-block`({ href: 'mailto:' + x }, x)
      )
    )
  )
)


statelessWonderButton({

}, [])

// Usage
statelessWonderButton({
  onclick: () => alert('Are you really using alert? Yuck!')
},
  'My wonderful button!'
)

const wonderStateButton = s(() => {
  let count = 0
  return () => wonderButton({
  onclick: () => count++
  },
  `My wonderful button was clicked ${count} time${0 == count || count > 1 ? "'s" : "" }!`
  )
})

// Usage
wonderStateButton({
  onclick: () => alert('Are you really using alert? Yuck!')
},
  'My wonderful button!'
)


export const Button = s<{}>((attrs, xs) =>
  s`button
    position absolute
    t 50%
    p 7
    br 6
    fs x-large
    c #fefe
    t translateY(-50%)
    tt uppercase
    border none
    cursor pointer
    background rgba(0,0,0,0.5)
    :hover { c hotpink }
  `(
    attrs,
    xs
  )
)

Button``({
  id: ''
})

s(({ autoplay = false, images = [] }, children, context) => {


  const slide = s.live(0)
  const next = s.event(() => slide((slide + 1) % images.length))
  const prev = s.event(() => slide((slide - 1) % images.length))
  const play: any = (interval = 2000) => {
    play.clear = () => play.timer = clearInterval(play.timer)
    play.timer = play.timer || setInterval(next, interval)
    context.onremove(play.clear)
  }



  autoplay !== false && play(typeof autoplay === 'boolean' ? 2000 : autoplay)

  return () => s`div
    br 10
    w 100%
    position relative
    overflow hidden
  `({
    onpointerover: () => autoplay && play.clear(),
    onpointerout: () => autoplay && play()
  },
    s`div
      d flex
      fd row
      translate ${ slide.get(x => -(x * 100) + '%') } 0
      transition translate 0.5s ease
    `(
      images.map(src =>
        s`img
          w 100%
          mw 100%
          h auto
          object-fit cover
          flex-shrink 0
        `({
          src
        })
      )
    ),
    Button`l 10px`({ onclick: prev }, '❮'),
    Button`r 10px`({ onclick: next }, '❯'),
    s`
      position absolute
      d flex
      b 20
      w 100%
      jc center
    `(
      images.map((_, i) =>
        s`
          w 15
          h 15
          br 50%
          m 0 5
          cursor pointer
          bc ${ slide.if(i, 'hotpink', 'white') }
          :hover {
            bc hotpink
          }
        `({
          onclick: slide.set(i)
        })
      )
    )
  )
})

const textfield = s`textarea
  -webkit-appearance none
  appearance none
  bc hsla(200, 50%, 96%, 0.5)
  br 6
  border none
  p 12
  bs inset 0 0.5px 3 rgba(0,0,0,0.25)
  outline none
  transition all 0.3s

  :focus {
    bc white
    bs 0 0 0px 1px var(--blue), inset 0 0.5px 3px rgba(0,0,0,0.25), inset 0 0 0 1px var(--blue)
  }

  ::placeholder {
    o 0.2
    fs 16
    ta left
  }
`


const inferreds  = s(({
  loading = false,
  label = '',
  tooltip = false,
  ...attrs
}, children) =>

  s`button

  `({ ...attrs },
    children.flat().map(x =>
      typeof x === 'string' ? s`span
        ws nowrap
        us none
        lh initial
        visibility ${loading ? 'hidden' : 'visible'}
        overflow hidden
        text-overflow ellipsis
        word-wrap normal
        position relative
      `(x) : x
    )
  )
)

inferreds({

})

export default s(
  ({  accessory, icon, ondelete, onedit, oncopy, ...attrs }, children, context) =>
  s`a
    display flex
    ai center
    position relative
    bc white
    bs 0 1 4 -1 rgba(0,0,0,.35)
    p 6 10
    br 4
    m 10 0
    w 100%
    min-height 40
    word-break break-word
    transition all 0.3s

    &[href]:hover {
      bs 0 1 12 -2 rgba(0,0,0,.25), 0 0 0px 10px hsla(200, 100%, 70%, 0.3)
    }

    @desktop {
      :hover>.accessory>.delete, :hover>.accessory>.edit, :hover>.accessory>.copy {
        o 1
        transform translateX(44px)
      }
    }
  `(attrs,

    children,

    s`.accessory
      position absolute
      t 0
      w 126
      d flex
      fd row
      jc end
      right ${ (onedit || ondelete || oncopy) && 5 }
      clip-path none
      m 5 5 0 0

      @desktop {
        d flex
        fd column
        clip-path inset(-40px -40px -40px 40px)
        right -90
        m 0
      }
    `(
      ondelete && accessory`.delete`({
        onclick: (e) => {
          e.stopPropagation()
          e.preventDefault()
          ondelete(e)
        }
      },
        icon.trash
      ),
      onedit && accessory`.edit`({
        onclick: (e) => {
          e.stopPropagation()
          e.preventDefault()
          onedit(e)
        }
      },
        icon.edit
      ),
      oncopy && accessory`.copy`({
        onclick: (e) => {
          e.stopPropagation()
          e.preventDefault()
          oncopy(e)
        }
      },
        icon.copy
      )
    )
  )
)

const xx = (attrs?: {}, children?: any[]) => (attrs?: {}, children?: any[]) => s``


s(({},ch) => (a, ddd) => [])

s(({
  value: initial,
  focused,
  selected,
  textarea,
  autoexpand = true
}) => ({
  value,
  label,
  onsave,
  type,
  clear = false,
  save = dom => {
    if (value === initial)
      return
    initial = value
    value = type === 'date' && !value ? null : value
    return onsave && onsave(value, dom)
  },
  required,
  ...attrs
}, children) =>
  s`.input
    d flex
    fd column
    position relative
  `({
    onsubmit: e => {
      e.preventDefault()
    }
  },
    label && s`label
      p 2 6
      fs 16
      c #666
    `(
      label,
      required && s`small;ml 4;o 0.6`('*')
    ),
    (textarea
    ? textfield`textarea`
    : textfield`input
      fs 18
      pr ${ (clear && value) ? 40 : 12 }
      [type="number"]::-webkit-outer-spin-button, [type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }
      [type="number"] {
          -moz-appearance: textfield;
      }
    `)({
      autocomplete: 'watthewat',
      type,
      ...attrs,
      required,
      value,
      onpaste: e => {
        textarea && autoexpand && setHeight(e.target)
        const paste = attrs.onpaste && attrs.onpaste(e)
        if (!e.target) {
          const text = (e.clipboardData.getData('text/plain') || '')
          if (text !== text.trim()) {
            document.execCommand('insertText', false, text.trim())
            e.preventDefault()
          }
        }

        return paste
      },
      dom: [
        focused && (dom => dom.focus()),
        selected && (dom => dom.setSelectionRange(0, dom.value.length)),
        dom => {
          textarea && autoexpand && setHeight(dom)
          textarea && (dom.onkeyup = (e) => autoexpand && setHeight(e.target))
          const fn = e => {
            if (!value && !dom.value)
              return

            value = dom.value
            attrs.oninput && attrs.oninput({ target: dom }, dom)
            save(dom)
            window.removeEventListener('beforeunload', fn)
          }
          dom.addEventListener('focus', () => window.addEventListener('beforeunload', fn))
          dom.addEventListener('blur', fn, true)
          dom.addEventListener('submit', fn, true)
          dom.addEventListener('keydown', e => {
            e.key === 'Escape' && (
              e.preventDefault(),
              e.stopPropagation(),
              dom.value = initial,
              dom.blur()
            )
          })
          return () => {
            dom.removeEventListener('blur', fn)
            dom.removeEventListener('submit', fn)
          }
        }
      ].concat(attrs.dom)
    }),
    clear && value && s`
      position absolute
      o 0.5
      r 10
      t ${ label ? '41' : '13'}
      bc gray
      c white
      br 12
      p 4
    `({
      onclick: (e, dom) => {
        dom.id = initial = value = '', save(dom)
        attrs.oninput && attrs.oninput({ target: dom.previousSibling }, dom.previousSibling)
      }
    },
      ''
    ),
    children
  )
)

function setHeight(dom) {
  dom.style.height = 'auto'
  dom.style.height = dom.scrollHeight + 'px'
}

s(({ src }) =>
  s<HTMLImageElement>`img.cover
    transition opacity $d
    [loading] {
       opacity 0
    }
    .error {
      bc #ccc
    }
  `({
    loading: true,
    key: src || '/images/logo.svg',
    src: src || '/images/logo.svg',
    dom: x => x.complete || x.setAttribute('loading', ''),
    onload: (e, dom) => {
      e.redraw = false
      dom.removeAttribute('loading')
    },
    onerror: (e, dom) => {
      e.redraw = false
      dom.classList.add('error')
    }
  })
)
