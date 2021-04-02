import styled from 'styled-components'

export const Container = styled.section``

export const Inner = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    flex-direction: column;
  }
`

export const Item = styled.li`
  // width: max-content;
  max-width: 12rem;
  margin-right: 2rem;
`

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fwBold};
  margin-bottom: 0.2rem;
`

export const Value = styled.p`
  // font-size: 1rem;
`
