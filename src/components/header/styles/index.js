import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
    background-color: ${({ theme }) => theme.clrHeaderBG};
    color: ${({ theme }) => theme.clrHeaderFG};
    
    font-size: 1.2rem;
    @media (min-width: 1000px) {
        font-size: 1.4rem;
    }

    width: 100%;
    box-sizing: border-box;

    // border-bottom: solid 1px;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    
    flex-direction: column;
    @media (min-width: 1000px) {
        flex-direction: row;
    }
    
    padding: 1rem 1.5rem 0;
`

export const NavContainer = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: column;
    @media (min-width: 700px) {
        flex-direction: row;
    }
    width: 100%;
    margin-bottom: 1.07em;
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;

    width: calc(100% + 3rem);
    background-color: ${({ theme }) => theme.clrInputBG};
    color: ${({ theme }) => theme.clrInputFG};
    padding: 0.21em 1.07em;
    font-size: 1rem;
    @media (min-width: 1000px) {
        width: unset;
        background-color: unset;
        color: unset;
        padding: 0;
        margin-bottom: 0.71em;
        font-size: 1em;
    }
`

export const Home = styled(NavLink)`
    text-decoration: none;
    color: inherit;
`

export const Title = styled.h1`
    font-size: 2em;
    margin-right: 0.71em;
    color: ${({ theme }) => theme.clrAccent};
`

export const Nav = styled.nav`
    font-weight: ${({ theme }) => theme.fwBold };
    letter-spacing: 0.036em;
`

export const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.3;
    text-align: center;
`

export const NavItem = styled.li`
    &:not(:last-child)::after {
        content: '\u00B7';
        margin-left: 0.36em;
        margin-right: 0.36em;
    }
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: unset;
    padding-bottom: 0.05em;
    
    &.active {
        border-bottom: solid 3px ${({ theme }) => theme.clrAccent};
    }
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-left: 0.71em;
    margin-right: 0.36em;
    flex-direction: row-reverse;
    justify-content: flex-start;
    width: calc(100% - 1.43em);
    @media (min-width: 1000px) {
        justify-content: flex-end;
        flex-direction: row;
        // width: 230px;
        width: 10em;
    }
`

export const SearchWrapper = styled.div`  
    width: 100%;
    @media (min-width: 1000px) {
        width: ${({ collapsed }) => collapsed ? '0' : '100%'};
        overflow: ${({ collapsed }) => collapsed ? 'hidden' : 'unset'};
        opacity: ${({ collapsed }) => collapsed ? '0' : '1'};
        transition: width 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }
`

export const SearchInput = styled.input`
    width: 100%;
    background-color: #e5e5e5;
    border: none;
    background-color: ${({ theme }) => theme.clrInputBG};
    color: ${({ theme }) => theme.clrInputFG};
    border-radius: 0.2em;
    box-sizing: border-box;
    padding: 0.4em 0.8em;
    font-size: 1rem;
`

export const SearchButton = styled.button`
    cursor: pointer;
    background-color: unset;
    color: unset;
    border: unset;
    padding: 0.1em 0.2em;
    padding-left: 0.36em;
`

export const Icon = styled.i``