import styled from "styled-components"


export const FaqContainer = styled.section`
    padding: 2em 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    .line{        
        width: 38%;
        height: 100%;
        border-bottom: 1px  solid var(--Grayish-Blue);

        @media screen and (max-width: 768px){
            width: 90%;
        }
    }

    .Btn-faq-container{
        padding-top: 2em;
        width: 100%;
        display: flex;
        justify-content: center;

        button{
        background-color: var(--Soft-Blue);     
        padding: .8em 2em;
        border: transparent;    
        border-radius:7px;
        font-size: 18px;
        color: white;             
        font-weight: 500;
        cursor: pointer;        
        border: 2px solid transparent;
        
        &:hover { 
        border: 2px solid var(--Soft-Blue);
        background-color: transparent;
        color: var(--Soft-Blue);
    }
        }
    }

    @media screen and (max-width: 768px){        
        padding:  2em 1em;
    }
`
export const FaqDescription = styled.div`
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
        font-size:1.5em;
        font-weight:normal;
       
        
    }
    p{
        font-size: 18px;
    }
    }
`

export const FaqContent = styled.div`   
    
    width: 40%;
    height: 100%;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`
export const Question = styled.div`
    display: flex;
    justify-content: space-between;      
    align-items: center; 
    padding: 1em;
    border-top: 1px  solid var(--Grayish-Blue);      
    width: 100%;
    height: 100%;
    cursor: pointer;
    h4{
        color:  var(--Very-Dark-Blue);
        font-weight: 100;
        
        &:hover{
        color: var(--Soft-Red)
    }
    }    
    
`

export const Arrow = styled.div`   
    padding: 0 1em;  
      
`

export const Ansewer = styled.div`
    display: flex;    
    justify-content: space-between;    
    padding: 1em 2em;    
    width: 100%;
    height: 100%;     

    p{
        font-size:18px;
        
    }
    
    
`
