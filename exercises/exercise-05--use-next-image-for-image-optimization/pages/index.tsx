// ✍️ import the Image component from 'next/image'

// ✍️ import "lazar.png" statically
import src from '@chakra-ui/icon/dist/declarations/src'
import Image from 'next/image'
import lazar from '../lazar.png'
const Home = () => {
  
    /* ✍️ add the lazar image here */
    // image from external url is also possible
    // but need next.config.js
    
   return  (<Image src={lazar} alt={'Lazar'} />)
  
}

export default Home
