import {Header} from './components/Header/Header';
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Section, Container, Theme, MainBlock, Flex} from "./styles/Theme.tsx";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer.tsx";


// type AppPropsType = {
    // state: AppStateType
    // dispatch: Dispatch
// }
const App = () => {
    return (
        <Theme>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Section>
                        <Container>
                            <Flex>
                                {/*<Navbar friends={props.state.FriendsPage.friends}/>*/}
                                <MainBlock>
                                    <Routes>
                                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                                        <Route path="/profile"
                                               element={<Profile/>}/>
                                        <Route path="/messages/*"
                                               element={<DialogsContainer/>}/>
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
