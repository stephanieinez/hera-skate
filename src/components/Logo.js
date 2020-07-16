import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"

const LogoImage = styled.img`
  width: 8rem;
`

const Logo = () => {
  const logoData = useStaticQuery(graphql`
    query {
      hera {
        logos {
          logoImage {
            url
          }
        }
      }
    }
  `)

  return (
    <LogoImage alt="" src={logoData.hera.logos[0].logoImage.url} />
  )
}

export default Logo
