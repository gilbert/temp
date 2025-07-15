


export const Tabs: {
  /**
   * Tabs Container
   *
   * @example
   * // Contains tabbed content
   * Tabs(
   *  Tabs.tab(...)
   * )
   */
  (): s.Component
  /**
   * Tab Item
   */
  tab: s.Component<{
    /**
     * The href route/url
     */
    href: string;
    /**
     * Content to be rendered within a {@type Badge}
     */
    badge?: string | s.Component

  }, string>

}

export const Button: s.Component<{
  /**
   * Renders a tooltip `onpointerover`
   *
   * @default null
   */
  tooltip?: string | string[] | s.Component
  /**
   * Toggle loading state
   *
   * @default false
   */
  loading?: boolean;
  /**
   * Set Primary State (Blue)
   *
   * @default false
   */
  primary?: boolean;
  /**
   * Set Destructive State (Red)
   *
   * @default false
   */
  destructive?: boolean;
  /**
   * Set Transparent State
   *
   * @default false
   */
  transparent?: boolean;
  /**
   * Make the button disabled
   *
   * @default false
   */
  disabled?: boolean;
}>