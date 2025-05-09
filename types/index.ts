// @ts-nocheck

import type { Statefull, Stateless } from './files/Components'
import type { Sin } from './files/Sin'
import type { View } from './files/View';
import type { EventHandler } from './files/HtmlEventListeners'


declare global {

  namespace S {
    export declare const Component: import('./files/Components').Component;
    export declare const Http: import('./files/Http').Http;
    export declare const Live: import('./files/Live').SinLive;
    export declare const View: import('./files/View').View;
    export declare const Route: import('./files/Route').Route;
    export declare const Mount: import('./files/Mount').Mount;
    export declare const Event: import('./files/Listeners').Listener;
    export declare const On: import('./files/Listeners').On;
    export declare const CSS: import('./files/CSS').CSS;
    export declare const Context: import('./files/Context').Context;
    export {
      Statefull,
      Stateless,
      EventHandler
    }
  }

}

declare const s: Sin

export default s
