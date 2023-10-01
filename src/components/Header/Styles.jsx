import styled from "styled-components"

export const HeaderContainer = styled.header`
     display: flex;     
     padding: 3em;
     align-items: center;       

    @media screen and (max-width: 768px){
        padding: 0;
    }

`
export const SectionDesktop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px){
        display: none;
    }

`
export const TagImage = styled.img`
    cursor: pointer;
    z-index: 2;

`
export const SectionMobile = styled.section`
    background-color: ${(props) => props.bgcolor};   
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px){       
        display: flex;        
        position: relative;
        padding: 2em;
    }

`

export const Logo = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    cursor: pointer;
    z-index: 3;
    z-index: ${(props => props.zIndex)}
`


export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 2em ;
    @media screen and (max-width: 768px){        
        position: absolute;       
        align-items: center;
        justify-content: flex-start;
        width: 100%;    
        min-height: 100vh;       
        flex-direction: column;              
        top:0;
        right: 0;
        background-color: var(--Very-Dark-Blue);
        padding: 4em 1em; 
        gap: 1em;
        opacity: 0.8;       
        duration: 2s;
       z-index: 2;

       .social{
        display: flex;
        height: 100vh;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 1em;
        img{
        cursor: pointer;
    }
        
       }
    }
    
`

export const ListContainer = styled.ul`
    width: 100%;   
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    @media screen and (max-width: 768px){        
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        gap:0;
        margin-top: 2em;
        
    }
`
export const ListItem = styled.li`
    
    @media screen and (max-width: 768px){        
        padding: 1em 0;        
        width: 90%;
        text-align: center;
        &:nth-child(odd) {            
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            border-radius: 0;
            
        }       
        
        
}
`

export const Link = styled.a`
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--Very-Dark-Blue);
    &:hover { 
        color: var(--Soft-Red);
        
    }
    @media screen and (max-width: 768px){
        display:flex;          
        width: 100%;
        justify-content: center;
        color: white;
        letter-spacing: 1px;
        font-size: 24px;
        font-weight: normal;
        padding: .8em 2em;   
        &:hover {        
        color: white;         
        border-radius:7px;   
        border: 2px solid white;
        background-color: transparent;
        color: white;       
    
        
    }
       
    }
`


export const BtnMenu = styled.button`
    background-color: var(--Soft-Red);     
    padding: .8em 2em;
    border: transparent;    
    border-radius:7px;
    font-size: 18px;
    color: white; 
    
    font-weight: 500;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover { 
        border: 2px solid var(--Soft-Red);
        background-color: transparent;
        color: var(--Soft-Red);
    }

    @media screen and (max-width: 768px){
        width: 90%;          
        background-color: transparent;
        color: white;
        letter-spacing: 1px;
        font-size: 24px;
        font-weight: normal;
        &:hover { 
        border: 2px solid white;
        background-color: transparent;
        color: white;
        
        
    }
    }
`
