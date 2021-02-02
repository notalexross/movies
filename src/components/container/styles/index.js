import styled from 'styled-components'

export const Container = styled.div`
    margin: 1.5rem auto 2rem;
    width: calc(100% - 3rem);
    max-width: ${({ theme }) => theme.maxWidth};
`