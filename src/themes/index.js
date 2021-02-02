const commonTheme = {
    // ffPrimary: '"Roboto", sans-serif',
    ffPrimary: '"Source Sans Pro", sans-serif',
    ffSecondary: '"Russo One", sans-serif',
    fwReg: 400,
    fwBold: 900,
    clrLight: '#fff',
    clrDark: '#1e1e1e',
    clrInputBG: '#e5e5e5',
    clrInputFG: '#1e1e1e',
    // maxWidth: '1000px',
    maxWidth: '1300px',
    boxShadow: '0.25rem 0.25rem 0.75rem rgba(0,0,0,.25), 0.125rem 0.125rem 0.25rem rgba(0,0,0,.15)',
}

const darkTheme = {
    ...commonTheme,
    clrPrimary: '#e5e5e5', // color
    clrSecondary: '#252525', // background
    clrAccent: '#7f7f7f',
    clrHeaderFG: '#e5e5e5',
    clrHeaderBG: '#181818',
    clrFooterFG: '#e5e5e5',
    clrFooterBG: 'black'
}

const lightTheme = {
    ...commonTheme,
    clrPrimary: '#1e1e1e', // color
    clrSecondary: '#fff', // background
    clrAccent: '#01b4e4',
    clrHeaderFG: '#e5e5e5',
    clrHeaderBG: '#0d253f',
    clrFooterFG: '#e5e5e5',
    clrFooterBG: '#0d253f'
}

export { darkTheme, lightTheme }
