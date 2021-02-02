import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    overflow-x: scroll;
    padding: 1rem;
    
    & > * + * {
        margin-left: 1rem;
    }
    
    margin-bottom: 1rem;    
`

export const Item = styled.div`
    flex-shrink: 0;
    border-radius: 0.7rem;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow};
    width: ${({ $imgHeight, $ratio }) => `calc(${$imgHeight} * ${$ratio})`};
    
    background-color: ${({ theme }) => theme.clrHeaderBG};
    color: ${({ theme }) => theme.clrHeaderFG};
`

export const LinkItem = styled(Item).attrs({
    as: Link
})`
    text-decoration: none;
    
    &:hover,
    &:focus {
        transform: scale(1.02);
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    
    padding-top: ${({ ratio }) => `calc(100% / ${ratio})`};
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    position: absolute;
    top: 0;
    left: 0;
`

export const Content = styled.div`
    padding: 0.5rem 0.8rem;
`

export const Title = styled.h2`
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fwBold};
    margin-bottom: 0.1rem;
`

export const Subtitle = styled.p`
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.2;
    margin: 0;
`