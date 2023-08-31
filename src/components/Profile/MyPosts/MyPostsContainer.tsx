import {AddPostActionCreator, PostsType, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer.ts";
import {MyPosts} from "./MyPosts.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store.ts";
import {ActionType} from "../../../redux/actions-types.ts";


export type mapStateToPropsType = {
    posts: PostsType[],
    newPostText: string
}

export type mapDispatchToPropsType = {
    addPost: ()=>void
    updateNewPostText: (postText: string) =>void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void): mapDispatchToPropsType => {
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