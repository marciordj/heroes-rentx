import { createStitches } from 'stitches-native';

export const { styled, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      primaryRed: '#F2264B',
      primaryBlack: '#000000',
      primaryDark: '#313140',
      primaryGrey: '#B7B7C8',
      primarySilver: '#F8F8F8',
      primaryWhite: '#FFF'
    }
  }
})