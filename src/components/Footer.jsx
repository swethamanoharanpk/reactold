import React from 'react'
import { styled} from 'styled-components'
const Bottom = styled.div`
background-color: black;
width: 100%;
height: 90px
`
const Section = styled.h2`
text-align: center;
color: white;`

function Footer() {
  return (
    <Bottom>
    <Section>This is Footer</Section>
    </Bottom>
  )
}

export default Footer
