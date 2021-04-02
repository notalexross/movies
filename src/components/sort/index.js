import { Container, Label, Select, Option } from './styles'

export default function Sort({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Sort.Label = function SortLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}

Sort.Select = function SortSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>
}

Sort.Option = function SortOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>
}
