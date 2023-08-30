import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer.ts";
import {MyPosts} from "./MyPosts.tsx";
import {AppStateType} from "../../../redux/redux-store.ts";
import {Dispatch} from "redux";


type MyPostsContainerPropsType = {
    state: AppStateType
    dispatch: Dispatch
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const state = props.state;
    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    }
    const updateNewPostText = (postText: string) => {
        props.dispatch(UpdateNewPostTextActionCreator(postText))
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={state.ProfilePage.posts} newPostText={state.ProfilePage.newPostText}/>
    )
}

