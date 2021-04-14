import styled from 'styled-components'

export const Container = styled.section``

export const Inner = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: 900px) {
    flex-direction: column;
  }
`

export const Item = styled.li`
  max-width: 12rem;
  margin-right: 2rem;
`

export const Title = styled.h2`
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fwBold};
`

export const Value = styled.p``
