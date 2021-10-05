import * as React from "react"
import styled from "styled-components"
import {ColorBox} from "../components/ElevatedBox"
import {COLORS} from "../constants"

// styles
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
    <main>
     <Container>
      <title>Ember Theme</title>
      <h1>
        This is a color palette called "Ember."
      </h1>

      <div>
        <h2> Colors </h2>
        <div>
        </div>
      </div>
      <div>
        <p>
          This color palette is in development.
        </p>
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
  )
}

export default IndexPage
