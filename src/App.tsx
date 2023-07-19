import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionType, StateType} from "./redux/state";
import {Section, Container, Theme, MainBlock, Flex} from "./styles/Theme.tsx";


type AppPropsType = {
    state: StateType
    addPost: (action: ActionType) => void
    updateNewPostText: (action: ActionType) => void
    sendMessage: (action: ActionType) => void
    updateNewMessageText: (action: ActionType) => void
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
                                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                                        <Route path="/profile"
                                               element={<Profile state={props.state.ProfilePage} addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}/>}/>
                                        <Route path="/messages/*"
                                               element={<Dialogs
                                                   updateNewMessageText={props.updateNewMessageText}
                                                   sendMessage={props.sendMessage}
                                                   newMessageText={props.state.DialogsPage.newMessageText}
                                                   dialogs={props.state.DialogsPage.dialogs}
                                                   messages={props.state.DialogsPage.messages}/>}/>
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
