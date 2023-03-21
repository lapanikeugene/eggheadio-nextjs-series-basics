import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

//custom layouts with types. 
type NextPageWithLayout = NextPage & {
  getLayout: (page:ReactElement) => ReactNode;
}
// ✍️ import the custom layout
type AppPropsWihLayout= AppProps & {
  Component:NextPageWithLayout; 

}
const App = ({ Component, pageProps }: AppPropsWihLayout) => {
  // ✍️ wrap the Component with the custom layout

  const getLayout = Component.getLayout ?? ((page)=>page);
  const Comp = Component as any
  return (
    <ChakraProvider>
      {getLayout(<Comp {...pageProps} />)}
    </ChakraProvider>
  )
}

export default App
