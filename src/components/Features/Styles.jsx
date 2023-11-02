import styled from "styled-components"

export const FeatureComponent = styled.section`
    width:100%;
    height: 100%;
    text-align: center;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 1em;
    }

`
export const FeatureDescription = styled.div`
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

`
export const FeaturesBtnContainer = styled.div`
   padding: 2em;    
    
`

export const FeaturesBtn = styled.button`
    border: transparent;
    background-color:transparent;
    border-bottom: 1px solid var(--Grayish-Blue);
    padding: .8em 2em;
    cursor:pointer;
    font-size: 20px;
    font-weight: 500;
    color: var(--Very-Dark-Blue);
    &:hover{
        color: var(--Soft-Red);
        border-bottom: 2px solid var(--Soft-Red);
    }
    &:active{
        color: var(--Soft-Red);
        border-bottom: 2px solid var(--Soft-Red);
    }
`

export const FeaturesWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;  
    justify-content: center;
    align-items: center;   
    padding: 2em 0;    

    @media screen and (max-width: 768px){
    padding: 2em 0;    
    flex-direction: column;
    gap: 2em;
    
   }
   
`
export const ImageContainer = styled.div`   
   position: relative;    
   width: 40%;
   height: 450px;   

   
   @media screen and (max-width: 1440px){
    width: 45%;
    height: 450px;    
    
    img{
        width: 90%;
        height: 100%;
    }
       
   }
   @media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
   }
   @media screen and (max-width: 375px){
    width: 100%;
    height: 100%;
   }

`
export const ImageFeatures = styled.img`    
    position: relative;     
    width: 90%;
    height: 100%;    
    z-index: 1;

    animation: go-back 1s;

    @keyframes go-back {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(100px);
    }
}

    @media screen and (max-width: 768px){
    width: 100%;
    height: 250px;
   }

    @media screen and (max-width: 375px){
    width: 100%;
    height: 200px;
   }
`
export const ImageEffectFeatures = styled.div`
    position: absolute;
    padding: 0;
    width: 100%;
    height: 90%;
    top: 25%;    
    left: -30%;
    border-radius:  0 100% 100% 0 ;     
    background-color: var(--Soft-Blue);    
    

    @media screen and (max-width: 768px){
       
    }
    @media screen and (max-width: 375px){
        
    }
    @media screen and (max-width: 1440px){
        width: 120%;
    }
`
export const FDetails = styled.div` 
    display: flex;
    justify-content: center;
    width: 40%;
    height: 100%;
    
    .details-content{
        width: 70%;
        display: flex;           
        flex-direction: column;    
        justify-content: center;       
        text-align:justify;
        gap:2em;         
        h3{
            font-size:2em;
        }
        p{
            font-size: 22px;
        }
        .btncontainer{
            align-self: flex-start;        
        }

        @media screen and (max-width: 1440px){     
               
            h3{
            font-size: 1.5em;
            }
            p{
                text-align: start;
            }
           
        }
                  
                       
           
      

        
    }
   
    @media screen and (max-width: 768px){
    width: 100%;
    padding: 4em 0;  
    .details-content{
        width: 90%;
        text-align: center;
        
        h3{
            font-size: 1.5em;
        }
        p{
            font-size: 20px;
        }
        .btncontainer{
        width: 90%;
        align-self: center;
        }
    }

    
}  
`
