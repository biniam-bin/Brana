import styled from "styled-components";


export const HeroContainer = styled.div`
    height: 400px;
    background-color: black;
    margin: 30px 0;

`

export const CategoriesContainer = styled.div`
    /* background-color: red; */
    margin: 50px 0 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{

        color: #3A3B3C;
        h2{
            margin: 0;
            margin: 40px;
            div{
                background-color: #ff8c00;
                height: 5px;
                margin-top: 8px !important;
                width: 70%;
                margin: 0 auto;
                border-radius: 50px;
            }
        }
    }

`

export const CategoriesWrapper = styled.div`

    /* margin: 70px 0; */
    /* background-color: red; */
    /* max-width: 1100px !important; */
    overflow-x: hide;
    width: 100%;
    ScrollMenu{
        overflow-x: hidden !important;

    }
`


export const CategoryContainer = styled.div`
    background-color: blue;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    img{
        height: 350px;
        width: 280px;
    }
    .info{
        /* background-color: lightgray; */
        backdrop-filter: blur(6px);
        background: rgba(255,255,255,0.5);
        position: absolute;
        bottom: 20px;
        width: 90%;
        margin: auto auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        h3{
            /* color: #3A3B3C; */
            /* margin: 8px; */
        }
        div{
            background-color: #ffa500;
            color: white;
            padding: 8px 40px;
            cursor: pointer;
            :hover{
                background-color: #ff8c00;

            }
        }
    }
`

export const ItemsContainer = styled.div`
display: flex;
/* background: blue; */
flex-direction: column;
align-items: center;
.title{

        color: #3A3B3C;
        h2{
            margin: 0;
            margin: 40px;
            div{
                background-color: #ff8c00;
                height: 6px;
                margin-top: 8px !important;
                width: 70%;
                margin: 0 auto;
                border-radius: 50px;
            }
        }
    }
    
`
export const ItemsWrapper = styled.div`
    display: grid;
    gap: 30px 30px;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    /* background-color: #2196f3; */
    padding: 8px;
    width: 100%;
    @media (max-width: 900px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 620px) {
        grid-template-columns: auto ;
    }
`

export const ItemContainer = styled.div`
    /* background-color: red; */
    position: relative;
    /* max-width: 25px; */
    .item-icons{
        position: absolute;
        top: 0;
        width: 100%;
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        padding: 5px;
        div{
            background: rgba(255, 255, 255, 0.6);
            width: 2rem;
            height: 2rem;
            
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            border-radius: 50%;
            cursor: pointer;
            :hover{
                background: rgba(255, 255, 255, 0.9);

            }
        }
    }
    img{
        height: 320px;
        width: 280px;
    }
`
export const ItemInfo = styled.div`

    p{
        margin: 3px 0;
    }
`

export const ValuesContainer = styled.div`
    height: 280px;
    /* background-color: red; */
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`
export const ValueContainer = styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px 20px;
    width: 200px;
    text-align: center;
    color: #ffa500;
    border: 3px solid #ffa500;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    p{
        color: #3A3B3C;
        font-size: 1rem;
        font-weight: 700;
    }

`