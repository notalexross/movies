import { Container, Inner, Item, Title, Value } from './styles'

export default function Facts({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Facts.Item = function FactsItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Facts.Item.Title = function FactsItemTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Facts.Item.Value = function FactsItemValue({ children, ...restProps }) {
    return <Value {...restProps}>{children}</Value>
}