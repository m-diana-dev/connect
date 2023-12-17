import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {SetFriends} from "../../redux/friends-reducer.ts";
import {followUsersTC, toggleIsLoading, unfollowUsersTC, UserType} from "../../redux/users-reducer.ts";
import {connectAPI} from "../../api/api.ts";
import React from "react";
import {MainPages} from "./MainPages.tsx";
import {initializedAppTC, SetInitialized} from "./../../redux/app-reducer.ts";
import {selectFriends} from "../../redux/selectors/friends-selectors.ts";
import {selectInitialized} from "../../redux/selectors/app-selectors.ts";
import {selectIsFollowing, totalUsersCount} from "../../redux/selectors/users-selectors.ts";
import {Preloader} from "../common/Preloader/Preloader.tsx";


type mapStateToPropsType = {
    friends: UserType[]
    isFollowing: number[]
    initialized: boolean
    totalUsers: number
}
type mapDispatchToPropsType = {
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
    initializedAppTC: () => void
    SetInitialized:(initialized: boolean)=>void
}
type MainPagesContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class MainPagesContainer extends React.Component<MainPagesContainerPropsType> {
    // componentDidMount() {
    //     this.props.toggleIsLoading(true)
    //     connectAPI.getUsers(100, 1)
    //         .then((response) => {
    //             const friends: UserType[] = response.items.filter((el: UserType) => el.followed)
    //             this.props.SetFriends(friends)
    //             this.props.toggleIsLoading(false)
    //         })
    //     this.props.initializedAppTC()
    // }
    componentDidMount() {
        this.props.initializedAppTC()
        this.props.toggleIsLoading(true);
        this.props.SetInitialized(false)

        const pageCount = 10;
        const requests = Array.from({ length: pageCount }, (_, index) =>
            connectAPI.getUsers(100, index + 1)
        );

        Promise.all(requests)
            .then((responses) => {
                const allFriends = responses
                    .flatMap((response) => response.items)
                    .filter((el: UserType) => el.followed);


                this.props.SetFriends(allFriends);
                this.props.toggleIsLoading(false);
                this.props.SetInitialized(true)
            })
            .catch((error) => {
                console.error("Error fetching friends:", error);
                this.props.toggleIsLoading(false);
            });
    }

    render() {
        {if (!this.props.initialized) return <Preloader/>}
        return (
            <MainPages {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: selectFriends(state),
        isFollowing: selectIsFollowing(state),
        initialized: selectInitialized(state),
        totalUsers: totalUsersCount(state)
    }
}
export default connect(mapStateToProps, {
    SetFriends,
    toggleIsLoading,
    unfollowUsersTC,
    followUsersTC,
    initializedAppTC,
    SetInitialized
})(MainPagesContainer)
