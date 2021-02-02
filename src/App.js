import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeContextProvider } from './context/theme.js'
import { FavouritesContextProvider } from './context/favourites.js'
import { PersonalRatingContextProvider } from './context/personal-rating.js'
import { GlobalStyle } from './styles'
import { Results, Details, Favourites } from './pages'
import { HeaderContainer, FooterContainer } from './containers'

import {} from './config'

export default function App() {
    return (
        <ThemeContextProvider>
            <PersonalRatingContextProvider>
                <FavouritesContextProvider>
                    <GlobalStyle />
                    <Router>
                        <HeaderContainer />
                        <Switch>
                            <Route path="/movie/:movieId">
                                <Details />
                            </Route>
                            <Route path="/search">
                                <Results />
                            </Route>
                            <Route path="/popular">
                                <Results />
                            </Route>
                            <Route path="/now_playing">
                                <Results />
                            </Route>
                            <Route path="/top_rated">
                                <Results />
                            </Route>
                            <Route path="/bookmarks">
                                <Favourites />
                            </Route>
                            <Route path="/">
                                <Redirect to="/popular" />
                            </Route>
                        </Switch>
                        <FooterContainer />
                    </Router>
                </FavouritesContextProvider>
            </PersonalRatingContextProvider>
        </ThemeContextProvider>
    )
}