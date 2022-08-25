import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '~/@types'
import theme from '~/styles/theme'

interface IAppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: IAppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ChakraProvider theme={theme} >
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
