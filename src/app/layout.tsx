import {ThemeProvider} from '@mui/material/styles';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';

import {App} from '@/components/App';
import {theme} from '@/theme';

import './global.css';

export const metadata = {
  title: 'ARPG',
  description: ''
}

interface LayoutProps {
  children: React.ReactNode
}

export default ({children}: LayoutProps) => (
  <html lang="en" style={{scrollPaddingTop: 64}}>
    <head>
      <meta property='og:title' itemProp='name' content={metadata.title} />
      <meta property='og:description' itemProp='description' content={metadata.description} />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Questrial&display=swap' />
    </head>
    <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <App>{children}</App>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

