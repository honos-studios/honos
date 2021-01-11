import Link from 'next/link'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;

  a {
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: #161311;
    text-decoration: none;
  }
`

const Header = () => (
  <Container>
    <Link href='/'>
      <a>Honos</a>
    </Link>
  </Container>
)

export default Header
