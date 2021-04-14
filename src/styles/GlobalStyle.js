import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1, h2, h3 {
    margin: 0;
  }

  p {
    margin-top: 0;
  }
  
  body {
    background-color: ${({ theme }) => theme.clrSecondary};
    color: ${({ theme }) => theme.clrPrimary};
    font-family: ${({ theme }) => theme.ffPrimary};
    font-weight: ${({ theme }) => theme.fwReg};
  }
`

export default GlobalStyle
