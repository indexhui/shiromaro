// const tokens = {
//   colors: {
//     light: {
//       'bg-default': 'white',
//       'bg-secondary': 'grey.200',
//     },
//     dark: {
//       'bg-default': 'grey.700',
//       'bg-secondary': 'grey.600',
//     },
//   },
// };

const semanticTokens = {
  colors: {
    'bg-default': {
      default: 'blue.300',
      // _dark: tokens.colors.dark['bg-default'],
    },
    'bg-container-main': {
      default: 'blue.600',
      // _dark: tokens.colors.dark['bg-secondary'],
    },
    'bg-container-sub': {
      default: 'blue.400',
      // _dark: tokens.colors.dark['bg-secondary'],
    },
    'container-text': {
      default: 'white',
    },
    'bg-secondary': {
      // default: tokens.colors.light['bg-secondary'],
      // _dark: tokens.colors.dark['bg-secondary'],
    },
    'item-bg': {
      default: 'grey.600',
    },
    'text-title': {
      default: 'grey.600',
    },
    'text-content': {
      default: 'grey.600',
    },
    'brand-color': {
      default: 'orange.500',
    },
    'btn-primary-bg': {
      default: 'orange.500',
    },
    'btn-primary-text': {
      default: 'white',
    },
    'btn-primary-pressed-bg': {
      default: 'white',
    },
    'btn-primary-pressed-text': {
      default: 'orange.500',
    },
  },
  radii: {
    cardLg: '50px',
    cardMd: '20px',
    'radii-button': '10px',
  },
}

export default semanticTokens
