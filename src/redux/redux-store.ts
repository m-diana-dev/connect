import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import friendsReducer from "./friends-reducer.ts";

const RootReducer = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    FriendsPage: friendsReducer,
})
const store = createStore(RootReducer);

export default store
