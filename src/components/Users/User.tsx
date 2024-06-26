import {Button} from "../common/Button/Button.tsx";
import styled from "styled-components";
import defaultAvatar from "../../assets/images/users/avatar.webp";
import {NavLink} from "react-router-dom";

type UserItemPropType = {
    id: number
    img: string
    name: string
    followed: boolean
    status: string
    isFollowing: number[]
    unfollowUsersTC: (userID: number) => void
    followUsersTC: (userID: number) => void
}
export const User = (props: UserItemPropType) => {
    return (
        <UserItem followed={props.followed}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.img ? props.img : defaultAvatar}/>
            </NavLink>
            <UserItemWrapp>
                <div>
                    <UserItemName>
                        <NavLink to={`/profile/${props.id}`}>{props.name}</NavLink>
                    </UserItemName>
                    <UserItemStatus>{props.status}</UserItemStatus>
                </div>
            </UserItemWrapp>
            {props.followed
                ? <Button name={'Unfollow'} disabled={props.isFollowing.some(id=>id===props.id)} callback={() => {props.unfollowUsersTC(props.id)}
                }/>
                : <Button name={'Follow'} disabled={props.isFollowing.some(id=>id===props.id)} callback={() => {props.followUsersTC(props.id)}
                }/>}
        </UserItem>
    );
};

const UserItem = styled.div<{ followed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({theme}) => theme.media.mobileSmall} {
    flex-direction: column;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${({theme}) => theme.colors.border};
      left: 0;
      bottom: -15px;
    }
  }

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    transition: all .3s;
    &:hover{
      transform: scale(1.05);
    }
    @media ${({theme}) => theme.media.tablet} {
      width: 70px;
      height: 70px;
    }
    @media ${({theme}) => theme.media.mobile} {
      width: 60px;
      height: 60px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      margin-bottom: 10px;
    }
  }

  button {
    background-color: ${(props) => !props.followed ? ({theme}) => theme.colors.main : ({theme}) => theme.colors.second};
    &:hover {
      background-color: ${(props) => !props.followed ? ({theme}) => theme.colors.second : ({theme}) => theme.colors.main};
    }
  }
`
const UserItemWrapp = styled.div`
  display: flex;
  width: calc(100% - 330px);
  @media ${({theme}) => theme.media.tablet} {
    width: calc(100% - 300px);
  }
  @media ${({theme}) => theme.media.mobile} {
    width: calc(100% - 240px);
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    flex-direction: column;
    width: 100%;
  }
`
const UserItemName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  transition: all .3s;
  &:hover{
    color: ${({theme}) => theme.colors.second}
  }
  @media ${({theme}) => theme.media.tablet} {
    font-size: 18px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 16px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 10px;
    text-align: center;
  }
`
const UserItemStatus = styled.div`
  font-style: italic;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 10px;
    text-align: center;
  }
`