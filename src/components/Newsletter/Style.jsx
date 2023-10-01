import styled from "styled-components";

export const NewWrraper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--Soft-Blue);    
    gap: 2em;
    padding: 2em;

    @media screen and (max-width: 768px){
        padding: 2em 1em;
        
    }
    

    span{
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .Mtitle{
        display: flex;
        justify-content: center;
        width: 30%;        
        
        h4{
            color: white;
            font-size: 1.8em;
            text-align: center;
        }
   
        @media screen and (max-width: 768px){
            width: 100%;

            h4{          
            font-size: 1.4em;
            text-align: center;
            text-transform: capitalize;
        }
        }
    }
    
   
`

export const NewsletterContent = styled.form`
    display: flex;
    width: 100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;   
    position: relative;
    
    .error{
        background-color: var(--Soft-Red);
        padding: .4em .2em;
        width: 100%;
        text-transform: lowercase;
        font-weight: 100;
        font-style: italic;
        font-size:16px;        
        align-self: center;
        border-radius: 0 0 11px 11px;

        @media screen and (max-width: 768px){
            font-size: 12px;
        }
    }   
    
`
export const InputBtnNewsletter = styled.div`
    display: flex;    
    justify-content: center;
    align-items: self-start;
    width: 100%;
    gap: 1em;    
    
    button{           
        background-color: var(--Soft-Red);     
        padding: .8em 2em;
        border: transparent;         
        font-size: 18px;
        color: white;             
        font-weight: 500;
        cursor: pointer;  
        
        @media screen and (max-width: 768px){
        width: 100%;
    }

    }     

    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 1.3em;            
    border: transparent;
    outline: none;  
    border-radius: 10px;

    
`
export const InputError = styled.div`
    display: flex;  
    flex-direction: column;
    width:30% ;
    align-items: center;
    background-color: white;  
    border: 1px solid var(--Soft-Red);
    border-radius: 10px; 
    position:relative ; 
    .icon-error{
        position: absolute;
        right: 10px;
        top: 15px;
        }  
        
    @media screen and (max-width: 768px){
    width: 100%;
    
    }
`

export const InputContainer = styled.div`
    display: flex;  
    flex-direction: column;
    width:30% ;
    align-items: center;
    background-color: white;      
    border-radius: 10px;    

    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`

