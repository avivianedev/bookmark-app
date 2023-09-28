import { Wrapper, Btn, ContentText, Title, BtnContainer, ImageContainer, Image, ImageEffect } from "./Style"
import Header from "./components/Header"

import Features from "./components/Features";


function App() {

  return (
    <>
      <Header />
      <main>
        <Wrapper  >

          <ContentText >
            <Title>A Simple Bookmark Manager</Title>

            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free. </p>
            <BtnContainer className="btn">
              <Btn bgcolor="var(--Soft-Blue)" color="white" colorborderhover="var(--Soft-Blue)" colorhover="var(--Soft-Blue)">Get it on Chrome</Btn>
              <Btn bgcolorbtn="#cecece" color="var(--Grayish-Blue)" colorborderhover="var(--Very-Dark-Blue)" colorhover="var(--Very-Dark-Blue)">Get it on Firefox</Btn>
            </BtnContainer>
          </ContentText>

          <ImageContainer>
            <Image src="/assets/images/illustration-hero.svg" alt="image-hero" />
            <ImageEffect


            />
          </ImageContainer>

        </Wrapper>

        <Features />
      </main>
    </>
  )
}

export default App
