import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType, updateNewPostText} from "./redux/state";
import {Section, Container, Theme, MainBlock, Flex} from "./styles/Theme.tsx";


type AppPropsType = {
    state: StateType
    addPost: ()=>void
    updateNewPostText: (postText: string)=>void
}
const App = (props: AppPropsType) => {
    // @ts-ignore
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
                                        <Route path="/profile" element={<Profile state={props.state.ProfilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                                        <Route path="/messages/*" element={<Dialogs dialogs={props.state.DialogsPage.dialogs}
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
