import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;   
    align-items: center;
    padding: 1em 3em ;
    background-color: var(--Very-Dark-Blue);
    
    @media screen and (max-width: 768px){
        padding: 2em 1em; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }
    
    .footer{          
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        .logo-container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center; 
            padding-left: 30px;
            
        }

        @media screen and (max-width: 768px){                         
            flex-direction: column;
            justify-content:center;
            align-items:center;
            text-align: center;
            gap: 1em;
        }

        ul{
        list-style: none;
        display: flex;
        width: 100%;
        gap: 2em;

        @media screen and (max-width: 768px){
            width: 100%;
            flex-direction: column;            
            align-items:center;
            gap:1em;
        }
        
        li{
            a{
                text-decoration: none;
                color: var(--Very-Dark-Blue);
                color: white;
                font-size: 16px;
            }
            
        }
       
    }
    }
   
   .social{
    display: flex;
    gap: 2em;
    padding: 0 3em;
    img{
        cursor: pointer;
    }
   }

`