import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Section, Container, Theme, MainBlock, Flex} from "./styles/Theme.tsx";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {AppStateType} from "./redux/redux-store.ts";
import {UsersContainer} from "./components/Users/UsersContainer.tsx";
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";


type AppPropsType = {
    state: AppStateType
}
const App = (props: AppPropsType) => {
    return (
        <Theme>
            <BrowserRouter>
                <div>
                    <HeaderContainer/>
                    <Section>
                        <Container>
                            <Flex>
                                <Navbar friends={props.state.FriendsPage.friends}/>
                                <MainBlock>
                                    <Routes>
                                        <Route path={'/connect/'} element={<Navigate to={'/connect/profile'}/>}/>
                                        <Route path="/connect/profile/:userID"
                                               element={<ProfileContainer/>}/>
                                        <Route path='/connect/profile' element={<ProfileContainer/>}/>

                                        <Route path="/connect/messages/*"
                                               element={<DialogsContainer/>}/>
                                        <Route path="/connect/users" element={<UsersContainer/>}/>
                                        <Route path="/connect/news" element={<News/>}/>
                                        <Route path="/connect/music" element={<Music/>}/>
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
