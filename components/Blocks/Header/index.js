import React, {useState} from 'react'
import { CartConainer, HeaderContainer } from './style'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import Link from "next/link"

const Cart = ({showCart}) => {
  return (
    <CartConainer showCart={showCart}>
      dfvc
    </CartConainer>
  )
}


function Header() {
  const [showCart, setShowCart] = useState(false)
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <Link href="/">
          <h2>BRANA</h2>
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
      <span>Hello Biniam</span>
      {/* <Cart showCart={showCart} /> */}
    </>
  )
}

export default Header