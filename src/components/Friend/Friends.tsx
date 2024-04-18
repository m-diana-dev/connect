import {H1} from "../../styles/Theme.tsx";
import {UserType} from "../../redux/users-reducer.ts";
import {User} from "../Users/User.tsx";
import styled from "styled-components";

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
            <FriendsTop>
                <H1>Friends</H1>
                <span>{props.friends.length}</span>
            </FriendsTop>
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

const FriendsTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 0;
  }

  span {
    color: #929CAB;
    font-size: 18px;
    margin-left: 15px;
  }
`