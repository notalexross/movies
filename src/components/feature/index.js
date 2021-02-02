import React, { useState, useContext } from 'react'
import { PersonalRatingContext } from '../../context/personal-rating.js'
import { useToggleFavourite } from '../../hooks'
import { ImageHolder } from '..'
import {
    Container,
    Inner,
    Poster,
    ImageWrapper,
    Image,
    Content,
    Watch,
    Provider,
    Link,
    JustWatchLogo,
    WatchLabel,
    WatchText,
    WatchLink,
    Title,
    TitleDate,
    Facts,
    Fact,
    Certification,
    Rate,
    Actions,
    Action,
    Rating,
    Favourite,
    Trailer,
    Icon,
    IconStar,
    Tagline,
    Subheading,
    Text,
    People,
    Person,
    PersonName,
    PersonRole
} from './styles'

export default function Feature({ backgroundSrc, children, ...restProps }) {
    return (
        <Container backgroundSrc={backgroundSrc} {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Feature.Poster = function FeaturePoster({ children, ...restProps }) {
    return <Poster {...restProps}>{children}</Poster>
}

Feature.Image = function FeatureImage({ src, ...restProps }) {
    return (
        <ImageWrapper {...restProps}>
            {src ?
                <Image src={src} {...restProps}></Image> :
                <ImageHolder ratio="1.5" size="7rem" className="far fa-image"/>
            }
        </ImageWrapper>
    )
}

Feature.Content = function FeatureContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}

Feature.Watch = function FeatureWatch({ children, ...restProps }) {
    return <Watch {...restProps}>{children}</Watch>
}

Feature.Provider = function FeatureProvider({ src, href, children, ...restProps }) {
    return src ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <Provider src={src} {...restProps}>{children}</Provider>
        </Link>
    ) : null
}

Feature.JustWatchLogo = function FeatureJustWatchLogo({ src, ...restProps }) {
    return src ? (
        <JustWatchLogo src={src} {...restProps}></JustWatchLogo>
    ) : null
}

Feature.Watch.Label = function FeatureWatchLabel({ children, ...restProps }) {
    return <WatchLabel {...restProps}>{children}</WatchLabel>
}

Feature.Watch.Text = function FeatureWatchText({ children, ...restProps }) {
    return <WatchText {...restProps}>{children}</WatchText>
}

Feature.Watch.Link = function FeatureWatchLink({ children, ...restProps }) {
    return (
        <WatchLink target="_blank" rel="noopener noreferrer" {...restProps}>
            {children}
        </WatchLink>
    )
}


Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Feature.TitleDate = function FeatureTitleDate({ children, ...restProps }) {
    return <TitleDate {...restProps}>{children}</TitleDate>
}

Feature.Facts = function FeatureFacts({ children, ...restProps }) {
    return <Facts {...restProps}>{children}</Facts>
}

Feature.Fact = function FeatureFact({ children, ...restProps }) {
    return <Fact {...restProps}>{children}</Fact>
}

Feature.Certification = function FeatureCertification({ children, ...restProps }) {
    return <Certification {...restProps}>{children}</Certification>
}

const Star = function FeatureRateStar({
    idx,
    hoverIndex,
    setHoverIndex,
    ratingIndex,
    setRatingIndex,
    ...restProps
}) { 
    const isFilled = (
        (hoverIndex !== undefined && idx <= hoverIndex) ||
        (hoverIndex === undefined && idx <= ratingIndex)
    )
    
    const handleClick = () => {
        setRatingIndex(idx)
    }
    
    const handleMouseEnter = () => {
        setHoverIndex(idx)
    }
    
    const handleMouseLeave = () => {
        setHoverIndex()
    }
    
    return isFilled ?
        <IconStar
            className="fas fa-star"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...restProps}
        /> :
        <IconStar
            className="far fa-star"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...restProps}
        />
}

Feature.Rate = function FeatureRate({ movieId, ...restProps }) {
    const { getRating, setRating } = useContext(PersonalRatingContext)
    const [ hoverIndex, setHoverIndex ] = useState()
    // const [ ratingIndex, setRatingIndex ] = useState() // TODO: should come from context. Supply movie ID.
    
    const ratingIndex = getRating(movieId)
    
    const setRatingIndex = idx => {
        setRating(movieId, idx)
    }
    
    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(<Star
            key={i}
            idx={i}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            ratingIndex={ratingIndex}
            setRatingIndex={setRatingIndex}
        />)
    }

    return (
        <Rate {...restProps}>
            {stars}
        </Rate>
    )
}

Feature.Actions = function FeatureActions({ children, ...restProps }) {
    return <Actions {...restProps}>{children}</Actions>
}

Feature.Action = function FeatureAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>
}

Feature.Rating = function FeatureRating({ children, ...restProps }) {
    // TODO: this should scroll page to review section on click
    // hopefully via anchor tag, so can focus with tab
    return <Rating {...restProps}>{children}</Rating>
}

Feature.Favourite = function FeatureFavourite({ movie, ...restProps }) {
    const [ isFavourite, handleClick ] = useToggleFavourite(movie)
    
    return (
        <Favourite onClick={handleClick} {...restProps}>
            {isFavourite ?
                <Icon className="fas fa-bookmark" /> :
                <Icon className="far fa-bookmark" />
            }
            {isFavourite ? 'Remove Bookmark' : 'Add Bookmark'}
        </Favourite>
    )
}

Feature.Trailer = function FeatureTrailer({ children, ...restProps }) {
    return (
        <Trailer {...restProps}>
            <Icon className="fas fa-play" />
            {children}
        </Trailer>
    )
}

Feature.Tagline = function FeatureTagline({ children, ...restProps }) {
    return <Tagline {...restProps}>{children}</Tagline>
}

Feature.Subheading = function FeatureSubheading({ children, ...restProps }) {
    return <Subheading {...restProps}>{children}</Subheading>
}

Feature.Text = function FeatureText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

// TODO: People onwards currently not used. Fill with Director/writer/etc.

Feature.People = function FeaturePeople({ children, ...restProps }) {
    return <People {...restProps}>{children}</People>
}

Feature.Person = function FeaturePerson({ children, ...restProps }) {
    return <Person {...restProps}>{children}</Person>
}

Feature.Person.Name = function FeaturePersonName({ children, ...restProps }) {
    return <PersonName {...restProps}>{children}</PersonName>
}

Feature.Person.Role = function FeaturePersonRole({ children, ...restProps }) {
    return <PersonRole {...restProps}>{children}</PersonRole>
}
