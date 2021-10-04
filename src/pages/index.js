import * as React from "react"
import styled from "styled-components"

// styles
const Container = styled.div`
  font-family: "Open Sans";
  margin: 3rem auto;
  max-width: 600px;
  display: grid;
  place-items: center;
`

// data

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
      <p>
        This color palette is in development.
      </p>
     </Container>
    </main>
  )
}

export default IndexPage
