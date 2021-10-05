import React from "react"
import styled from "styled-components"

// utils 
const hex2hsl = (hex:string) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h:number, s:number, l:number = (max + min) / 2;
    if(max == min){
      h = s = 0; // achromatic
    }else{
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  return `${Math.round(h*360)}deg  ${Math.round(s*100)}%  ${Math.round(l*100)}%`;
}

// styles
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
  background: hsl(var(--box-color));
`
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

const ColorBox = (props:{color:string}) => {
  const BoxWrapper = styled.div`
    --shadow-color: 0deg 0% 50%;
    --box-color: ${hex2hsl(props.color)};
  `
  return (
    <BoxWrapper>
      <ElevatedBox />
    </BoxWrapper>
  )
};

export {SubtleBox, FloatBox, ElevatedBox, ColorBox}
