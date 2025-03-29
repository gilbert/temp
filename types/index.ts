import type { Identity } from './files/Utilities';
import type { Sin } from './files/Sin'
import type { Component } from "./files/Components";

declare const s: Identity<typeof Sin> & Component

export * from './files/S'
export default s

s<HTMLAnchorElement>({

})