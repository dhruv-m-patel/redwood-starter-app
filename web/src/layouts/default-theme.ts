import { MantineThemeOverride } from '@mantine/core'

export default {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  fontSize: '16px',
  globalStyles: () => ({
    'main, header, footer': {
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
    },
  }),
} as MantineThemeOverride
