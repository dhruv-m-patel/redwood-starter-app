import { MantineProvider } from '@mantine/core'

import DefaultTheme from 'src/layouts/default-theme'

export default ({ children }: { children: React.ReactNode }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={DefaultTheme}>
    {children}
  </MantineProvider>
)
