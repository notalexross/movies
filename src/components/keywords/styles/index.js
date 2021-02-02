import styled from 'styled-components'

export const Container = styled.section`
    margin-bottom: 1rem;
`

export const Inner = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 0.2rem;
    display: flex;
    flex-wrap: wrap;
`

export const Item = styled.li`
    background-color: ${({ theme }) => theme.clrInputBG};
    color: ${({ theme }) => theme.clrInputFG};
    padding: 0.3rem 0.6rem;
    margin-bottom: 0.3rem;
    margin-right: 0.3rem;
    border-radius: 0.25rem;
    font-size: 0.9rem;
`

export const Title = styled.h2`
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
`