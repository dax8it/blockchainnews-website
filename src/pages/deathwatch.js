import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const DeathWatch = () => (
  <Layout>
    <Helmet>
      <title>Blockchain Death Watch</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <PageTitle>When good ideas go bad</PageTitle>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
  </Layout>
)

export default DeathWatch
