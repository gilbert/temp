export const stackTrace = Symbol('stackTrace')

export const emptyObject = Object.freeze({})

export const emptyArray = Object.freeze([])

export const resolved = Promise.resolve()

export const hasOwn = {}.hasOwnProperty

export const tags = 'a,div,span,p,img,h1,ul,li,table,form,abbr,acronym,address,area,article,aside,audio,b,base,bdi,bdo,big,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,dl,dt,em,embed,fieldset,figcaption,figure,footer,h2,h3,h4,h5,h6,head,header,hr,html,i,iframe,ins,kbd,label,legend,link,main,map,mark,meta,meter,nav,noscript,object,ol,optgroup,option,output,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,strong,style,sub,summary,sup,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,var,video,wbr'.split(',');

export function cleanSlash(x) {
  return x && String(x).replace(/\/+/g, '/').replace(/(.)\/\*?$/, '$1')
}

export function cleanHref(x) {
  return x && cleanSlash(x).replace('/?', '?')
}

export function notValue(x) {
  return !x && x !== 0 && x !== ''
}

export function snake(x) {
  return x.replace(/(\B[A-Z])/g, '-$1').toLowerCase()
}

export function isObservable(x) {
  return x && isFunction(x.observe)
}

export function isFunction(x) {
  return typeof x === 'function'
}

export function isPromise(x) {
  return x && isFunction(x.then)
}

export function isEvent(x) {
  return x.charCodeAt(0) === 111 && x.charCodeAt(1) === 110 // on
}

export function isTagged(x) {
  return x && Array.isArray(x.raw)
}

export function tryPromise(x, fn) {
  return isPromise(x)
    ? x.then(x => fn(x, true))
    : fn(x)
}

export function asCssVar(x) {
  return x.charCodeAt(0) === 36 // $
    ? '--' + x.slice(1)
    : x.charCodeAt(0) === 45 && x.charCodeAt(1) === 45 // -
    ? x
    : null
}

export function ignoredAttr(x) {
  return x === 'dom' || x === 'type' || x === 'value' || x === 'key' || x === 'href' || x === 'class' ||
         x === 'className' || x === 'data' || x === 'style' || x === 'deferrable' || x === 'is' || x === 'handleEvent'
}

export function getName(x) {
  while (x.parent && !x.name)
    x = x.parent
  return x.name
}

export function getId(x) {
  while (x.parent && !x.id)
    x = x.parent
  return x.id
}

export function getClasses(x) {
  let s = x.classes || ''
  while (x.parent) {
    x = x.parent
    s += ' ' + x.classes || ''
  }
  return s
}

export function className(view) {
  return (classes(view.attrs.class) + classes(view.attrs.className) + getClasses(view.tag)).trim()
}

export function asArray(x) {
  return Array.isArray(x) ? x : [x]
}

export function noop() {
  // noop
}

export function styleProp(x) {
  return asCssVar(x) || (
    x === 'cssFloat'
      ? 'float'
      : snake(x)
  )
}

function classes(x) {
  return isObservable(x) || isFunction(x)
    ? classes(x())
    : !x
    ? ''
    : typeof x === 'object'
    ? classObject(x)
    : x + ' '
}

function classObject(x) {
  let c
  for (const cls in x)
    if (x[cls]) c = c == null ? cls : [c, cls].join(' ')
  return c || ''
}

export function scrollSize(w, h) {
  w
    ? document.documentElement.style.setProperty('min-width', w + 'px')
    : document.documentElement.style.removeProperty('min-width')
  h
    ? document.documentElement.style.setProperty('min-height', h + 'px')
    : document.documentElement.style.removeProperty('min-height')
}

export function scrollRestore(x, y, w, h) {
  scrollSize(w, h)
  window.scrollTo(x || 0, y || 0)
}

export function mergeTag(a, b) {
  if (!b || !b.tag)
    return a

  if (!a || !a.tag)
    return (a.tag = b.tag, a)

  a.tag = {
    id: b.tag.id || a.tag.id,
    name: b.tag.name || a.tag.name,
    classes: (a.tag.classes ? a.tag.classes + ' ' : '') + b.tag.classes,
    args: b.tag.args,
    vars: b.tag.vars,
    parent: a.tag
  }

  return a
}
