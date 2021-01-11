import styled from 'styled-components'
// components
import Layout from '../components/layout'

// styles
const Container = styled.div`
  max-width: 700px;

  h3 {
    margin-bottom: 2rem;
  }

  button {
    background: #161311;
    padding: 1rem;
    border: 2px solid #161311;
    border-radius: 2px;
    color: #EEECE7;
    font-size: 16px;

    :hover {
      background: #EEECE7;
      color: #161311;
      cursor: pointer;
    }
  }
`

const Home = () =>
  <Layout>
    <Container>
      <h1>Shopify theme customization</h1>
      <h3>You love your theme, but just wish it could do one extra thing - or provide this layout it doesnt quite have. Thats what we are here for.</h3>
      <a href='mailto:edward@honos.dev'>
        <button>Send an Email</button>
      </a>
    </Container>
  </Layout>

export default Home
