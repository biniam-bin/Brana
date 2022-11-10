import styled from "styled-components";


export const ContactPageContainer = styled.div`
    /* background-color: red; */
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title{
        display: flex;
        align-items: center;
        flex-direction: column;

        h1, p{
            margin: 2px;
        }
    }
    .contact-info{
        /* background-color: blue; */
        width: 60%;
        display: flex;
        justify-content: space-around;
        height: 120px;
        margin-top: 30px;
        div{
            /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
            background-color: white;
            display: flex;
            border: 1px solid #ffa500;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px 30px;
            border-radius: 5px;
            /* margin: 0 35px; */
        }
        @media (max-width: 870px){
            width: 80%;
        }
        @media (max-width: 610px){
            width: 100%;
        }
    }

`

export const FormContainer = styled.div`
    /* background-color: yellow; */
    
    padding: 10px;
    width: 62%;
    border-radius: 10px;
    margin-top: 50px;
    .flex{
        display: flex;
        width: 100%;
        justify-content: space-between;
        @media (max-width: 590px){
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
    .input-container{
        margin: 10px 0;
        p{
            font-weight: 600;
            margin: 4px;
        }
        input{
            border-radius: 5px;
            width:280px;
            /* max-width: 250px; */
            height: 35px;
            border: 1px solid gray;
            font-size: 18px;
            color: gray;
            padding: 0 10px;
            :focus{
                border: 1px solid #ffa500;
                outline: none;
            }
        }
        textarea{
            width:280px;
            resize: vertical;
            :focus{
                border: 1px solid #ffa500;
                outline: none;
            }

        }
    }
    .button{
        background-color: #ffa500;
        display: flex;
        padding: 10px;
        color: white;
        border-radius: 50px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        max-width: 100px;
        width: auto !important; 
        margin: 50px auto;
    }
    @media (max-width: 1000px){
        width: 80%;
    }
    @media (max-width: 730px){
        width: 95%;
    }
@media (max-width: 590px){
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`