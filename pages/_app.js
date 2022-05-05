//IMPORT Chakra
import { ChakraProvider } from '@chakra-ui/react'


//IMPORT GLOBAL CSS
import '../styles/globals.css'
//IMPORT CUSTOM CHAKRA CSS
import customTheme  from '../styles/extendTheme'



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}> {/*we use our own theme: see extendTheme folder in styles*/}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
