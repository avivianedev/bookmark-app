import { useState } from "react"
import LogoImage from "./LogoImage"

import {
    HeaderContainer,
    Navbar,
    ListContainer,
    ListItem,
    Link,
    BtnMenu,
    Logo,
    SectionDesktop,
    SectionMobile,
    TagImage


} from "./Styles"




const Header = () => {

    const [showMenu, SetShowMenu] = useState(false)

    function showMenuIcon(event) {
        event.preventDefault()
        return SetShowMenu(!showMenu)
    }

    return (
        <HeaderContainer className="container">
            <SectionDesktop>
                <Logo className="logo">
                    <LogoImage />
                </Logo>
                <Navbar>
                    <ListContainer>
                        <li><Link href="">FEATURES</Link></li>
                        <li><Link href="">PRICING</Link></li>
                        <li><Link href="">CONTACT</Link></li>
                    </ListContainer>
                    <BtnMenu>LOGIN</BtnMenu>

                </Navbar>

            </SectionDesktop>




            <SectionMobile >

                {showMenu ? <Logo className="logo">
                    <LogoImage
                        fillColor="#000"
                        bgCircle="white"
                        fillName="#ffffff"
                        bgMark="white"
                    />
                </Logo>
                    :
                    <Logo className="logo">
                        <LogoImage

                        />
                    </Logo>
                }
                {showMenu && <Navbar>
                    <ListContainer>
                        <ListItem><Link onClick={(e) => e.preventDefault()} href="">FEATURES</Link></ListItem>
                        <ListItem><Link onClick={(e) => e.preventDefault()} href="">PRICING</Link></ListItem>
                        <ListItem><Link onClick={(e) => e.preventDefault()} href="">CONTACT</Link></ListItem>
                    </ListContainer>
                    <BtnMenu>LOGIN</BtnMenu>

                    <div className="social">
                        <img src="/assets/images/icon-facebook.svg" alt="logo facebook" />
                        <img src="/assets/images/icon-twitter.svg" alt="logo twitter" />
                    </div>
                </Navbar>}

                {showMenu ? <TagImage src="/assets/images/icon-close.svg" alt="menu-image" onClick={showMenuIcon} /> : <TagImage src="/assets/images/icon-hamburger.svg" alt="menu-image" onClick={showMenuIcon} />}


            </SectionMobile >

        </HeaderContainer >
    )
}

export default Header