import styled from "styled-components";


export const ModalWrapper = styled.section`
    display: flex;    
    justify-content: center;   
    align-items: center;
    width: 30%;
    height:450px;
    animation: up 2s;     
    padding: 2em;
    position: absolute;
    bottom: 150%;
    

    @keyframes up{
        from {
            transform: translateY(90px) ;
        }
        to{
            transform: translateY(0) ;
        }
    }
  
.modal-content{
    background-color: white;
    width: 100%;
    height:100%;
    display: flex;    
    flex-direction: column;
    justify-content: center;   
    align-items: center;
    text-align: center;
    border-radius: 15px;
    gap: 1em;
    padding: 0 1em;
    border: 1px solid var(--Soft-Blue);

    h4{
        color: var(--Grayish-Blue);
        font-size: 1.5em;
    }
    p{
        color: var(--Grayish-Blue);
        font-size: 18px;

    }
    span{
        color: var(--Grayish-Blue);
        text-transform:lowercase;
        font-weight: 100;
    }

    .btn-container{
        padding: 1em 2em;
        button{           
        background-color: var(--Soft-Blue);     
        padding: .8em 2em;
        border: 1px solid transparent;         
        font-size: 18px;
        color: white;             
        font-weight: 500;
        cursor: pointer;   
        border-radius: 7px;

        &:hover{       
            
            border: 1px solid var(--Soft-Red);
            background-color: var(--Soft-Red);
            color: white;
        }

    }   
    
    }
    
}

@media screen and (max-width: 768px){
    width: 100%;

    .modal-content{
        h4{
        
        font-size: 1em;
    }
    p{
       
        font-size: 14px;

    }
    span{        
        font-weight: 100;
    }
    }
    
}
`