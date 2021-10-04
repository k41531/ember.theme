import * as React from "react"
import styled from "styled-components"
import {SubtleBox, FloatBox, ElevatedBox} from "../components/ElevatedBox"

// styles
const Container = styled.div`
  font-family: "Open Sans";
  margin: 3rem auto;
  max-width: 600px;
  display: grid;
  place-items: center;
`

// data
const Wrapper = styled.div`
  --shadow-color: 0deg 0% 50%;
  background-color: hsl(0deg 0% 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
`
const BlueWrapper = styled(Wrapper)`
  --shadow-color: 220deg 60% 50%;
  background-color: hsl(220deg 100% 80%);
`;


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
      <BlueWrapper>
        <SubtleBox />
        <FloatBox />
        <ElevatedBox />
      </BlueWrapper>
      </div>
     </Container>
    </main>
  )
}

export default IndexPage
