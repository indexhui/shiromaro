import {
  extendTheme,
  // theme as base,
  // theme as origTheme,
} from '@chakra-ui/react'
import colors from './colors'
import textStyles from './textStyles'
// import Button from './components/button'

import semanticTokens from 'theme/semanticTokens'

const theme = extendTheme({
  // config,
  textStyles,
  semanticTokens,
  colors,
})

export default theme
