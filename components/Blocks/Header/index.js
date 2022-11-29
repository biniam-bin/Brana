import React, { useState, useEffect } from 'react'
import { CartConainer, HeaderContainer } from './style'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import Link from "next/link"
import Router from "next/router"

import { logout, login } from '../../../features/auth/authSclice'
import { useSelector, useDispatch } from 'react-redux'


const Cart = ({ showCart }) => {
  return (
    <CartConainer showCart={showCart}>
      dfvc
    </CartConainer>
  )
}


function Header() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()


  const [showCart, setShowCart] = useState(false)


  // console.log(user?.displayName)

  const Logout = () => {
    dispatch(logout())
    Router.push('/login')
  }


  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <Link href="/">
            {/* <h2>BRANA</h2> */}
            <Link href="/">
            <img src="/brana-logo.png" alt="" />
            </Link>
          </Link>
        </div>
        <div className="icons">

          <div className="icon">
            <AiOutlineHeart />
            <div className='fav-items'>5</div>
          </div>
          <Link href="/cart">

            <div className="icon" onClick={
              () => setShowCart(!showCart)
            }>
              <AiOutlineShoppingCart />
              <div className='cart-items'>2</div>
            </div>
          </Link>
        </div>

      </HeaderContainer>
      {user?.displayName && <span>Hello, {user?.displayName}!</span>}
      {user?.displayName ?
        <span style={{ marginLeft: "5px", color: "blue", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }} onClick={() => Logout()}>Logout</span>
        :
        <span style={{
          marginLeft: "5px", color: "blue", fontWeight: 700, textDecoration: "underline", cursor: "pointer"
        }}><Link href="/login">Login</Link></span>
      }
      {/* <Cart showCart={showCart} /> */}
    </>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}



export default Header