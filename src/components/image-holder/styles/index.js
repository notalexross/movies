import styled from 'styled-components'

export const Container = styled.div`
  position: ${({ ratio }) => (ratio ? 'relative' : 'unset')};
  width: 100%;
  padding-top: ${({ ratio }) => `calc(100% * ${ratio})`};
`

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
`
