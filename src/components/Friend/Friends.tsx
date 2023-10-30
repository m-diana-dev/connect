import {H1} from "../../styles/Theme.tsx";
import {UserType} from "../../redux/users-reducer.ts";
import {User} from "../Users/User.tsx";

type FriendsPropsType = {
    friends: UserType[]
    SetFriends: (friends: UserType[]) => void
    toggleIsLoading: (isLoading: boolean) => void
    isFollowing: number[]
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
}
export const Friends = (props: FriendsPropsType) => {
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
                                               isFollowing={props.isFollowing}
                                               unfollowUsersTC={props.unfollowUsersTC}
                                               followUsersTC={props.followUsersTC}/>)}
            </div>
        </>
    )
}