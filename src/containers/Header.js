import { Header, ThemeChanger } from '../components'

export default function HeaderContainer() {
  return (
    <Header>
      <Header.NavContainer>
        <Header.Home>Movies</Header.Home>
        <Header.Nav>
          <Header.Nav.Item to="/popular">Popular</Header.Nav.Item>
          <Header.Nav.Item to="/now_playing">Recent</Header.Nav.Item>
          <Header.Nav.Item to="/top_rated">Top Rated</Header.Nav.Item>
          <Header.Nav.Item to="/bookmarks">Bookmarks</Header.Nav.Item>
        </Header.Nav>
      </Header.NavContainer>
      <Header.Options>
        <Header.Search searchPath="/search" />
        <ThemeChanger />
      </Header.Options>
    </Header>
  )
}
