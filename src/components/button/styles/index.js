import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.clrAccent};
  color: ${({ theme }) => theme.clrHeader};
  border: none;
  border-radius: 0.3rem;
  font-family: unset;
  font-weight: 900;
  letter-spacing: 0.05em;
  font-size: 1.2rem;
  padding: 0.5em 1.4em;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`
