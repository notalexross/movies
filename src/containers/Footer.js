import { Footer } from '../components'

export default function FooterContainer() {
  return (
    <Footer className="footer">
      <Footer.Left>
        <Footer.Text>Powered by:</Footer.Text>
        <Footer.Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
      </Footer.Left>
      <Footer.Right>
        <Footer.Social iconClass="fab fa-github" href={process.env.REACT_APP_SOCIAL_GITHUB} />
        <Footer.Social iconClass="fab fa-twitter" href={process.env.REACT_APP_SOCIAL_TWITTER} />
        <Footer.Social iconClass="fas fa-briefcase" href={process.env.REACT_APP_SOCIAL_PORTFOLIO} />
      </Footer.Right>
    </Footer>
  )
}
