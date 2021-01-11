import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from './header';

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  background: #EEECE7;
  height: 100vh;
  padding: 2rem 4rem;
`

const Layout = ({ children }) => (
  <Container>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Lato&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    {children}
  </Container>
)

export default Layout
