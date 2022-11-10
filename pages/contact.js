import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Blocks/Layout'
import ContactPage from '../components/Pages/ContactPage'



function contact() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Contact us</title>
                    <meta name="description" content="Brana | contact us page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <ContactPage/>
                {/* <div>contact</div> */}
            </div>
        </Layout>
    )
}

export default contact