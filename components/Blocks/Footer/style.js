import styled from "styled-components";


export const FooterContainer = styled.div`
    background-color: #3F3F3F;
    /* min-height: 300px; */
    color: lightgray;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
   
`

export const FooterSection = styled.div`
    /* background-color: blue; */
    height: 100%;
    width: 100%;
    max-width: 300px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
    .about-us{
        text-align: center;
        .title{
            h2{
                margin: 0;
                display: flex;
                flex-direction: column;
                width: auto;
                ::after{
                    content: "";
                    width: 70px;
                    background-color: #ffa500;
                    height: 5px;
                    margin: 0 auto;
                    border-radius: 50px;
                    margin-top: 8px;
                }
               
            }
        }
        .body{
            margin-top: 25px;
            /* text-align: start; */
        }
    }
    .links{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            h2{
                margin: 0;
                display: flex;
                flex-direction: column;
                width: auto;
                ::after{
                    content: "";
                    width: 60px;
                    background-color: #ffa500;
                    height: 5px;
                    margin: 0 auto;
                    border-radius: 50px;
                    margin-top: 8px;
                }
               
            }
        }
        .body{
            /* width: 100%; */
            margin-top: 25px;
            /* background: red; */
            text-align: center;
            div{
                /* background: yellow; */
                padding: 6px 20px;
                cursor: pointer;
                margin-bottom: 10px;
                :hover{
                    color: white;
                }
            }
        }
    }
    .social-media{
        text-align: center;
        .title{
            h2{
                margin: 0;
                display: flex;
                flex-direction: column;
                width: auto;
                ::after{
                    content: "";
                    width: 60px;
                    background-color: #ffa500;
                    height: 5px;
                    margin: 0 auto;
                    border-radius: 50px;
                    margin-top: 8px;
                }
            
            }
       }
       .body{
        display: flex;
        margin-top: 25px;
        justify-content: center;
        span{
            cursor: pointer;
            margin: 0 5px;
            img{
                height: 32px;
                width: 32px;
            }
        }
       }
    }

`
