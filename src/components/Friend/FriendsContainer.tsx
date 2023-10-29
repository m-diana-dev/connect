import React from "react";
import {Friends} from "./Friends.tsx";
import {connect} from "react-redux";
import {connectAPI} from "../../api/api.ts";
import {followUser, toggleIsFollowing, toggleIsLoading, unfollowUser, UserType} from "../../redux/users-reducer.ts";
import {SetFriends} from "../../redux/friends-reducer.ts";
import {AppStateType} from "../../redux/redux-store.ts";

type mapStateToPropsType = {
    friends: UserType[]
    isFollowing: number[]
}
type mapDispatchToPropsType = {
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
    toggleIsFollowing: (isFollowing: boolean, userID: number) => void
}
type FriendsContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class FriendsContainer extends React.Component<FriendsContainerPropsType>{
    componentDidMount() {
        this.props.toggleIsLoading(true)
        connectAPI.getUsers(100, 1)
            .then((response) => {
                const friends: UserType[] = response.items.filter((el: UserType)=>el.followed)
                this.props.SetFriends(friends)
                this.props.toggleIsLoading(false)
            })
    }
    render() {
        return <Friends {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>  {
    return {
        friends: state.FriendsPage.friends,
        isFollowing: state.UsersPage.isFollowing
    }
}
export default connect(mapStateToProps, {SetFriends, toggleIsLoading, unfollowUser, followUser, toggleIsFollowing})(FriendsContainer)