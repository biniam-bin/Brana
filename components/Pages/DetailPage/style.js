import styled from "styled-components";
import { keyframes } from 'styled-components'

export const DtailsPageContainer = styled.div`

display: flex;
padding: 0 20px;
/* align-items: center; */
/* justify-content: center; */
grid-template-columns: repeat(12, 1fr);
gap: 10px;
grid-auto-rows: minmax(100px, auto);
margin-top: 15px;
min-height: 80vh;
margin-top: 50px;
/* background: red; */
@media (max-width: 800px) {
    
    
    flex-direction: column;
     }
    
`
const slideInFromLeft = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`

const slideInFromRight =  keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`

export const CarouselContainer = styled.div`
  /* background: red; */
  grid-column: 1 / 7;
  grid-row: 1 / 4;
  flex: 0.5;
  animation: 1s ease-out 0s 1 ${slideInFromLeft};
  /* max-height: 750px; */
  div {
      /* width: 800px; */
      /* height: 450px; */
  }
  img {
    aspect-ratio: 2.2 / 2;
    /* max-height: 450px !important; */
}
`;


export const DescriptionContainer = styled.div`
    grid-column: 7 / 13;
    /* grid-row: 4 / 9; */
    /* background: blue; */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
    flex: 0.5;
    color: #3A3B3C;
    animation: 1s ease-out 0s 1 ${slideInFromRight};
    @media (max-width: 1000) {
        grid-column: 1 / 7;
        grid-row: 5 / 9;
        
     }
     h2{
        margin-top: 0px;
     }
     .price{
        align-self: flex-start;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        
        p{
            margin: 0 8px
        }
     }
    .buttons{
        display: flex;
        flex-direction: column;
        /* background: blue; */
        /* width: 100%; */
        align-self: flex-start;
        margin: 10px 0;
        .btn-outline{
            border: 2px solid #ffa500;
            width: auto;
            border-radius: 50px;
            padding: 10px 20px;
            cursor: pointer;
            margin: 8px 0;
            
            color: #ffa500;
            :hover{
                color: #ff8c00;
                border: 2px solid #ff8c00;

            }
            
        }
        .btn{
            background: #ffa500;
            border-radius: 50px;
            padding: 10px 25px;
            cursor: pointer;
            margin: 8px 0;
            color: white;
            border: 2px solid #ffa500;
            :hover{
                background-color: #ff8c00;
            }
            

        }
    }

`

export const RelatedItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* background: red; */
    padding: 50px 0;
`