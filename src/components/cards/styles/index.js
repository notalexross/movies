import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-items: center;
  grid-gap: 1.5rem;
  margin: 2rem 0;
`

export const CardLink = styled(Link)`
  width: 100%;
  max-width: 300px;
  text-decoration: none;
  transition: transform 0.1s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`

export const Card = styled.section`
  position: relative;
  height: 100%;
  max-width: 100%;
  border-radius: 2rem 0;
  background-color: ${({ theme }) => theme.clrHeaderBG};
  color: ${({ theme }) => theme.clrHeaderFG};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  transition: transform 0.1s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  max-width: 100%;
  padding-top: 149.9%;
  pointer-events: none;
`

export const OverflowWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`

export const Image = styled.img`
  width: 300px;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  pointer-events: auto;
`

export const Content = styled.div`
  position: relative;
  padding: 1rem;
  z-index: 1;
  pointer-events: none;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fwBold};
`

export const Release = styled.p`
  margin: 0.2em 0;
  opacity: 0.8;
`

export const Rating = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.2em 0.4em;
  border-radius: 0 0 0 0.4em;
  background-color: #00000070;
  color: ${({ theme }) => theme.clrLight};
  font-family: ${({ theme }) => theme.ffSecondary};
  font-size: 1.2rem;
`

export const Bookmark = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
  height: calc(100% - 0.6rem + 2rem);
  border-left: 0.6rem solid ${({ theme }) => theme.clrAccent};
  border-right: 0.6rem solid ${({ theme }) => theme.clrAccent};
  border-bottom: 0.6rem solid transparent;
  opacity: ${({ isFavourite }) => (isFavourite ? 1 : 0)};
  cursor: pointer;
  pointer-events: auto;
  transition: opacity 0.1s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.2rem;
    width: 0.4rem;
    height: 100%;
    background-color: ${({ theme }) => theme.clrAccent};
  }

  ${Card}:hover &,
  ${Card}:focus &,
  ${CardLink}:hover &,
  ${CardLink}:focus & {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  ${Card}:hover &.favourite,
  ${Card}:focus &.favourite,
  ${CardLink}:hover &.favourite,
  ${CardLink}:focus &.favourite {
    opacity: 1;

    &:hover {
      opacity: 0.5;
    }
  }
`
