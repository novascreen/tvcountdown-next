import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import defaultTheme from '@chakra-ui/theme'

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
    light: {
      text: defaultTheme.colors.gray[900],
      textSubtle: defaultTheme.colors.gray[600],
      bg: defaultTheme.colors.gray[50],
      bgCard: defaultTheme.colors.white,
    },
    dark: {
      text: defaultTheme.colors.gray[100],
      textSubtle: defaultTheme.colors.gray[400],
      bg: defaultTheme.colors.gray[800],
      bgCard: defaultTheme.colors.gray[700],
    },
  },
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
        color: `${props.colorMode}.text`,
      },
    }),
  },
})
