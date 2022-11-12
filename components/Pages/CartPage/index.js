import React from 'react'
import { CartContainer, CartSummaryContainer, CartTotalContainer } from './style'
import { SlClose } from "react-icons/sl"

export const CartSummary = () => {
    return (
        <CartSummaryContainer>

            <div>

                <table>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>

                            <div className="hr"></div>

                        </tr>
                        <tr>

                            <td>
                                <span className="close-btn">

                                    <SlClose />
                                </span>
                            </td>
                            <td>
                                <div className="p-container">
                                    <img src="/el.jpg" alt="" />
                                    <span>War horse</span>
                                </div>
                            </td>
                            <td><span className="price">$220 (19, 500 ETB)</span></td>
                        </tr>
                        <tr>

                            <td>
                                <span className="close-btn">

                                    <SlClose />
                                </span>
                            </td>
                            <td>
                                <div className="p-container">
                                    <img src="/el.jpg" alt="" />
                                    <span>War horse</span>
                                </div>
                            </td>
                            <td><span className="price">$220 (19, 500 ETB)</span></td>
                        </tr>
                    </tbody>
                    {/* <tfoot>
                    <tr>
                        <th scope="row" colspan="2">Total</th>
                        <td colspan="2">$4,800 (52, 300ETB)</td>
                    </tr>
                </tfoot> */}
                </table>
            </div>
        </CartSummaryContainer>
    )
}

const CartTotal = () => {
    return (
        <CartTotalContainer>
            <h2>Total</h2>
            <div className="price">

                <p>$440</p>
                <p>or</p>
                <p>39,000ETB</p>
            </div>
            <span>Shipping cost will be calculated on checkout</span>
            <div className="btn">Checkout</div>
        </CartTotalContainer>
    )
}
function CartPage() {
    return (
        <CartContainer><CartSummary /><CartTotal /></CartContainer>
    )
}

export default CartPage