import styled from "styled-components"


export const DownloadsContainer = styled.section`
    padding: 4em 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content:center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 1em;
    }
    
`
export const DouwnloadDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:2em;
    text-align: center;
    padding: 2em 3em;
    width: 700px;
    height: 100%;

    h2{
        font-size:2.5em;
        font-weight:normal;
        
    }
    p{
        font-size: 22px;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        padding: 1em;
        h2{
        font-size:2em;
        font-weight:500;
        
    }
    p{
        font-size: 18px;
    }
    }
    @media screen and (max-width: 768px){
        padding: 0;
    }
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    width: 100%;
    height: 100%;    

    @media screen and (max-width: 768px){
        flex-direction:column;
        gap: 2em;
        padding: 2em 0;
    }
    
`
export const CardItem = styled.div`    
    display: flex;
    padding-top: 1em;   
    flex-direction: column;
    align-items: center;     
    gap: .5em;    
    box-shadow: -6px 10px 198px -23px rgba(232,221,221,1);
-webkit-box-shadow: -6px 10px 198px -23px rgba(232,221,221,1);
-moz-box-shadow: -6px 10px 198px -23px rgba(232,221,221,1);

    &:nth-child(2n){        
        margin-top:100px;
    }
    &:nth-child(3n){        
        margin-top:200px;
    }

    img{
        width: 45%;
        height: 100%;
    }
    span{
        font-weight: 500;
        color: var(--Very-Dark-Blue);
    }
   p{
    font-size:18px
   }

   .btn-container{
    margin: 0;
    padding:1em ;
    display: flex;
    justify-content:center;       
    align-items:center;    
    width: 100%;    
    border-top: dashed #cecece;

    button{        
        
        align-self:center; 
        animation: none;
    }
   }

   @media screen and (max-width: 768px){
    &:nth-child(2n){        
        margin:0;
    }
    &:nth-child(3n){        
        margin:0;
    }
    }
    

`
