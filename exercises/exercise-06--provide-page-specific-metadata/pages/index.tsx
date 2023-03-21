// ✍️ import Head from 'next/head'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const Home = () => {
  return (
    <ChakraProvider>
      {/* ✍️ add title and description using the Head component */}
      <Head>
        {/* key makes tag unique. other tags with same tags will be discarded */}
        <title key={'title'}>Title</title>
      </Head>
      <Heading w="full" textAlign="center">
        This is our homepage content!
      </Heading>
    </ChakraProvider>
  )
}
export default Home
