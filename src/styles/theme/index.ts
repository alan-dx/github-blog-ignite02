import { ChakraTheme, extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'
import { fonts } from './fonts'
import { layerStyles } from './layerStyles'
import { styles } from './styles'
import { textStyles } from './textStyles'

type DefaultTheme = Partial<ChakraTheme>

const defaultTheme: DefaultTheme = {
  colors,
  fonts,
  styles,
  textStyles,
  layerStyles,
  components,
}

const theme = extendTheme(defaultTheme)

export default theme
