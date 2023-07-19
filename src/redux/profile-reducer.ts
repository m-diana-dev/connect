import {ActionType, ProfilePageType, UpdateNewPostTextActionType} from "./state.tsx";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({id: 5, likes: 0, text: state.newPostText})
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText;
            return state
        default: return state
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST} as const)
export const UpdateNewPostTextActionCreator = (postText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    postText
})

export default profileReducer