import styled from 'styled-components'

export const Container = styled.section`
  margin: 1.5rem auto 2rem;
  width: calc(100% - 3rem);
  max-width: ${({ theme }) => theme.maxWidth};
`

export const Heading = styled.h2`
  font-size: 1.5rem;
`

export const Columns = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 14rem;
  }
`

export const Column = styled.div`
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};

  // overflow: hidden;
  min-width: 0;
`
