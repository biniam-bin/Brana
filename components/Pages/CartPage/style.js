import styled from "styled-components";

export const CartContainer = styled.div`
min-height: 65vh;
min-height: 65vh;
display: flex;
justify-content: space-between;
width: 100%;
/* background: red; */
table{
    /* background: blue; */
    margin-top: 30px;
    width: 60%;
    max-width: 700px;
    th, td{
        text-align: left;
    }
    
    
    thead{
        /* font-weight: 600; */
        color: #5A5A5A;
        tr{
            border: 1px solid #D3D3D3;
        }
    }
    .hr{
        height: 1px;
        width: 100%;
        /* background: red; */
        margin: 10px 0;
    }
    .close-btn{
        color: gray;
        font-weight: 800;
        cursor: pointer;
        font-size: 18px;
    }
    .p-container{
        color: gray;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: #808080;
        img{
            height: 60px;
            width: 60px;
        }
        span{
            margin-left: 10px; 
        }
    }
    .price{
        font-size: 15px;
        font-weight: 800;
        color: #5A5A5A;
    }
}


`

export const CartSummaryContainer = styled.div`
    width: 100%;

`

export const CartTotalContainer = styled.div`


    /* background: red; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 500px;
    padding: 15px 0;
    max-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    h2{
        margin: 0;
        color: #5A5A5A;
    }
    .price{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        p{
            margin: 2px;
            font-size: 15px;
            font-weight: 800;
            color: #5A5A5A;
        }
    }
    span{
        margin: 30px;
        color: #ffa500;
        text-align: center;
    }


    .btn{
        background-color: #ffa500;
            color: white;
            padding: 10px 40px;
            cursor: pointer;
            
            :hover{
                background-color: #ff8c00;

            }
    }


`
