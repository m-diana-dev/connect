import {Header} from './components/Header/Header';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Section, Container, Theme, MainBlock, Flex} from "./styles/Theme.tsx";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {AppStateType} from "./redux/redux-store.ts";
import {UsersContainer} from "./components/Users/UsersContainer.tsx";
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";


type AppPropsType = {
    state: AppStateType
}
const App = (props: AppPropsType) => {
    return (
        <Theme>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Section>
                        <Container>
                            <Flex>
                                <Navbar friends={props.state.FriendsPage.friends}/>
                                <MainBlock>
                                    <Routes>
                                        <Route path={'/'} element={<Navigate to={'/profile/:userID'}/>}/>
                                        <Route path="/profile/:userID"
                                               element={<ProfileContainer/>}/>
                                        <Route path='/profile' element={<ProfileContainer />} />
                                        <Route path="/messages/*"
                                               element={<DialogsContainer/>}/>
                                        <Route path="/users" element={<UsersContainer/>}/>
                                        <Route path="/news" element={<News/>}/>
                                        <Route path="/music" element={<Music/>}/>
                                    </Routes>
                                </MainBlock>
                            </Flex>
                        </Container>
                    </Section>
                </div>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
