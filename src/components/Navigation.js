import React, { useState } from "react"
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from 'react-responsive'

import Logo from './Logo'
import { device } from '../utils/device';

const NavContainer = styled.nav`
  position: fixed;  
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  padding: 0.5rem 2rem;
  background-color: white;
  z-index: 20;
  width: calc(100% - 4rem);
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: ${props => props.isOpen ? '7rem' : ''};

  @media ${device.tablet} {
    flex-direction: row;
    margin: 0;
  }
`

const LogoWrapper = styled(Link)`
  width: 7rem;
`

const LinkItem = styled(Link)`
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 37% 42% 39% 41% / 54% 43% 43% 43%;

    & img {
    height: 0.8rem;
  }

    &:hover {
    border: 2px solid black;
  }

  @media ${device.tablet} {
    margin-right: 1rem;

      & img {
      height: 1rem;
    }
  }
`
const Button = styled.div`
  text-align: right;
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

  const navData = useStaticQuery(graphql`
    query {
      hera {
        navigationItems {
          text
          navigationText {
            url
          }
        }
      }
    }
  `)

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <NavContainer>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <NavWrapper isOpen={isOpen}>
        <Button onClick={handleToggle}>
          {isOpen ? 'close' : 'menu'}
        </Button>
        {isTabletOrMobile ?
          isOpen && navData.hera.navigationItems.map(navItem =>
            <LinkItem key={navItem.text} to={`/${navItem.text}`}>
              <img src={navItem.navigationText.url} alt={navItem.text} />
            </LinkItem >
          )
          : navData.hera.navigationItems.map(navItem =>
            <LinkItem key={navItem.text} to={`/${navItem.text}`}>
              <img src={navItem.navigationText.url} alt={navItem.text} />
            </LinkItem >
          )
        }
      </NavWrapper >
    </NavContainer >
  )
}

export default Navigation
