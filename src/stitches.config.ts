import { indigo, gray } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      ...indigo,
      ...gray,
    },
  },
});

export const globalStyles = globalCss({
  'html, body, div, span, button, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
      boxSizing: 'border-box',
      userSelect: 'none',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section': {
    display: 'block',
    boxSizing: 'border-box',
  },
  '*[hidden]': {
    display: 'none',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
  },
  button: {
    background: 'none',
    cursor: 'pointer',
  },
  a: {
    cursor: 'pointer',
  },
});
