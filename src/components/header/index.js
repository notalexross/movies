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

// TODO: header should stick to top when scrolling up, but scroll off when scroll down.

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

Header.Home = function HeaderHome({ to = '/', children, ...restProps }) {
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

Header.Nav.Item = function HeaderNavItem({ to = '/', children, ...restProps }) {
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
  const keepFormOpen = useRef(false)
  const history = useHistory()

  const handleInputChange = event => {
    const { value } = event.target
    if (value.length < 40) {
      setSearchQuery(value)
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      if (
        document.activeElement !== buttonRef.current &&
        document.activeElement !== inputRef.current &&
        !keepFormOpen.current
      ) {
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
    // TODO: maybe uncomment this so search box stays open when submitted?
    // keepFormOpen.current = true
    document.activeElement.blur()
    setTimeout(() => {
      keepFormOpen.current = false
    }, 0)
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus()
    } else {
      // TODO: should it clear on open?
      // setSearchQuery('')
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
