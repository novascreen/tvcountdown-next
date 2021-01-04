import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

export const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
  colors: {
    black: '#16161D',
    primary: {
      main: '#c62828',
      light: '#ff5f52',
      dark: '#8e0000',
      contrastText: '#fff',
    },
  },
  fonts,
  breakpoints,
})
