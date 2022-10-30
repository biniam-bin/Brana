import React, {useState} from 'react'
import { CartConainer, HeaderContainer } from './style'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"


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
          <h2>BRANA</h2>
        </div>
        <div className="icons">

          <div className="icon">
            <AiOutlineHeart />
            <div className='fav-items'>5</div>
          </div>
          <div className="icon" onClick={
            () => setShowCart(!showCart)
          }>
            <AiOutlineShoppingCart />
            <div className='cart-items'>2</div>
          </div>
        </div>

      </HeaderContainer>
      <span>Hello Biniam</span>
      {/* <Cart showCart={showCart} /> */}
    </>
  )
}

export default Header