import React from "react"
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from "../components/seo"

import { device } from '../utils/device';

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 3rem 0.5rem;
  max-width: 50rem;

  @media ${device.tablet} {
    padding: 4rem 2rem;
  }
`

const Header = styled.img`
  height: 2rem;

  @media ${device.tablet} { 
    height: 3rem;
  }
`

const Content = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  
    & > img {
      width: 100%;
      height: 100%;
    }

    & > video {
      width: 100%;
      height: 100%;
    }

  @media ${device.tablet} {
    margin-top: 4rem;
    font-size: 1rem;
  }
`

const ContentPage = ({ pageContext }) => {
  const page = pageContext.page;
  const title = pageContext.titleImage;
  const content = pageContext.content;

  const createMarkup = () => {
    return { __html: content }
  }

  return (
    <Layout>
      <SEO title={page} />
      <ContentWrapper>
        <Header src={title} alt={page} />
        <Content dangerouslySetInnerHTML={createMarkup()} />
      </ContentWrapper>
    </Layout>
  )
}

export default ContentPage
