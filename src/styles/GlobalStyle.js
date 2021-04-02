import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1, h2, h3 {
    margin: 0;
  }

  p {
    margin-top: 0;
  }
  
  body {
    font-family: ${({ theme }) => theme.ffPrimary};
    font-weight: ${({ theme }) => theme.fwReg};
    color: ${({ theme }) => theme.clrPrimary};
    background-color: ${({ theme }) => theme.clrSecondary};
  }
`

// TODO: figure out why adding default props to GlobalStyle overwrites styles from ThemeContext.
// GlobalStyle.defaultProps = {
//     theme: {
//         clrPrimary: 'black'
//     }
// }

export default GlobalStyle
