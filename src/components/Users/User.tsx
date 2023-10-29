import {Button} from "../Button/Button.tsx";
import styled from "styled-components";
import defaultAvatar from "../../images/users/avatar.webp";
import {NavLink} from "react-router-dom";
import {connectAPI} from "../../api/api.ts";

type UserItemPropType = {
    id: number
    img: string
    name: string
    followed: boolean
    status: string
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    toggleIsFollowing: (isFollowing: boolean, userID: number) => void
    isFollowing: number[]
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
                ? <Button name={'Unfollow'} disabled={props.isFollowing.some(id=>id===props.id)} callback={() => {
                    props.toggleIsFollowing(true, props.id)
                    connectAPI.unfollowUser(props.id)
                        .then((response) => {
                            if (response.resultCode === 0) {
                                props.unfollowUser(props.id)
                            }
                            props.toggleIsFollowing(false, props.id)
                        })
                }
                }/>
                : <Button name={'Follow'} disabled={props.isFollowing.some(id=>id===props.id)} callback={() => {
                    props.toggleIsFollowing(true, props.id)
                    connectAPI.followUser(props.id)
                        .then((response) => {
                            if (response.resultCode === 0) {
                                props.followUser(props.id)
                            }
                            props.toggleIsFollowing(false, props.id)
                        })
                }
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