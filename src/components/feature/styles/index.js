import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem 0;
  background-image: url('${({ backgroundSrc }) => backgroundSrc}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.clrHeaderBG};
  background-blend-mode: multiply;
  color: #e5e5e5;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  width: calc(100% - 3rem);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  & > * + * {
    margin-left: 0;
  }

  @media (min-width: 650px) {
    flex-direction: row;

    & > * + * {
      margin-left: 2rem;
    }
  }
`

export const Poster = styled.div`
  flex-shrink: 0;
  width: 100%;
  margin-top: 1.5rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.clrHeaderBG};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;

  @media (min-width: 650px) {
    width: auto;
    margin-top: 0;
  }
`

export const ImageWrapper = styled.div`
  display: none;
  width: 200px;
  max-width: 100%;
  min-width: 100%;

  @media (min-width: 650px) {
    display: block;
  }

  @media (min-width: 900px) {
    width: 300px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
`

export const Watch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.3rem;
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

export const WatchText = styled.div``

export const WatchLink = styled.a`
  display: flex;
  align-items: center;
  color: unset;
  font-weight: ${({ theme }) => theme.fwBold};
  text-decoration: none;
`

export const Content = styled.div`
  align-self: center;
`

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
`

export const TitleDate = styled.span`
  opacity: 0.7;
  font-weight: ${({ theme }) => theme.fwReg};
`

export const Facts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.7;

  & > * + *::before {
    content: '\u00B7';
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-weight: ${({ theme }) => theme.fwBold};
  }
`

export const Fact = styled.div``

export const Certification = styled.span`
  padding: 0.1rem 0.2rem;
  border: solid 1px;
  border-radius: 0.2rem;
  opacity: 0.7;
`

export const Rate = styled.div``

export const Actions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  font-weight: ${({ theme }) => theme.fwBold};
  font-size: 0.9rem;
  line-height: 1.7;
  list-style: none;
`

export const Action = styled.li`
  margin-right: 1.3rem;
  cursor: pointer;
  user-select: none;
`

export const Rating = styled.a`
  color: unset;
  text-decoration: none;
`

export const Favourite = styled.div``

export const Trailer = styled.div``

export const Icon = styled.i`
  margin-right: 0.5rem;
  font-size: 0.8rem;
`

export const IconStar = styled.i`
  cursor: pointer;
`

export const Tagline = styled.p`
  margin-bottom: 1rem;
  opacity: 0.7;
  font-style: italic;
`

export const Subheading = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

export const Text = styled.p`
  line-height: 1.3;
`

export const People = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding: 0;
  list-style: none;

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
  opacity: 0.7;
  font-size: 0.8rem;
`
