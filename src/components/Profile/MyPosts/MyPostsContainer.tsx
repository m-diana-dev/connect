import {AddPostActionCreator, PostsType, ProfileInfoType} from "../../../redux/profile-reducer.ts";
import {MyPosts} from "./MyPosts.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store.ts";
import {ActionType} from "../../../redux/actions-types.ts";
import {selectProfile, selectProfilePosts} from "../../../redux/selectors/profile-selectors.ts";


export type mapStateToPropsType = {
    posts: PostsType[],
    profile: ProfileInfoType | null
    authId: number
}

export type mapDispatchToPropsType = {
    addPost: (newPostText: string)=>void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: selectProfilePosts(state),
        profile: selectProfile(state),
        authId: state.auth.id

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