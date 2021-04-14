import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.clrFooterBG};
  color: ${({ theme }) => theme.clrFooterFG};
  box-shadow: 0 50vh 0 50vh ${({ theme }) => theme.clrFooterBG};
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1.5rem;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 100px;

  @media (min-width: 500px) {
    max-width: 200px;
  }
`

export const Text = styled.p`
  margin-bottom: 0.5em;
  opacity: 0.9;
  font-size: 1rem;
`

export const Left = styled.div``

export const Right = styled.div`
  & > * + * {
    margin-left: 1rem;
  }
`

export const Anchor = styled.a`
  color: unset;
  text-decoration: none;
`

export const Icon = styled.i`
  opacity: 0.9;
  font-size: 1.5rem;

  @media (min-width: 500px) {
    font-size: 2.5rem;
  }
`
