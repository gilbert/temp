/** All known SVG tag names. */
export type SVGTags =
  | "a"
  | "animate"
  | "animateMotion"
  | "animateTransform"
  | "circle"
  | "clipPath"
  | "defs"
  | "desc"
  | "ellipse"
  | "feBlend"
  | "feColorMatrix"
  | "feComponentTransfer"
  | "feComposite"
  | "feConvolveMatrix"
  | "feDiffuseLighting"
  | "feDisplacementMap"
  | "feDistantLight"
  | "feDropShadow"
  | "feFlood"
  | "feFuncA"
  | "feFuncB"
  | "feFuncG"
  | "feFuncR"
  | "feGaussianBlur"
  | "feImage"
  | "feMergeNode"
  | "feMorphology"
  | "feOffset"
  | "fePointLight"
  | "feSpecularLighting"
  | "feSpotLight"
  | "feTile"
  | "feTurbulunece"
  | "filter"
  | "foreignObject"
  | "g"
  | "image"
  | "line"
  | "linearGradient"
  | "marker"
  | "mask"
  | "metadata"
  | "mpath"
  | "path"
  | "pattern"
  | "polygon"
  | "polyline"
  | "radialGradient"
  | "rect"
  | "script"
  | "set"
  | "stop"
  | "style"
  | "svg"
  | "switch"
  | "symbol"
  | "text"
  | "textPath"
  | "title"
  | "tspan"
  | "use"
  | "view"

/** SVG element attributes by tag name with lowercase listener and aria attributes. */
export type SVGAttributes<
  Tag extends string,
  Fallback = SVGAttributesAny
> = [Tag] extends [SVGTags]
  ? Partial<SVGOwnAttributesBy[Tag] & SVGGlobalAttributes & GlobalListeners & ARIAAttributes>
  : Fallback;

/** The all possible attributes that SVG elements can have - in native case. */
export type SVGAttributesAny = Partial<SVGCommonAttributes & SVGGlobalAttributes & GlobalListeners & ARIAAttributes>;
/** Dictionary of SVG attributes by tag in native case. */
export type SVGAttributesBy = {
    [Tag in SVGTags]: SVGAttributes<Tag>;
};
/** SVG attributes in native case available on all SVG elements. */
export interface SVGGlobalAttributes extends SVGGlobalAttributes_core {
}
/** All SVG presentation attributes in native case. They can also be used as CSS properties. */
export interface SVGPresentationAttributes extends Pick<SVGCommonAttributes_core, "alignment-baseline" | "baseline-shift" | "clip" | "clip-path" | "clip-rule" | "color" | "color-interpolation" | "color-interpolation-filters" | "color-rendering" | "cursor" | "d" | "direction" | "display" | "dominant-baseline" | "fill" | "fill-opacity" | "fill-rule" | "filter" | "flood-color" | "flood-opacity" | "font-family" | "font-size" | "font-size-adjust" | "font-stretch" | "font-style" | "font-variant" | "font-weight" | "glyph-orientation-horizontal" | "glyph-orientation-vertical" | "image-rendering" | "letter-spacing" | "letter-spacing" | "marker-end" | "marker-mid" | "marker-start" | "opacity" | "overflow" | "pointer-events" | "shape-rendering" | "stop-color" | "stop-color" | "stroke" | "stroke-dasharray" | "stroke-dashoffset" | "stroke-linecap" | "stroke-linejoin" | "stroke-miterlimit" | "stroke-opacity" | "stroke-width" | "text-anchor" | "text-decoration" | "text-rendering" | "transform" | "transform-origin" | "unicode-bidi" | "vector-effect" | "visibility" | "word-spacing" | "writing-mode"> {
}

/** All attributes that are specific to tags in native case - excluding SVGGlobalAttributes. */
export interface SVGCommonAttributes extends SVGCommonAttributes_core {
}
/** SVG attributes by tags in native case - without global attributes, listeners nor aria. Might allow some more than should. */
export interface SVGOwnAttributesBy {
    a: Pick<HTMLAttributes<"a">, "download" | "href" | "hreflang" | "ping" | "referrerpolicy" | "rel" | "target"> & Pick<SVGCommonAttributes, "type" | "xlink:href">;
    animate: SVGAnimationAttributes_core;
    animateMotion: {
        keyPoints: SVGCommonAttributes["keyPoints"];
        path: SVGCommonAttributes["path"];
        rotate: SVGCommonAttributes["rotate"];
    } & SVGAnimationAttributes_core;
    animateTransform: SVGAnimationAttributes_core;
    circle: SVGPresentationAttributes & Pick<SVGCommonAttributes, "cx" | "cy" | "r" | "pathLength">;
    clipPath: Pick<SVGCommonAttributes, "clipPathUnits">;
    defs: {};
    desc: {};
    ellipse: SVGPresentationAttributes & Pick<SVGCommonAttributes, "cx" | "cy" | "rx" | "ry" | "pathLength">;
    feBlend: Pick<SVGCommonAttributes, "in" | "in2" | "mode">;
    feColorMatrix: Pick<SVGCommonAttributes, "in" | "type" | "values">;
    feComponentTransfer: Pick<SVGCommonAttributes, "in">;
    feComposite: Pick<SVGCommonAttributes, "in" | "in2" | "operator" | "k1" | "k2" | "k3" | "k4">;
    feConvolveMatrix: Pick<SVGCommonAttributes, "in" | "order" | "kernelMatrix" | "divisor" | "bias" | "targetX" | "targetY" | "edgeMode" | "kernelUnitLength" | "preserveAlpha">;
    feDiffuseLighting: Pick<SVGCommonAttributes, "in" | "surfaceScale" | "diffuseConstant" | "kernelUnitLength">;
    feDisplacementMap: Pick<SVGCommonAttributes, "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector">;
    feDistantLight: Pick<SVGCommonAttributes, "azimuth" | "elevation">;
    feDropShadow: Pick<SVGCommonAttributes, "dx" | "dy" | "stdDeviation">;
    feFlood: Pick<SVGCommonAttributes, "flood-color" | "flood-opacity">;
    feFuncA: {};
    feFuncB: {};
    feFuncG: {};
    feFuncR: {};
    feGaussianBlur: Pick<SVGCommonAttributes, "in" | "stdDeviation" | "edgeMode">;
    feImage: Pick<SVGCommonAttributes, "in" | "crossorigin" | "preserveAspectRatio" | "xlink:href">;
    feMergeNode: Pick<SVGCommonAttributes, "in">;
    feMorphology: Pick<SVGCommonAttributes, "in" | "operator" | "radius">;
    feOffset: Pick<SVGCommonAttributes, "in" | "dx" | "dy">;
    fePointLight: Pick<SVGCommonAttributes, "x" | "y" | "z">;
    feSpecularLighting: Pick<SVGCommonAttributes, "in" | "surfaceScale" | "specularConstant" | "specularExponent" | "kernelUnitLength">;
    feSpotLight: Pick<SVGCommonAttributes, "x" | "y" | "z" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "specularExponent" | "limitingConeAngle">;
    feTile: Pick<SVGCommonAttributes, "in">;
    feTurbulunece: Pick<SVGCommonAttributes, "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type">;
    filter: Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "filterUnits" | "primitiveUnits" | "xlink:href">;
    foreignObject: Pick<SVGCommonAttributes, "height" | "width" | "x" | "y">;
    g: SVGPresentationAttributes;
    image: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "href" | "xlink:href" | "preserveAspectRatio" | "crossorigin" | "decoding">;
    line: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x1" | "y1" | "x2" | "y2" | "pathLength">;
    linearGradient: Pick<SVGCommonAttributes, "gradientUnits" | "gradientTransform" | "href" | "spreadMethod" | "x1" | "x2" | "xlink:href" | "y1" | "y2">;
    marker: Pick<SVGCommonAttributes, "markerHeight" | "markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
    mask: Pick<SVGCommonAttributes, "height" | "maskContentUnits" | "maskUnits" | "x" | "y" | "width">;
    metadata: {};
    mpath: Pick<SVGCommonAttributes, "xlink:href">;
    path: SVGPresentationAttributes & Pick<SVGCommonAttributes, "d" | "pathLength">;
    pattern: Pick<SVGCommonAttributes, "height" | "href" | "patternContentUnits" | "patternTransform" | "patternUnits" | "preserveAspectRatio" | "viewBox" | "width" | "x" | "xlink:href" | "y">;
    polygon: SVGPresentationAttributes & Pick<SVGCommonAttributes, "points" | "pathLength">;
    polyline: SVGPresentationAttributes & Pick<SVGCommonAttributes, "points" | "pathLength">;
    radialGradient: Pick<SVGCommonAttributes, "cx" | "cy" | "fr" | "fx" | "fy" | "gradientUnits" | "gradientTransform" | "href" | "r" | "spreadMethod" | "xlink:href">;
    rect: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "rx" | "ry" | "pathLength">;
    script: Pick<SVGCommonAttributes, "crossorigin" | "href" | "type" | "xlink:href">;
    set: Pick<SVGCommonAttributes, "to">;
    stop: Pick<SVGCommonAttributes, "offset" | "stop-color" | "stop-opacity">;
    style: Pick<SVGCommonAttributes, "type" | "media"> & {
        title: string;
    };
    svg: Pick<SVGCommonAttributes, "baseProfile" | "height" | "preserveAspectRatio" | "version" | "viewBox" | "width" | "x" | "y">;
    switch: {};
    symbol: Pick<SVGCommonAttributes, "height" | "preserveAspectRatio" | "refX" | "refY" | "viewBox" | "width" | "x" | "y">;
    text: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    textPath: Pick<SVGCommonAttributes, "href" | "lengthAdjust" | "method" | "path" | "side" | "spacing" | "startOffset" | "textLength">;
    title: {};
    tspan: Pick<SVGCommonAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    use: Pick<SVGCommonAttributes, "href" | "xlink:href" | "x" | "y" | "width" | "height">;
    view: {};
}