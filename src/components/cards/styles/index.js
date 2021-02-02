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
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 2rem 0;
    overflow: hidden;
    position: relative;
    max-width: 100%;
    height: 100%;
    
    background-color: ${({ theme }) => theme.clrHeaderBG};
    color: ${({ theme }) => theme.clrHeaderFG};
    
    transition: transform 0.1s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.02);
    }
`

export const ImageWrapper = styled.div`
    padding-top: 149.9%;
    position: relative;

    max-width: 100%;
    width: 300px;
    
    pointer-events: none; // allows clicking bookmark
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
    max-width: 100%;
    width: 300px;
    
    pointer-events: auto; // prevent clicking bookmark behind
    
    object-fit: cover;
    height: 100%;
`

export const Content = styled.div`
    position: relative;
    z-index: 1;
    padding: 1rem;
    
    pointer-events: none; // allows clicking bookmark
`

export const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fwBold};
    // margin-right: 1rem; // prevents covering bookmark
`

export const Release = styled.p`
    opacity: 0.8;
    margin: 0.2em 0;
`

export const Rating = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2em 0.4em;
    font-family: ${({ theme }) => theme.ffSecondary};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.clrLight};
    background-color: #00000070;
    border-radius: 0 0 0 0.4em;
`

export const Bookmark = styled.div`
    position: absolute;
    top: 0;
    right: 0.5rem;
    
    height: calc(100% - 0.6rem + 2rem);
    border-left: 0.6rem solid ${({ theme }) => theme.clrAccent};
    border-right: 0.6rem solid ${({ theme }) => theme.clrAccent};
    border-bottom: 0.6rem solid transparent;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -0.2rem;
        background-color: ${({ theme }) => theme.clrAccent};
        width: 0.4rem;
        height: 100%;
    }
    
    pointer-events: auto; // allows clicking bookmark
    cursor: pointer;
    
    transition: opacity 0.1s ease-in-out;
    opacity: ${({ isFavourite }) => isFavourite ? 1 : 0};
    ${Card}:hover &,
    ${Card}:focus &,
    ${CardLink}:hover &,
    ${CardLink}:focus & {
        opacity: 0.5;
        &:hover {
            opacity: 1;
        };
    };
    ${Card}:hover &.favourite,
    ${Card}:focus &.favourite,
    ${CardLink}:hover &.favourite,
    ${CardLink}:focus &.favourite {
        opacity: 1;
        &:hover {
            opacity: 0.5;
        };
    };
`