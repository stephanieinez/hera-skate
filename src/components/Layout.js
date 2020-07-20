import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Navigation from './Navigation'
import Footer from './Footer'
import { device } from '../utils/device'

import '../css/styles.css'

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 3rem 0.75rem;

  @media ${device.tablet} {
    padding: 3rem 1.5rem;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <PageContainer>
        <main>{children}</main>
      </PageContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
