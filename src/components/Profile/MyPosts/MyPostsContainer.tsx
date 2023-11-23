import {AddPostActionCreator, PostsType} from "../../../redux/profile-reducer.ts";
import {MyPosts} from "./MyPosts.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store.ts";
import {ActionType} from "../../../redux/actions-types.ts";


export type mapStateToPropsType = {
    posts: PostsType[],
}

export type mapDispatchToPropsType = {
    addPost: (newPostText: string)=>void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: state.ProfilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string)=>{
            dispatch(AddPostActionCreator(newPostText))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)