import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000aa;
  z-index: 1;
`

export const DimensionsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};

  @media (min-width: 800px) {
    width: 70%;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`
