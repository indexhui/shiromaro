import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import Option from './components/Option'
import { FaceProvider } from 'store/FaceContext'
import theme from 'theme/theme'

import Router from 'routes'

// import theme from 'theme/theme'
// import { ColorModeSwitcher } from './ColorModeSwitcher'
// import { Logo } from './Logo'

export const App = () => (
  <ChakraProvider theme={theme}>
    <FaceProvider>
      <Router />
    </FaceProvider>
    {/* <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex w="500px" h="800px">
        <Option />
      </Flex>
    </Flex> */}
  </ChakraProvider>
)
