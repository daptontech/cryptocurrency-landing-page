import {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import Head from 'next/head'
import CryptocurrencyList from "../components/CryptocurrencyList";
import axios from "axios";
import {SWRConfig} from 'swr';
import FeatureSection from "../components/FeatureSection";

const Home: NextPage = ({fallback}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Cobee Challenge</title>
        <meta name="description" content="Cobee challenge"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <FeatureSection/>
        <SWRConfig value={{fallback}}>
          <CryptocurrencyList/>
        </SWRConfig>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const currencies = await axios.get('/cryptocurrencies')
  return {
    props: {
      fallback: {
        '/cryptocurrencies': currencies.data
      }
    }
  }
}

export default Home
