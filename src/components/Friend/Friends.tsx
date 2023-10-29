import {H1} from "../../styles/Theme.tsx";
import {UserType} from "../../redux/users-reducer.ts";
import {User} from "../Users/User.tsx";

type FriendsPropsType = {
    friends: UserType[]
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
    toggleIsFollowing: (isFollowing: boolean, userID: number) => void
    isFollowing: number[]
}
export const Friends = (props: FriendsPropsType) => {
    const followUser = (userID: number) => {
        props.followUser(userID)
    }
    const unfollowUser = (userID: number) => {
        props.unfollowUser(userID)
    }
    return (
        <>
            <H1>Friends</H1>
            <div>
                {props.friends.map(el => <User key={el.id}
                                               id={el.id}
                                               img={el.photos.small}
                                               name={el.name}
                                               followed={el.followed}
                                               status={el.status}
                                               unfollowUser={unfollowUser}
                                               followUser={followUser}
                                               isFollowing={props.isFollowing}
                                               toggleIsFollowing={props.toggleIsFollowing}/>)}
            </div>
        </>
    )
}