import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const FlowerContainer = styled.div`
  position: absolute;
  top: ${props => props.top ? '4rem' : ''};
  right: ${props => props.right ? '1.25rem' : ''};
  bottom: ${props => props.bottom ? '20rem' : ''};
  left: ${props => props.left ? '20rem' : ''};
  z-index: 10;
  height: ${props => props.large ? '6.25rem' : '4rem'};
  width: ${props => props.large ? '6.25rem' : '4rem'}; 
  animation: ${rotate} 10s linear infinite;
`

const Flower = ({ right, top, left, bottom, large }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "flower.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <FlowerContainer
      right={right}
      top={top}
      bottom={bottom}
      left={left}
      large={large}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </FlowerContainer>
  )
}

export default Flower
