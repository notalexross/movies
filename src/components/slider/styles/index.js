import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  overflow-x: scroll;

  & > * + * {
    margin-left: 1rem;
  }
`

export const Item = styled.div`
  flex-shrink: 0;
  width: ${({ $imgHeight, $ratio }) => `calc(${$imgHeight} * ${$ratio})`};
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.clrHeaderBG};
  color: ${({ theme }) => theme.clrHeaderFG};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
`

export const LinkItem = styled(Item).attrs({ as: Link })`
  text-decoration: none;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ ratio }) => `calc(100% / ${ratio})`};
  overflow: hidden;
`

export const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
`

export const Content = styled.div`
  padding: 0.5rem 0.8rem;
`

export const Title = styled.h2`
  margin-bottom: 0.1rem;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fwBold};
`

export const Subtitle = styled.p`
  margin: 0;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.2;
`
