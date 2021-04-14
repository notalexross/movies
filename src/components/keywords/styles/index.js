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
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.clrInputBG};
  color: ${({ theme }) => theme.clrInputFG};
  font-size: 0.9rem;
`

export const Title = styled.h2`
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
`
