import {H1} from "../../styles/Theme.tsx";
import {User} from "./User.tsx";
import styled from "styled-components";
import {Button} from "../Button/Button.tsx";
import {UserType} from "../../redux/users-reducer.ts";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    onClickHandler: (page: number) => void
    toggleIsFollowing: (isFollowing: boolean, userID: number) => void
    isFollowing: number[]
}

export const Users = (props: UsersPropsType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }
    const followUser = (userID: number) => {
        props.followUser(userID)
    }
    const unfollowUser = (userID: number) => {
        props.unfollowUser(userID)
    }
    return (
        <>
            <UsersTop>
                <H1>Users</H1>
                <span>{props.users.length}</span>
            </UsersTop>
            <UsersItems>
                {props.users.map(el => {
                    return (
                        <User key={el.id}
                              id={el.id}
                              img={el.photos.small}
                              name={el.name}
                              followed={el.followed}
                              status={el.status}
                              unfollowUser={unfollowUser}
                              followUser={followUser}
                              toggleIsFollowing={props.toggleIsFollowing}
                              isFollowing={props.isFollowing}/>
                    )
                })}
            </UsersItems>
            <Pagination>
                {pages.map(el => <Button active={props.currentPage === el}
                                         pagination={true}
                                         callback={() => props.onClickHandler(el)}
                                         name={el.toString()}></Button>)}
            </Pagination>
        </>
    )
}

const UsersTop = styled.div`
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
const UsersItems = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
    @media ${({theme}) => theme.media.mobileSmall} {
      margin-bottom: 60px;
    }
  }
`
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media ${({theme}) => theme.media.mobileSmall} {
    flex-wrap: wrap;
  }
`