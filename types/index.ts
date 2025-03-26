import type { Identity } from './files/Utilities';
import type { Sin } from './files/Sin'
import type { Component } from "./files/Components";
import type { Tagged } from "./files/Sintax";

declare const s: Tagged & Component & Identity<typeof Sin>

export * from './files/S'
export default s