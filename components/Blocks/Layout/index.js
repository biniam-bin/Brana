import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { LayutContainer } from "./style"


function Layout({ children }) {
    return (
        <>
            <LayutContainer>
            <Header />

            {children}
            </LayutContainer>
            <Footer />
        </>
    )
}

export default Layout