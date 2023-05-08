import { createStitches } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro'
    },
    fonts: {
      montserrat: 'Montserrat, sans-serif'
    }
  }
});
