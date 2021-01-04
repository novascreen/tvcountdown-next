import { ChakraProvider } from '@chakra-ui/react'
import { Container } from 'components/App/Container'
import { Header } from 'components/App/Header'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { theme } from 'styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>TVCountdown</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
        ></link>
        <meta name="theme-color" content="#ffffff" />
      </Head>{' '}
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Container height="100vh">
            <Header />
            <Component {...pageProps} />
          </Container>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
