import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import Layout from '../components/Layout'
import PosterBoard from '../components/PosterBoard'
import SpecialEvent from '../components/SpecialEvent'
import Flower from '../components/Flower'
import SEO from '../components/seo'

const IndexPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

  const homepageData = useStaticQuery(graphql`
    query {
      hera {
        homepageImages {
          image {
            url
          }
        }
        homepageSpecialEvents {
          specialImage {
            url
          }
          specialEventUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='Home' />
      <PosterBoard images={homepageData.hera.homepageImages} />
      {
        homepageData.hera.homepageSpecialEvents.length ?
          <SpecialEvent image={homepageData.hera.homepageSpecialEvents[0].specialImage.url} url={homepageData.hera.homepageSpecialEvents[0].specialEventUrl} /> : null
      }
      {!isTabletOrMobile ? <Flower bottom large /> : null}
      <Flower right top />
    </Layout>
  )
}

export default IndexPage
