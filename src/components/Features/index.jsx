import "../../lax"

import data from "./data.json"
import { useState } from "react";

import {
    FeatureComponent,
    FeatureDescription,
    FeaturesBtn,
    FeaturesBtnContainer,
    FeaturesWrapper,
    ImageContainer,
    ImageFeatures,
    FDetails,
    ImageEffectFeatures

} from "./Styles"

import { Btn } from "../../Style";


export default function Features() {

    const [indexFeature, SetindexFeature] = useState("feat1")
    const featuresdata = data[0]

    return (
        <FeatureComponent>
            <FeatureDescription className="lax lax_preset_fadeInOut:229.75:0.3 lax_preset_scaleIn:229.75:0.6">
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>

            </FeatureDescription>
            <FeaturesBtnContainer>
                <FeaturesBtn onClick={() => SetindexFeature("feat1")}> Simple Bookmarking</FeaturesBtn>
                <FeaturesBtn onClick={() => SetindexFeature("feat2")}> Speed Searching</FeaturesBtn>
                <FeaturesBtn onClick={() => SetindexFeature("feat3")}> Easy Sharing</FeaturesBtn>
            </FeaturesBtnContainer>

            <FeaturesWrapper>

                <ImageContainer>
                    <ImageFeatures src={featuresdata[indexFeature].image} alt="Feature" />
                    <ImageEffectFeatures />
                </ImageContainer>
                <FDetails className="">
                    <div className="details-content">
                        <h3>{featuresdata[indexFeature].title}</h3>
                        <p>{featuresdata[indexFeature].description}</p>
                        <div className="btncontainer">
                            <Btn bgcolor="var(--Soft-Blue)"
                                color="white"
                                colorborderhover="var(--Soft-Blue)"
                                colorhover="var(--Soft-Blue)"

                            >More info</Btn>
                        </div>
                    </div>
                </FDetails>
            </FeaturesWrapper>

        </FeatureComponent >
    )

} 1;;
