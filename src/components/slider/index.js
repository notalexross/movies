import React, { createContext, useContext } from 'react'
import ImageHolder from '../image-holder'
import { Container, Item, LinkItem, ImageWrapper, Image, Content, Title, Subtitle } from './styles'

const SliderItemContext = createContext()

export default function Slider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Slider.Item = function SliderItem({
  to,
  imgHeight = '180px',
  ratio = 0.8,
  children,
  ...restProps
}) {
  return (
    <SliderItemContext.Provider value={{ ratio }}>
      {to ? (
        <LinkItem to={to} $imgHeight={imgHeight} $ratio={ratio} {...restProps}>
          {children}
        </LinkItem>
      ) : (
        <Item $imgHeight={imgHeight} $ratio={ratio} {...restProps}>
          {children}
        </Item>
      )}
    </SliderItemContext.Provider>
  )
}

Slider.Item.Image = function SliderItemImage({ src, holderClass = 'far fa-image', ...restProps }) {
  const { ratio } = useContext(SliderItemContext)

  return (
    <ImageWrapper ratio={ratio}>
      {src ? <Image src={src} {...restProps} /> : <ImageHolder className={holderClass} />}
    </ImageWrapper>
  )
}

Slider.Item.Content = function SliderItemContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Slider.Item.Title = function SliderItemTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Slider.Item.Subtitle = function SliderItemSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
