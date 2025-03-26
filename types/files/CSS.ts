export interface CSS {
  (...params: any[]): {
    name: string;
    classes: string;
    id: string;
    args: any[];
    vars: {};
    parent: any;
  };
  alias: (k: any, v: any) => string | void;
  reset: (x?: any[], ...xs: any[]) => any;
  unit: (k: any, fn: any) => void | Map<any, any>
}

export interface Units {
  /**
   * The value of `name` and the CSS `property`
   */
  (name: string, callback: (value: string, property: string) => string): void;
  (units: { [name: string]: (value: string, property: string) => string }): void;
}