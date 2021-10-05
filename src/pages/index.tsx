import * as React from "react"
import styled from "styled-components"
import {ColorBox} from "../components/ElevatedBox"
import Layout from "../components/Layout"
import {COLORS} from "../constants"

// styles
const Heading = styled.h1`
  font-family: "Open Sans";
  font-style: bold;
`
const Container = styled.div`
  font-family: "Open Sans";
  margin: 3rem auto;
  max-width: 720px;
  display: grid;
  place-items: center;
`

const Wrapper = styled.div`
  --shadow-color: 0deg 0% 50%;
  background-color: hsl(${COLORS.light});
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px;
`

// markup
const IndexPage = () => {
  return (
  <Layout>
    <main>
     <Container>
      <title>Ember Theme</title>
      <Heading>
        This is a color palette called <span style={{ color: COLORS.fire }}>"Ember"</span>.
      </Heading>

      <div>
        <div>
        </div>
      </div>
      <div>
        <p style={{display:'grid', placeItems:'center'}}>
          These color palettes are in development.
        </p>
      <Wrapper>
        <ColorBox color={COLORS.fire}/>
      </Wrapper>
      <Wrapper>
        <ColorBox color={COLORS.red}/>
        <ColorBox color={COLORS.green}/>
        <ColorBox color={COLORS.blue}/>
        <ColorBox color={COLORS.yellow}/>
        <ColorBox color={COLORS.magenta}/>
        <ColorBox color={COLORS.cyan}/>
      </Wrapper>
      <Wrapper>
          <ColorBox color={COLORS.light}/>
          <ColorBox color={COLORS.white}/>
          <ColorBox color={COLORS.fog}/>
      </Wrapper>
      <Wrapper>
          <ColorBox color={COLORS.dark}/>
          <ColorBox color={COLORS.black}/>
          <ColorBox color={COLORS.gray}/>
      </Wrapper>
        </div>
     </Container>
    </main>
  </Layout>
  )
}

export default IndexPage
