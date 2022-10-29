import React from 'react'
import { HeaderContainer } from './style'
import { AiOutlineShoppingCart } from "react-icons/ai"
function Header() {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <h2>BRANA</h2>
        </div>
        <div className="cart">
          <AiOutlineShoppingCart />
        </div>

      </HeaderContainer>
      <span>Hello Biniam</span>
    </>
  )
}

export default Header