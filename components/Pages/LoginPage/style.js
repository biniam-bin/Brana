import styled from "styled-components";


export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url("bg1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .center-container{
        background: rgba(150, 150, 150, 0.9);
        height: 60%;
        width: 30vw;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        /* padding: 40px 0; */
       
        h2{
            margin: 0;
        }
    }
    .glow-on-hover{
        background-color: white;
        padding: 15px 20px;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        img{
            height: 22px;
            margin-right: 10px;
        }
        
    }

    
.glow-on-hover {
    width: 230px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}
span{
    text-align: center;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}



`