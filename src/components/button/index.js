import { Container } from './styles'

export default function Button({ isShown, onClick = () => {}, children, ...restProps }) {
  const handleClick = event => {
    event.target.blur()
    onClick()
  }

  return isShown ? (
    <Container onClick={handleClick} {...restProps}>
      {children}
    </Container>
  ) : null
}
