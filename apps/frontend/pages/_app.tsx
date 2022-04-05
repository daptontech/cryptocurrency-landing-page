import type {AppProps} from 'next/app'
import Axios from 'axios';
import {SWRConfig} from 'swr';
import Layout from "../components/Layout";
import './styles.css'

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
const fetcher = (url: string) => Axios.get(url).then(res => res.data)

function MyApp({Component, pageProps}: AppProps) {
  return (
    <SWRConfig value={{
      fetcher,
      refreshInterval: 0
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
