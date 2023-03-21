import { Heading } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Layout from './Layout'

const Home = () => {
  return (
    <Heading w="full" textAlign="center">
      This is our homepage content!
    </Heading>
  )
}


// nested layout for different pages for example.
Home.getLayout = (page:ReactElement) =>{
  return(
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
