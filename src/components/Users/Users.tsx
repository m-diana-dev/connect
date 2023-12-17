import {H1} from "../../styles/Theme.tsx";
import {User} from "./User.tsx";
import styled from "styled-components";
import {UserType} from "../../redux/users-reducer.ts";
import {Pagination} from "../common/Pagination/Pagination.tsx";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onClickHandler: (page: number) => void
    isFollowing: number[]
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
}

export const Users = (props: UsersPropsType) => {

    const onClickHandler = (page: number) => {
        props.onClickHandler(page)
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
                              isFollowing={props.isFollowing}
                              unfollowUsersTC={props.unfollowUsersTC}
                              followUsersTC={props.followUsersTC}/>
                    )
                })}
            </UsersItems>
            <Pagination onClickHandler={onClickHandler}
                        totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}/>
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