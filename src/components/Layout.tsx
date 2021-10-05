import React from "react"
import { createGlobalStyle } from "styled-components"
import { COLORS } from "../constants"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;  
  }
  body {
    background: ${COLORS.white};
    background: linear-gradient(180deg, ${COLORS.light} 0%, ${COLORS.white} 70%, ${COLORS.fog} 100%);
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
