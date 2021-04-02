import { Container, Inner, Item, Title } from './styles'

export default function Keywords({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Keywords.Item = function KeywordsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Keywords.Title = function KeywordsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
