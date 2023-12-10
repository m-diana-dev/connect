import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {SetFriends} from "../../redux/friends-reducer.ts";
import {followUsersTC, toggleIsLoading, unfollowUsersTC, UserType} from "../../redux/users-reducer.ts";
import {connectAPI} from "../../api/api.ts";
import React from "react";
import {MainPages} from "./MainPages.tsx";
import {initializedAppTC} from "./../../redux/app-reducer.ts";


type mapStateToPropsType = {
    friends: UserType[]
    isFollowing: number[]
    initialized: boolean
}
type mapDispatchToPropsType = {
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
    initializedAppTC: ()=>void
}
type MainPagesContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class MainPagesContainer extends React.Component<MainPagesContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        connectAPI.getUsers(100, 1)
            .then((response) => {
                const friends: UserType[] = response.items.filter((el: UserType) => el.followed)
                this.props.SetFriends(friends)
                this.props.toggleIsLoading(false)
            })
    }

    render() {
        return (
            <MainPages {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.FriendsPage.friends,
        isFollowing: state.UsersPage.isFollowing,
        initialized: state.app.initialized
    }
}
export default connect(mapStateToProps, {
    SetFriends,
    toggleIsLoading,
    unfollowUsersTC,
    followUsersTC,
    initializedAppTC
})(MainPagesContainer)
