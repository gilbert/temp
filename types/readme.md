# Typings from Sin

This directory contains Sin types.

> **NOTE** <br>
> This directory exists in isolation. Despite being part of the sin code base it is excluded from packaging when publishing to the NPM/Deno registry. Refer to the root [package.json](/package.json) file for additional context.

# Generation

Types need to be generated and will be concatenated to a single distribution declaration file. The resulting output file `sin.d.ts` is written to the [root](../) directory. There is a single command available excluding the targeted command available from root.

```bash
$ <pnpm|npm> build           # Executing from within this directory
$ <pnpm|npm> build:types     # Executing from root directory
```

### Maps


> **NOTE** <br>
> We will only work with what `lib.dom.d.ts` provides and refine to our appropriation within sin.

# Usage

The **default export** will suffice for majority of use cases, however for more custom implementations, you can use rhe `S` namespace export which provides isolation access to types. You can use the `S` namespace for extending Sin logic.

```ts
import type { S } from 'sin';

S.Mount
S.CSS
S.Component
S.Live
S.Context
S.Route
S.Http
S.Signal
S.Redraw
S.View
```

# Limitations of Template Literal/s

Template literals cannot be fully typed in TypeScript without involving a TypeScript plugin. This is a limitation within TypeScript itself, not an issue with the generated declaration for Sin. However, there are two distinct workarounds available for TypeScript users who choose to use HyperScript syntactical formats.

First, let me explain what this limitation entails and how it can be resolved using the **default** literal format. Next, I'll discuss the countermeasure currently in place for auto-typing.

> **FWIW** <br>
> The limitation is specific to markup, and while it may be an inconvenience, it will _typically_ go unnoticed by developers.

### Default Literal/s of HTMLElement

In Sin, the **default** approach for components and nodes is to define element names and associated CSS classes within the template strings array, for example:

```js
// Defining an input element
//
s`input`({ type: 'text', value: 'sinner' }) // => <input type="text" value="sinner">
```

When using the default syntax of Sin, we cannot obtain the tag name context (`input` in this case) from the tag literal. As a result, we are unable expose or validate tag-specific attributes, so only global attribute definitions will be provided by intelliSense when writing literal syntactics. In the `input` example above, attributes like `value` or `type` are not included in the auto-completion list and invalid attributes can be freely applied without triggering errors.

### 😀 Type Asserted Element Literals

Attributes that are tag-specific, such as `src` for `<img>` or `type` for `<input>`, can apply type assertions when you require or prefer strictly typed logic. By using type assertions, you can leverage the HTMLElement specifics from the `lib.dom.d.ts` declaration, providing the necessary context for type adherence.

```ts
// Type asserted expression for element literal syntactics
//
s<HTMLInputElement>`input`({ type: 'text', value: 'sinner' });
```

# Description Annotations

Descriptions are required, and it is encouraged to use [JSDoc](https://jsdoc.app) comment annotation formats. To ensure maximum IDE coverage, avoid using Markdown code blocks for examples. Instead, just use the `@example` JSDoc tag, as it is typically the most widely supported by various text editor Language Server Protocol (LSP) implementations and it behaves the same way without creating too much noise.

### Paragraphical Descriptors

Follow the below format for type descriptions.

```js
/**
 * Example Title (optional)
 *
 * Either a line or paragraph describing the type. This is common
 * from all typings. Markdown `code`, _italic_ and **bold**
 * are accepted including [link](https://sinjs.com) syntaxes
 * and either numbered or dash lists.
 *
 * 1. Do not use emojis
 * 2. Do not use markdown tables
 * 3. Do not use markdown codeblocks
 * 4. Do not use triple dash horizontal rules
 *
 * > Use a quoted block for notes descriptions but always
 * > apply after title and/or description. Only jsdoc tag
 * > should follow quotes blocks.
 */
```

### JSDoc Tags

Use the following jsdoc tags for more detailed descriptors.

```js
/**
 * Use {@link Name} to reference another type.
 *
 * @deprecated
 * When using deprecated tag description is optional but preferred.
 *
 * @param name
 * Description accompanies the param tag on newlines
 *
 * @example
 * s`h1`('Example tag must be expressed last and never before param.')
 */
```


# Testing

Declaration tests are located within the [test](/types/test/) directory. The generated `sin.d.ts` is referenced and the generated module within the workspace is imported from root.

