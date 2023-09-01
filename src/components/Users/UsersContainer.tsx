import {connect} from "react-redux";
import {Users} from "./Users.tsx";
import {AppStateType} from "../../redux/redux-store.ts";
import {ActionType} from "../../redux/actions-types.ts";
import {FollowUserAC, SetUsersAC, UnfollowUserAC, UserType} from "../../redux/users-reducer.ts";


export type mapStateToPropsType = {
    users: UserType[]
}
export type mapDispatchToProps = {
    setUsers: (users: UserType[])=>void
    followUser: (id: number)=>void
    unfollowUser: (id: number)=>void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        users: state.UsersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType)=>void): mapDispatchToProps => {
    return{
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        },
        followUser: (id: number) => {
            dispatch(FollowUserAC(id))
        },
        unfollowUser: (id: number) => {
            dispatch(UnfollowUserAC(id))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)