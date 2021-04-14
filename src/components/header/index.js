import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Inner,
  Home,
  Title,
  Nav,
  NavList,
  NavItem,
  NavLinkStyled,
  Icon,
  SearchButton,
  SearchInput,
  SearchForm,
  SearchWrapper,
  NavContainer,
  Options
} from './styles'

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Header.NavContainer = function HeaderNavContainer({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>
}

Header.Options = function HeaderOptions({ children, ...restProps }) {
  return <Options {...restProps}>{children}</Options>
}

Header.Home = function HeaderHome({ children, to = '/', ...restProps }) {
  return (
    <Home to={to} {...restProps}>
      <Title>{children}</Title>
    </Home>
  )
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return (
    <Nav {...restProps}>
      <NavList>{children}</NavList>
    </Nav>
  )
}

Header.Nav.Item = function HeaderNavItem({ children, to = '/', ...restProps }) {
  return (
    <NavItem {...restProps}>
      <NavLinkStyled to={to}>{children}</NavLinkStyled>
    </NavItem>
  )
}

Header.Search = function HeaderSearch({ searchPath = '/search', ...restProps }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef()
  const buttonRef = useRef()
  const history = useHistory()

  const handleInputChange = event => {
    const { value } = event.target
    if (value.length < 40) {
      setSearchQuery(value)
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      const shouldCloseSearchBox =
        document.activeElement !== buttonRef.current && document.activeElement !== inputRef.current

      if (shouldCloseSearchBox) {
        setIsOpen(false)
      }
    }, 0)
  }

  const handleClick = event => {
    if (!isOpen || !searchQuery.length) {
      event.preventDefault()
      setIsOpen(state => !state)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    history.push(`${searchPath}?query=${searchQuery}`)
    document.activeElement.blur()
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <SearchForm onSubmit={handleSubmit} onBlur={handleBlur} {...restProps}>
      <SearchWrapper collapsed={!isOpen}>
        <SearchInput
          ref={inputRef}
          value={searchQuery}
          onChange={handleInputChange}
          tabIndex={isOpen ? '0' : '-1'}
          placeholder="Search"
        />
      </SearchWrapper>
      <SearchButton ref={buttonRef} onClick={handleClick}>
        <Icon className="fas fa-search" />
      </SearchButton>
    </SearchForm>
  )
}
