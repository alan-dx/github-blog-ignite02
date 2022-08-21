import { ChakraTheme, extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'
import { global } from './styles'
import { textStyles } from './textStyles'

type DefaultTheme = Partial<ChakraTheme>

const defaultTheme: DefaultTheme = {
  colors,
  fonts,
  styles: {
    global,
  },
  textStyles,
}

const theme = extendTheme(defaultTheme)

export default theme
