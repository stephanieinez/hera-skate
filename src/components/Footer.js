import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"


const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: calc(100% - 4rem);
  background-color: white;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterItem = styled.a`
  width: 4rem;
`

const FooterImage = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 4rem;
  height: 2rem;

  &:hover {
    margin-bottom: 0.625rem;
    background-image: url(${props => props.hoverUrl});
    transform: rotate(305deg);
  }
`

const Text = styled.p`
font-size: 0.6rem;
`

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    query {
      hera {
        socialIcons {
          socialText
          socialIcon {
            url
          }
          url
          socialHoverIcon {
            url
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <IconWrapper>
        {
          footerData.hera.socialIcons.map(item =>
            <FooterItem href={item.url} key={item.socialText}>
              <FooterImage url={item.socialIcon.url} hoverUrl={item.socialHoverIcon ? item.socialHoverIcon.url : item.socialIcon.url} alt={item.socialText} />
            </FooterItem>
          )}
      </IconWrapper>
      <Text>
        © Hera Skate {new Date().getFullYear()}
      </Text>
    </FooterContainer >
  )
}

export default Footer
