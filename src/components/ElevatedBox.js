import styled from "styled-components"

const ELEVATIONS = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `
}

const Box = styled.div`
  border-radius: 8px;
  background: black;
`;
const SubtleBox = styled(Box)`
  width: 50px;
  height: 50px;
  box-shadow: ${ELEVATIONS.small};
`
const FloatBox = styled(Box)`
  width: 70px;
  height: 70px;
  box-shadow: ${ELEVATIONS.medium};
`
const ElevatedBox = styled(Box)`
  width: 100px;
  height: 100px;
  box-shadow: ${ELEVATIONS.large};
`

export {SubtleBox, FloatBox, ElevatedBox}
