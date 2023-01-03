import { MantineThemeOverride } from '@mantine/core'

export default {
  colorScheme: 'light',
  colors: {
    deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
    blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
  },
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    sizes: {
      h1: { fontSize: '2rem' },
    },
  },
  globalStyles: () => ({
    'html, body': {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      backgroundColor: '#E2E8F0',
      margin: '0 auto',
    },
    'html *': {
      boxSizing: 'border-box',
    },
    'main, header, footer': {
      display: 'flex',
      alignItems: 'center',
    },
    section: {
      backgroundColor: 'white',
      borderRadius: '0.25rem',
      padding: '1rem',
      boxShadow:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
  }),
} as MantineThemeOverride
