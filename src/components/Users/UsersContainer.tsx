import {connect} from "react-redux";
import {Users} from "./Users.tsx";
import {AppStateType} from "../../redux/redux-store.ts";
import {
    followUsersTC,
    getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsLoading,
    unfollowUsersTC,
    UserType
} from "../../redux/users-reducer.ts";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader.tsx";
import {
    selectCurrentPage,
    selectIsFollowing, selectIsLoading,
    selectPageSize, selectUsers,
    totalUsersCount
} from "../../redux/selectors/users-selectors.ts";


export type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    isFollowing: number[]
}
export type mapDispatchToProps = {
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsLoading: (isLoading: boolean) => void
    getUsersTC: (pageSize: number, currentPage: number) => void
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
}

export type UserContainerAPIPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersContainerAPI extends React.Component<UserContainerAPIPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage)
    }

    onClickHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersTC(this.props.pageSize, page)
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
                       onClickHandler={this.onClickHandler}
                       isFollowing={this.props.isFollowing}
                       unfollowUsersTC={this.props.unfollowUsersTC}
                       followUsersTC={this.props.followUsersTC}/>
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: selectUsers(state),
        pageSize: selectPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: selectCurrentPage(state),
        isLoading: selectIsLoading(state),
        isFollowing: selectIsFollowing(state)
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

const UsersContainer = connect(mapStateToProps,
    {
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsLoading,
        getUsersTC,
        unfollowUsersTC,
        followUsersTC
    })(UsersContainerAPI)

export default UsersContainer