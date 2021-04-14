import { Container, Icon } from './styles'

export default function ImageHolder({ className, size = '3rem', ratio = 0, ...restProps }) {
  return (
    <Container ratio={ratio}>
      <Icon className={className} fontSize={size} {...restProps} />
    </Container>
  )
}
