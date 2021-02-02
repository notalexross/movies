import { Container, Heading, Columns, Column } from './styles'

export default function Content({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Content.Heading = function ContentHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}

Content.Columns = function ContentColumns({ children, ...restProps }) {
    return <Columns {...restProps}>{children}</Columns>
}

Content.Column = function ContentColumn({ row, column, children, ...restProps }) {
    return <Column row={row} column={column} {...restProps}>{children}</Column>
}
