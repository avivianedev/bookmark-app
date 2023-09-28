import styled from "styled-components"


export const Wrapper = styled.div`
    padding: 3em;
    width: 100%;
    height: 100%;
    display: flex;    
    justify-content: space-between;
    gap:1em;
    overflow: hidden;

    @media screen and (max-width: 768px){
        padding: 1em;
        flex-direction: column-reverse;
        text-align: center;
    }
   
`
export const ContentText = styled.section`   
    width: 100%; 
    height: 100%;    
    display: flex;
    flex-direction: column;   
    justify-content: flex-end;
    gap: 2em;
    padding:1em 8em;    
    animation: sliderY 1s;

    @keyframes sliderY {
    from{
           transform: translateY(90px) ;
    }to{
        transform: translateY(0px)
    }
    
}


    @media screen and (max-width: 768px){
        width: 100%;
        padding:  2em 1em;
    }

`
export const BtnContainer = styled.div`  
    width:100%;
    height: 100%;
    display: flex;    
    gap: 2em;    
    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 100%;
        gap: 1em;
    }

`

export const Title = styled.h1`
    font-size:4rem;    

    @media screen and (max-width: 768px){
        font-size: 3em;
    }
`
export const Btn = styled.button`
    background-color: ${(props) => props.bgcolor};     
    padding: .8em 2em;
    border: transparent;    
    border-radius:7px;
    font-size: 18px;   
    color: ${(props) => props.color};    
    font-weight: 500;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover { 
        border: 2px solid ${(props) => props.colorborderhover};
        background-color: transparent;
        color: ${(props) => props.colorhover}; 
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const ImageContainer = styled.section`   
    width:100%;
    height: 100%;
    
    
    @media screen and (max-width: 768px){        
        width: 100%;
        gap: 1em;
    }

`
export const Image = styled.img`   
    width: 800px;
    position: relative;      
    z-index: 1;
    animation: go-back 1s;

    @keyframes go-back {
    0% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}

    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`
export const ImageEffect = styled.div`
    position: absolute;
    width: 30%;
    height: 45%;
    top: 40%;
    right: 0;
    border-radius: 100% 0 0 100%;
    border-radius: ${(props) => props.br};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    top: ${(props) => props.top};
    height: ${(props) => props.height};
    width: ${(props) => props.width};      
    background-color: var(--Soft-Blue);    

    @media screen and (max-width: 768px){
        width: 70%;
        top: 20%;
        height: 25%;
    }
    @media screen and (max-width: 375px){
        width: 70%;
        top: 25%;
        height: 30%;
    }
`
