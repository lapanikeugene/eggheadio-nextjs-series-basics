import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../theme';
// ✍️ import the ChakraProvider from '@chakra-ui/react'

// ✍️ import the theme from the theme.ts file

const App = ({ Component, pageProps }: AppProps) => {
  // ✍️ wrap the Component with ChakraProvider and set its theme prop to theme
  const Comp = Component as any; 
  return (
  <ChakraProvider theme={theme}>
  <Comp {...pageProps} />
  </ChakraProvider>
  )
}

export default App
