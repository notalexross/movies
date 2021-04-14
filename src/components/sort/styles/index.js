import styled from 'styled-components'

export const Container = styled.div`
  margin: 0.4rem 0;
`

export const Label = styled.label`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

export const Select = styled.select`
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.clrInputBG};
  color: ${({ theme }) => theme.clrInputFG};
`

export const Option = styled.option`
  background-color: ${({ theme }) => theme.clrLight};
`
