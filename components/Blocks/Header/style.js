import styled from "styled-components";


export const HeaderContainer = styled.div`

    /* background-color: red; */
    height: 60px;
    position: sticky !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 1);
    z-index: 100;
    /* padding: 10px; */
    color: #3A3B3C;
    .logo{
        color: #3A3B3C;
        h2{

            margin: 0;
        }
    }
    .icons{
        display: flex;
    }
    .icon{
        font-size: 25px;
        cursor: pointer;
        margin-left: 15px;
        .cart-items{
            margin: 0;
            font-size: 13px;
            background-color: #ffa500;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            height: 18px;
            width: 18px;
            position: absolute;
            top: 9px;
            right: -5px;
        }
        .fav-items{
            margin: 0;
            font-size: 13px;
            background-color: #ffa500;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            height: 18px;
            width: 18px;
            position: absolute;
            top: 9px;
            right: 35px;
        }
    }
`

// /////////////////////////////////////////////////////////


export const CartConainer = styled.div`
    background-color: red;
    position: sticky;
    top: 0;
    margin-top: -81px;
    margin-left: auto;
    width: ${props => props.showCart ? `40%` : `0rem`};

    /* height: 100vh; */
    z-index: 200;
    transition: all 1s ease-in-out;


`