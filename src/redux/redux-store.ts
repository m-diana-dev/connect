import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import friendsReducer from "./friends-reducer.ts";
import {usersReducer} from "./users-reducer.ts";
import {authReducer} from "./auth-reducer.ts";

const RootReducer = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    FriendsPage: friendsReducer,
    UsersPage: usersReducer,
    auth: authReducer,
})
const store = createStore(RootReducer);

export type AppStateType = ReturnType<typeof RootReducer>


//@ts-ignore
window.store = store
export default store
