import { useToggleFavourite } from '../../hooks'
import ImageHolder from '../image-holder'
import {
  Container,
  CardLink,
  Card,
  ImageWrapper,
  OverflowWrapper,
  Image,
  Content,
  Title,
  Release,
  Rating,
  Bookmark
} from './styles'

export default function Cards({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Cards.Card = function CardsCard({ children, to, ...restProps }) {
  if (to !== undefined) {
    return (
      <CardLink to={to}>
        <Card {...restProps}>{children}</Card>
      </CardLink>
    )
  }

  return <Card {...restProps}>{children}</Card>
}

Cards.Card.ImageWrapper = function CardsWrapper({ children, ...restProps }) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

Cards.Card.Image = function CardsImage({ src, holderClass = 'far fa-image', ...restProps }) {
  return (
    <OverflowWrapper>
      {src ? (
        <Image src={src} {...restProps} />
      ) : (
        <ImageHolder className={holderClass} size="4rem" />
      )}
    </OverflowWrapper>
  )
}

Cards.Card.Content = function CardsContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Cards.Card.Title = function CardsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Cards.Card.Release = function CardsRelease({ children, ...restProps }) {
  return <Release {...restProps}>{children}</Release>
}

Cards.Card.Rating = function CardsRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>
}

Cards.Card.Bookmark = function CardsBookmark({ movie, ...restProps }) {
  const [isFavourite, handleClick] = useToggleFavourite(movie)

  return (
    <Bookmark
      onClick={handleClick}
      isFavourite={isFavourite}
      className={isFavourite && 'favourite'}
      {...restProps}
    />
  )
}
