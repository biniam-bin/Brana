import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Blocks/Layout'
import HomePage from '../components/Pages/HomePage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Brana</title>
          <meta name="description" content="Onlne art gallery" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage/>
      </div>
    </Layout>
  )
}
