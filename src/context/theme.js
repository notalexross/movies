import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../themes'

const storedIsDarkTheme = JSON.parse(window.localStorage.getItem('is-dark-theme'))

export default function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(storedIsDarkTheme)

  const theme = isDarkTheme ? darkTheme : lightTheme

  const toggleTheme = () => {
    setIsDarkTheme(state => !state)
  }

  useEffect(() => {
    window.localStorage.setItem('is-dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return <ThemeProvider theme={{ toggleTheme, isDarkTheme, ...theme }}>{children}</ThemeProvider>
}
