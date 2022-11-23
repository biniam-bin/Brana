import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Blocks/Layout'
import HomePage from '../components/Pages/HomePage'
import styles from '../styles/Home.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSclice'

export default function Home() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  console.log("Counter Value: " + count);

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
