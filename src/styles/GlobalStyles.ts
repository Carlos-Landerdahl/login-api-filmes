import { globalCss } from '@stitches/react';

export const GlobalStyles = globalCss({
  // Reset Styles

  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  'html, body': {
    margin: 0,
    padding: 0,
    fontFamily: '$montserrat',
    fontSize: '16px',
    lineHeight: '1.5',
    backgroundColor: '$gray400',
    color: 'black'
  },
  'h1, h2, h3, h4, h5, h6, p, ul, ol, pre, table, blockquote, figure, form, input, button, textarea, select, a, details, img, summary, small, strong, sub, sup':
    {
      margin: 0,
      padding: 0,
      border: 0,
      verticalAlign: 'baseline',
      fontSize: '100%',
      fontWeight: 'normal',
      fontVariantNumeric: 'lining-nums',
      textDecoration: 'none'
    },
  body: {
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  'ul, ol': {
    listStyle: 'none'
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    margin: 0
  },
  'button, input': {
    overflow: 'visible'
  },
  'button, select': {
    textTransform: 'none'
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    WebkitAppearance: 'button'
  },

  // Global Styles

  h1: {
    fontSize: '2rem',
    fontWeight: 'bold'
  }
});
