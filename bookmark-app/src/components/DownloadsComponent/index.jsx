import { Btn } from "../../Style"
import "../../lax"
import { DownloadsContainer, DouwnloadDescription, Card, CardItem } from "./Style"

export default function DownloadComponent() {

    return (

        <DownloadsContainer>
            <DouwnloadDescription className="lax lax_preset_fadeInOut:229.75:0.3 lax_preset_scaleIn:229.75:0.6">
                <h2>Download the extension</h2>
                <p> We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize</p>

            </DouwnloadDescription>

            <Card>
                <CardItem>

                    <img src="/assets/images/logo-chrome.svg" className="lax lax_preset_spin:919:360" alt="logo browser Chrome" />
                    <span>Add to Chrome</span>
                    <p>Minimun version 62</p>

                    <div className="btn-container">
                        <Btn
                            bgcolor="var(--Soft-Blue)"
                            color="white"
                            colorborderhover="var(--Soft-Blue)"
                            colorhover="var(--Soft-Blue)"
                        >Add & install Extension</Btn>
                    </div>
                </CardItem>
                <CardItem>
                    <img src="/assets/images/logo-firefox.svg" className="lax lax_preset_spin:919:360" alt="logo browser Firefox" />
                    <span>Add to Firefox</span>
                    <p>Minimun version 55</p>

                    <div className="btn-container">
                        <Btn
                            bgcolor="var(--Soft-Blue)"
                            color="white"
                            colorborderhover="var(--Soft-Blue)"
                            colorhover="var(--Soft-Blue)"
                        >Add & install Extension</Btn>
                    </div>
                </CardItem>
                <CardItem>
                    <img src="/assets/images/logo-opera.svg" className="lax lax_preset_spin:919:360" alt="logo browser Opera" />
                    <span>Add to Opera</span>
                    <p>Minimun version 46</p>

                    <div className="btn-container">
                        <Btn
                            bgcolor="var(--Soft-Blue)"
                            color="white"
                            colorborderhover="var(--Soft-Blue)"
                            colorhover="var(--Soft-Blue)"

                        >Add & install Extension</Btn>
                    </div>
                </CardItem>
            </Card>
        </DownloadsContainer>
    )
}