import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {News} from "../News/News.tsx";
import {Music} from "../Music/Music.tsx";
import {Container, Flex, MainBlock, Section, Theme} from "../../styles/Theme.tsx";
import {DialogsContainer} from "../Dialogs/DialogsContainer.tsx";
import {UsersContainer} from "../Users/UsersContainer.tsx";
import ProfileContainer from "../Profile/ProfileContainer.tsx";
import HeaderContainer from "../Header/HeaderContainer.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import {UserType} from "../../redux/users-reducer.ts";
import {Friends} from "../Friend/Friends.tsx";


type MainPagesPropsType = {
    friends: UserType[]
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}

export const MainPages = (props: MainPagesPropsType) => {
    return (
        <Theme>
            <BrowserRouter>
                <div>
                    <HeaderContainer/>
                    <Section>
                        <Container>
                            <Flex>
                                <Navbar/>
                                <MainBlock>
                                    <Routes>
                                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                                        <Route path="/profile/:userID"
                                               element={<ProfileContainer/>}/>
                                        <Route path='/profile' element={<ProfileContainer/>}/>

                                        <Route path="/messages/*"
                                               element={<DialogsContainer/>}/>
                                        <Route path="/users" element={<UsersContainer/>}/>
                                        <Route path="/friends" element={<Friends {...props}/>}/>
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

