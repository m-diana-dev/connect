import {Navigate, Route, Routes} from "react-router-dom";
import {News} from "../News/News.tsx";
import {Music} from "../Music/Music.tsx";
import {Container, Flex, MainBlock, Section} from "../../styles/Theme.tsx";
import ProfileContainer from "../Profile/ProfileContainer.tsx";
import HeaderContainer from "../Header/HeaderContainer.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import {UserType} from "../../redux/users-reducer.ts";
import {Friends} from "../Friend/Friends.tsx";
import Login from "../Login/Login.tsx";
import DialogsContainer from "../Dialogs/DialogsContainer.tsx";
import {lazy} from "react";
import {Error404} from "../Error404/Error404.tsx";

const UsersContainer = lazy(() => import('../Users/UsersContainer.tsx'));


type MainPagesPropsType = {
    friends: UserType[]
    initialized: boolean
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    isFollowing: number[]
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
}

export function MainPages(props: MainPagesPropsType) {
    return (
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
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/404" element={<Error404 />} />
                                <Route path="*" element={<Navigate to="/404" />} />
                            </Routes>
                        </MainBlock>
                    </Flex>
                </Container>
            </Section>
        </div>
    );
}

