import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, Icon, Button } from './styles'

function ToggleButton({ isDarkTheme, ...restProps }) {
  return isDarkTheme ? (
    <Button {...restProps}>
      <Icon className="fas fa-sun" />
    </Button>
  ) : (
    <Button {...restProps}>
      <Icon className="fas fa-moon" />
    </Button>
  )
}

export default function ThemeChanger({ children, ...restProps }) {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext)

  return (
    <Container {...restProps}>
      <ToggleButton onClick={toggleTheme} isDarkTheme={isDarkTheme} />
      {children}
    </Container>
  )
}
