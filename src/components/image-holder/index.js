import { Container, Icon } from './styles'

export default function ImageHolder({ size = '3rem', ratio = 0, className, ...restProps }) {
  return (
    <Container ratio={ratio}>
      <Icon className={className} fontSize={size} {...restProps} />
    </Container>
  )
}
