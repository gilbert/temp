import type { StringUnion, Identity } from "./Utilities";

/**
 * HTTP Parameter Options
 */
export interface Params<T = {}> {
  /**
   * The request method
   *
   * @default 'GET'
   */
  method?: StringUnion<
    | 'HEAD'
    | 'GET'
    | 'PUT'
    | 'POST'
    | 'DELETE'
    | 'PATCH'
  >;
  /**
   * Whether or not to apply redraw upon request resolution.
   *
   * @default true
   */
  redraw?: boolean;
  /**
   * The XMLHttpRequest property responseType is an enumerated string value
   * specifying the type of data contained in the response.
   *
   * @default ""
   */
  responseType?: StringUnion<"" | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text'>;
  /**
   * JSON Content
   *
   * @deprecated
   * @default 'application/json'
   */
  json?: string;
  /**
   * Query Parameters
   *
   * @default {}
   */
  query?: any;
  /**
   * The data to be serialized into the body (for other types of requests).
   *
   * @default undefined
   */
  body?: T;
  /**
   * A username for HTTP authorization.
   *
   * @default undefined
   */
  user?: string;
  /**
   * A password for HTTP authorization. This option is provided for XMLHttpRequest compatibility,
   * but you should avoid using it because it sends the password in plain text over the network.
   *
   * @default undefined
   */
  pass?: string;
  /**
   * Request headers
   *
   * @default {}
   */
  headers?: { [header: string]: string };
  /**
   * Exposes the underlying XMLHttpRequest object for low-level configuration and optional
   * replacement (by returning a new XHR).
   */
  config?: (xhr: XMLHttpRequest) => undefined | void | XMLHttpRequest;
  /**
   * The amount of milliseconds a request can take before automatically being terminated.
   *
   * @default 0
   */
  timeout?: number;
}

/**
 * HTTP request method functions
 *
 * @example
 *
 * s.http.get()
 * s.http.post()
 * s.http.put()
 *
 * // etc etc
 */
export declare class Methods {
  /**
   * HTTP GET Request
   *
   * @example
   *
   * s.http.get('/api/path', {});
   */
  static get<T>(url: string, params?: Omit<Params, 'method'>): Promise<T>;
  /**
   * HTTP POST Request
   *
   * @example
   *
   * s.http.post('/api/path', {});
   */
  static post<T>(url: string, params?: Omit<Params, 'method'>): Promise<T>;
  /**
   * HTTP PUT Request
   *
   * @example
   *
   * s.http.put('/api/path', {});
   */
  static put<T>(url: string, params?: Omit<Params, 'method'>): Promise<T>;
  /**
   * HTTP PATCH Request
   *
   * @example
   *
   * s.http.put('/api/path', {});
   */
  static patch<T>(url: string, params?: Omit<Params, 'method'>): Promise<T>;
  /**
   * HTTP DELETE Request
   *
   * @example
   *
   * s.http.delete('/api/path', {});
   */
  static delete<T>(url: string, params?: Omit<Params, 'method'>): Promise<T>;
  /**
   * HTTP HEAD Request
   *
   * @example
   *
   * s.http.head('/api/path', {});
   */
  static head<T>(url: string, params?: Omit<Params, 'method'>): Promise<T>;
}


/**
 * #### HTTP Method/s
 *
 * Function type/s for the `s.http` method, including `s.http.get`, `s.http.post` etc.
 */
export interface Http extends Identity<typeof Methods> {
  /**
  * HTTP Request
  *
  * @example
  *
  * s.http('/api/path', {
  *  method: 'GET',
  *  redraw: true,
  *  responseType: 'json',
  *  json: 'application/json',
  *  query: {},
  *  body: {},
  *  user: '',
  *  pass: '',
  *  headers: {},
  *  timeout: 0,
  *  config: (xhr) => {},
  * })
  */
  <T>(url: string, params?: Params<T>): Promise<T>;
}
