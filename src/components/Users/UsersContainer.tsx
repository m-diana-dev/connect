import {connect} from "react-redux";
import {Users} from "./Users.tsx";
import {AppStateType} from "../../redux/redux-store.ts";
import {
    followUser, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsLoading,
    unfollowUser,
    UserType
} from "../../redux/users-reducer.ts";
import React from "react";
import axios from "axios";
import {Preloader} from "../Preloader/Preloader.tsx";


export type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
export type mapDispatchToProps = {
    setUsers: (users: UserType[]) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsLoading: (isLoading: boolean) => void
}

export type UserContainerAPIPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersContainerAPI extends React.Component<UserContainerAPIPropsType> {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true})
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsLoading(false)
            })
    }

    onClickHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`, {withCredentials: true})
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsLoading(false)
            })
    }

    render() {
        return <>
            {this.props.isLoading
                ?
                <Preloader/>
                :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       onClickHandler={this.onClickHandler}/>
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isLoading: state.UsersPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch: (action: ActionType) => void): mapDispatchToProps => {
//     return {
//         setUsers: (users: UserType[]) => {
//             dispatch(SetUsersAC(users))
//         },
//         followUser: (id: number) => {
//             dispatch(FollowUserAC(id))
//         },
//         unfollowUser: (id: number) => {
//             dispatch(UnfollowUserAC(id))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(SetCurrenPageAC(page))
//         },
//         SetTotalUsersCount: (count: number) => {
//             dispatch((SetTotalUsersCountAC(count)))
//         },
//         ToggleIsLoading: (isLoading: boolean) => {
//             dispatch(ToggleIsLoadingAC(isLoading))
//         }
//     }
// }


export const UsersContainer = connect(mapStateToProps,
    {
        setUsers,
        followUser,
        unfollowUser,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsLoading
    })(UsersContainerAPI)