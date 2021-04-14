import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.clrHeaderBG};
  color: ${({ theme }) => theme.clrHeaderFG};
  font-size: 1.2rem;

  @media (min-width: 1000px) {
    font-size: 1.4rem;
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 1.5rem 0;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

export const NavContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.07em;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  width: calc(100% + 3rem);
  padding: 0.21em 1.07em;
  background-color: ${({ theme }) => theme.clrInputBG};
  color: ${({ theme }) => theme.clrInputFG};
  font-size: 1rem;

  @media (min-width: 1000px) {
    width: unset;
    margin-bottom: 0.71em;
    padding: 0;
    background-color: unset;
    color: unset;
    font-size: 1em;
  }
`

export const Home = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`

export const Title = styled.h1`
  margin-right: 0.71em;
  color: ${({ theme }) => theme.clrAccent};
  font-size: 2em;
`

export const Nav = styled.nav`
  font-weight: ${({ theme }) => theme.fwBold};
  letter-spacing: 0.036em;
`

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 1.3;
  list-style-type: none;
`

export const NavItem = styled.li`
  &:not(:last-child)::after {
    content: '\u00B7';
    margin: 0 0.36em;
  }
`

export const NavLinkStyled = styled(NavLink)`
  padding-bottom: 0.05em;
  color: unset;
  text-decoration: none;

  &.active {
    border-bottom: solid 3px ${({ theme }) => theme.clrAccent};
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-direction: row-reverse;
  margin-left: 0.71em;
  margin-right: 0.36em;
  width: calc(100% - 1.43em);

  @media (min-width: 1000px) {
    justify-content: flex-end;
    flex-direction: row;
    width: 10em;
  }
`

export const SearchWrapper = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    width: ${({ collapsed }) => (collapsed ? '0' : '100%')};
    opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
    transition: width 0.2s ease-in-out, opacity 0.2s ease-in-out;
    overflow: ${({ collapsed }) => (collapsed ? 'hidden' : 'unset')};
  }
`

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.4em 0.8em;
  border: none;
  border-radius: 0.2em;
  background-color: ${({ theme }) => theme.clrInputBG};
  color: ${({ theme }) => theme.clrInputFG};
  font-size: 1rem;
`

export const SearchButton = styled.button`
  padding: 0.1em 0.2em;
  padding-left: 0.36em;
  border: unset;
  background-color: unset;
  color: unset;
  cursor: pointer;
`

export const Icon = styled.i``
