import {connect} from "react-redux";
import {Users} from "./Users.tsx";
import {AppStateType} from "../../redux/redux-store.ts";
import {ActionType} from "../../redux/actions-types.ts";
import {
    FollowUserAC,
    SetCurrenPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnfollowUserAC,
    UserType
} from "../../redux/users-reducer.ts";
import React from "react";
import axios from "axios";


export type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type mapDispatchToProps = {
    setUsers: (users: UserType[]) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (page: number) => void
    SetTotalUsersCount: (count: number) => void
}

export type UserContainerAPIPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersContainerAPI extends React.Component<UserContainerAPIPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.SetTotalUsersCount(response.data.totalCount)
            })
    }

    onClickHandler = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               followUser={this.props.followUser}
               unfollowUser={this.props.unfollowUser}
               onClickHandler={this.onClickHandler}/>
    }
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void): mapDispatchToProps => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        },
        followUser: (id: number) => {
            dispatch(FollowUserAC(id))
        },
        unfollowUser: (id: number) => {
            dispatch(UnfollowUserAC(id))
        },
        setCurrentPage: (page: number) => {
            dispatch(SetCurrenPageAC(page))
        },
        SetTotalUsersCount: (count: number) => {
            dispatch((SetTotalUsersCountAC(count)))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)