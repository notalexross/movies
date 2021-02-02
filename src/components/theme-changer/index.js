import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, Icon, Button } from './styles'

export default function ThemeChanger({ children, ...restProps }) {
    const { toggleTheme, isDarkTheme } = useContext(ThemeContext)
    
    function ToggleButton({ ...restProps }) {
        return isDarkTheme ?
            <Button {...restProps}><Icon className="fas fa-sun"></Icon></Button> :
            <Button {...restProps}><Icon className="fas fa-moon"></Icon></Button>
    }
    
    return (
        <Container {...restProps}>
            <ToggleButton onClick={toggleTheme}/>
            {children}
        </Container>
    )
}