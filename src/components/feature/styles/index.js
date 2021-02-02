import styled from 'styled-components'

export const Container = styled.section`
    background-image: url('${({ backgroundSrc }) => backgroundSrc}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.clrHeaderBG};
    background-blend-mode: multiply;
    color: #e5e5e5;
    padding: 2rem 0;
`

export const Inner = styled.div`
    margin: 0 auto;
    width: calc(100% - 3rem);
    max-width: ${({ theme }) => theme.maxWidth};
    
    display: flex;
    align-items: flex-start;
    & > * + * {
        margin-left: 0rem;
    }
    
    flex-direction: column-reverse;
    @media (min-width: 650px) {
        flex-direction: row;
        & > * + * {
            margin-left: 2rem;
        }
    }
`

export const Poster = styled.div`
    background-color:  ${({ theme }) => theme.clrHeaderBG};
    border-radius: 0.6rem;
    overflow: hidden;
    flex-shrink: 0;
    
    width: 100%;
    margin-top: 1.5rem;
    @media (min-width: 650px) {
        width: auto;
        margin-top: 0;
    }
    
    box-shadow: ${({ theme }) => theme.boxShadow};
`

export const ImageWrapper = styled.div`
    max-width: 100%;
    min-width: 100%;
    width: 200px;
    
    display: none;
    @media (min-width: 650px) {
        display: block;
    }
    @media (min-width: 900px) {
        width: 300px
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
`

export const Watch = styled.div`
    padding: 0.5rem 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Provider = styled.img`
    max-width: 2rem;
    max-height: 2rem;
    border-radius: 0.2rem;
`

export const Link = styled.a`
    & + & {
        margin-left: 0.4rem;
    }
`

export const JustWatchLogo = styled.img`
    max-width: 0.7rem;
    max-height: 0.7rem;
    margin-right: 0.4rem;
`

export const WatchLabel = styled.div`
    margin-left: 0.8rem;
    font-size: 0.9rem;
`

export const WatchText = styled.div`
    
`

export const WatchLink = styled.a`
    text-decoration: none;
    color: unset;
    font-weight: ${({ theme }) => theme.fwBold};
    display: flex;
    align-items: center;
`

export const Content = styled.div`
    align-self: center;
`


export const Title = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
`

export const TitleDate = styled.span`
    font-weight: ${({ theme }) => theme.fwReg};
    opacity: 0.7;
`

export const Facts = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    
    & > * + *::before {
        margin-left: 0.5rem;
    }
    
    & > * + *::before {
        content: '\u00B7';
        margin-right: 0.5rem;
        font-weight: ${({ theme }) => theme.fwBold};
    }
    
`

export const Fact = styled.div``

export const Certification = styled.span`
    border: solid 1px;
    border-radius: 0.2rem;
    padding: 0.1rem 0.2rem;
    opacity: 0.7;
`

export const Rate = styled.div``

export const Actions = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: ${({ theme }) => theme.fwBold};
    font-size: 0.9rem;
    line-height: 1.7;
`

export const Action = styled.li`
    margin-right: 1.3rem;
    
    cursor: pointer;
    user-select: none;
`

export const Rating = styled.a`
    text-decoration: none;
    color: unset;
`

export const Favourite = styled.div``

export const Trailer = styled.div``

export const Icon = styled.i`
    font-size: 0.8rem;
    margin-right: 0.5rem;
`

export const IconStar = styled.i`
    cursor: pointer;
`

export const Tagline = styled.p`
    font-style: italic;
    opacity: 0.7;
    margin-bottom: 1rem;
`

export const Subheading = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1rem;
`

export const Text = styled.p`
    line-height: 1.3;
`

export const People = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 0;
    
    & > :not(*:last-child) {
        margin-right: 1rem;
    }
`

export const Person = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    
    & > * + * {
        margin-top: 0.2rem;
    }
`

export const PersonName = styled.span`
    font-weight: ${({ theme }) => theme.fwBold};
`

export const PersonRole = styled.span`
    font-size: 0.8rem;
    opacity: 0.7;
`
