import LogoImage from "../Header/LogoImage";
import { Logo, } from "../Header/Styles";
import { FooterContainer } from "./Styles"

export default function Footer() {

    return (
        <FooterContainer>
            <div className="footer">
                <div className="logo-container">
                    <LogoImage fillName="#ffffff"
                        bgMark="white" />
                </div>

                <ul>
                    <li><a href="">FEATURES</a></li>
                    <li><a href="">PRICING</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
            <div className="social">
                <img src="/assets/images/icon-facebook.svg" alt="logo facebook" />
                <img src="/assets/images/icon-twitter.svg" alt="logo twitter" />
            </div>


        </FooterContainer>
    )
}