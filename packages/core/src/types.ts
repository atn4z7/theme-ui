import { ThemeUIStyleObject, CSSObject } from '@theme-ui/css'

import { ThemeUIJSX } from './jsx-namespace'

/**
 * The `sx` prop accepts a `SxStyleProp` object and properties that are part of
 * the `Theme` will be transformed to their corresponding values. Other valid
 * CSS properties are also allowed.
 */
export type SxStyleProp = ThemeUIStyleObject

export interface SxProps {
  /**
   * The sx prop lets you style elements inline, using values from your
   * theme. To use the sx prop, add the custom pragma as a comment to the
   * top of your module and import the jsx function.
   *
   * ```ts
   * // @jsx jsx
   *
   * import { jsx } from 'theme-ui'
   * ```
   */
  sx?: SxStyleProp
  css?: CSSObject
}

export interface IntrinsicSxElements {
  p: ThemeUIJSX.IntrinsicElements['p']
  b: ThemeUIJSX.IntrinsicElements['b']
  i: ThemeUIJSX.IntrinsicElements['i']
  a: ThemeUIJSX.IntrinsicElements['a']
  h1: ThemeUIJSX.IntrinsicElements['h1']
  h2: ThemeUIJSX.IntrinsicElements['h2']
  h3: ThemeUIJSX.IntrinsicElements['h3']
  h4: ThemeUIJSX.IntrinsicElements['h4']
  h5: ThemeUIJSX.IntrinsicElements['h5']
  h6: ThemeUIJSX.IntrinsicElements['h6']
  img: ThemeUIJSX.IntrinsicElements['img']
  pre: ThemeUIJSX.IntrinsicElements['pre']
  code: ThemeUIJSX.IntrinsicElements['code']
  ol: ThemeUIJSX.IntrinsicElements['ol']
  ul: ThemeUIJSX.IntrinsicElements['ul']
  li: ThemeUIJSX.IntrinsicElements['li']
  blockquote: ThemeUIJSX.IntrinsicElements['blockquote']
  hr: ThemeUIJSX.IntrinsicElements['hr']
  table: ThemeUIJSX.IntrinsicElements['table']
  tr: ThemeUIJSX.IntrinsicElements['tr']
  th: ThemeUIJSX.IntrinsicElements['th']
  td: ThemeUIJSX.IntrinsicElements['td']
  em: ThemeUIJSX.IntrinsicElements['em']
  strong: ThemeUIJSX.IntrinsicElements['strong']
  div: ThemeUIJSX.IntrinsicElements['div']
  del: ThemeUIJSX.IntrinsicElements['div']
  inlineCode: ThemeUIJSX.IntrinsicElements['div']
  thematicBreak: ThemeUIJSX.IntrinsicElements['div']
  root: ThemeUIJSX.IntrinsicElements['div']
}
