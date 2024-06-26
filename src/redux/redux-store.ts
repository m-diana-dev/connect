import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer.ts";
import friendsReducer from "./friends-reducer.ts";
import {profileReducer} from "./profile-reducer.ts";
import {usersReducer} from "./users-reducer.ts";
import {authReducer} from "./auth-reducer.ts";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer} from "./app-reducer.ts";

const RootReducer = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    FriendsPage: friendsReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppStateType = ReturnType<typeof RootReducer>

export type AppThunk = ThunkAction<void, AppStateType, unknown, AnyAction>

export default store
