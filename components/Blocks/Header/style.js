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
    .cart{
        font-size: 25px;
        cursor: pointer;
        
    }
`

