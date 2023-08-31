import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer.ts";
import {MyPosts} from "./MyPosts.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store.ts";
import {ActionType} from "../../../redux/store.tsx";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: ()=>{
            dispatch(AddPostActionCreator())
        },
        updateNewPostText: (postText: string) => {
            dispatch(UpdateNewPostTextActionCreator(postText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)