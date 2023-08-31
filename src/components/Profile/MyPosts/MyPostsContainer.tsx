import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer.ts";
import {MyPosts} from "./MyPosts.tsx";
import StoreContext from "../../../StoreContext.tsx";


// type MyPostsContainerPropsType = {
    // state: AppStateType
    // dispatch: Dispatch
// }
export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addPost = () => {
                        store.dispatch(AddPostActionCreator())
                    }
                    const updateNewPostText = (postText: string) => {
                        store.dispatch(UpdateNewPostTextActionCreator(postText))
                    }
                    return (
                        <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={state.ProfilePage.posts}
                                 newPostText={state.ProfilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

