import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 48px;
  }

  h2 {
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    font-size: 32px;
  }

  h3 {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 24px;
  }

  h4 {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }

  h5 {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  h6 {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`

// font-family: 'Barlow', sans-serif;
// font-family: 'Lato', sans-serif;

const theme = {
  colors: {
    background: '#EEECE7',
    dark1: '#161311',
    dark2: '#423E3C',
    dark3: '#807E7C',
    dark4: '#C3BDB8'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
