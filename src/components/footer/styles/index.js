import styled from 'styled-components'

export const Container = styled.footer`
    color: ${({ theme }) => theme.clrFooterFG };
    background-color: ${({ theme }) => theme.clrFooterBG };
    box-shadow: 0 50vh 0 50vh ${({ theme }) => theme.clrFooterBG };

    // border-top: solid 1px;
`

export const Inner = styled.div`
    padding: 1.5rem;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 100%;
    max-width: 100px;

    @media (min-width: 500px) {
        max-width: 200px;
    }
`

export const Text = styled.p`
    opacity: 0.9;
    font-size: 1rem;
    margin-bottom: 0.5em;
`

export const Left = styled.div``

export const Right = styled.div`
    & > * + * {
        margin-left: 1rem;
    }
`

export const Anchor = styled.a`
    text-decoration: none;
    color: unset;
`

export const Icon = styled.i`
    opacity: 0.9;

    font-size: 1.5rem;
    @media (min-width: 500px) {
        font-size: 2.5rem;
    }
`