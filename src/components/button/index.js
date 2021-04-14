import { Container } from './styles'

export default function Button({ children, isShown, onClick = () => {}, ...restProps }) {
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
