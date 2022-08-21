import { ChakraTheme, extendTheme } from '@chakra-ui/react'

type DefaultTheme = Partial<ChakraTheme>

const defaultTheme: DefaultTheme = {
  colors: {},
}

const theme = extendTheme(defaultTheme)

export default theme
