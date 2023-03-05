import Masthead from '@/components/Masthead'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return(
    <>
      <Masthead path={router.asPath} />
      <Component {...pageProps} />
    </>
  ) 
}
