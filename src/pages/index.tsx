import * as React from "react"
import styled from "styled-components"
import {Subtle, ElevatedBox} from "../components/ElevatedBox"
import Layout from "../components/Layout"
import {COLORS} from "../constants"

// styles
const Heading = styled.h1`
  font-family: "Open Sans";
  font-style: bold;
  margin: 0;
  width: 100%;
  height: 70px;
  --box-color: ${COLORS.black};
`
const Container = styled.div`
  font-family: "Open Sans";
  margin: 3rem auto;
  max-width: 720px;
  display: grid;
  place-items: center;
`

const HeadingContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
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
      <title>Ember Theme</title>
      <Heading>
        <Subtle>
          <HeadingContainer>
            <span style={{ color: COLORS.fire,textAlign:'center', padding: '0 1rem 0.5rem' }}>Ember</span>
          </HeadingContainer>
        </Subtle>
      </Heading>
     <Container>
      <div>
      <Wrapper>
        <ElevatedBox color={COLORS.fire}/>
      </Wrapper>
      <Wrapper>
        <ElevatedBox color={COLORS.red}/>
        <ElevatedBox color={COLORS.green}/>
        <ElevatedBox color={COLORS.blue}/>
        <ElevatedBox color={COLORS.yellow}/>
        <ElevatedBox color={COLORS.magenta}/>
        <ElevatedBox color={COLORS.cyan}/>
      </Wrapper>
      <Wrapper>
          <ElevatedBox color={COLORS.light}/>
          <ElevatedBox color={COLORS.white}/>
          <ElevatedBox color={COLORS.fog}/>
      </Wrapper>
      <Wrapper>
          <ElevatedBox color={COLORS.dark}/>
          <ElevatedBox color={COLORS.black}/>
          <ElevatedBox color={COLORS.gray}/>
      </Wrapper>

      <p style={{display:'grid', placeItems:'center'}}>
        This color theme is in development.
      </p>
      </div>
     </Container>
    </main>
  </Layout>
  )
}

export default IndexPage
