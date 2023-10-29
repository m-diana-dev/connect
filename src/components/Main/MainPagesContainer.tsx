import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {SetFriends} from "../../redux/friends-reducer.ts";
import {followUser, toggleIsFollowing, toggleIsLoading, unfollowUser, UserType} from "../../redux/users-reducer.ts";
import {connectAPI} from "../../api/api.ts";
import React from "react";
import {MainPages} from "./MainPages.tsx";


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
type MainPagesContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class MainPagesContainer extends React.Component<MainPagesContainerPropsType>{
    componentDidMount() {
        this.props.toggleIsLoading(true)
        connectAPI.getUsers(100, 1)
            .then((response) => {
                const friends: UserType[] = response.items.filter((el: UserType)=>el.followed)
                this.props.SetFriends(friends)
                this.props.toggleIsLoading(false)
            })
    }
    render(){
        return (
            <MainPages {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>  {
    return {
        friends: state.FriendsPage.friends,
        isFollowing: state.UsersPage.isFollowing
    }
}
export default connect(mapStateToProps, {SetFriends, toggleIsLoading, unfollowUser, followUser, toggleIsFollowing})(MainPagesContainer)
