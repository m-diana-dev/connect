import styled from "styled-components";
import defaultAvatar from "../../images/users/avatar.webp";
import {NavLink} from "react-router-dom";

export type FriendPropsType = {
    id: number
    img: string
    name: string
}
export const Friend = ({id, img, name}: FriendPropsType) => {
    return (
        <FriendItem>
            <NavLink to={`/connect/profile/${id}`}>
                <img src={img ? img : defaultAvatar}/>
            </NavLink>
            <NavLink to={`/connect/profile/${id}`}>
                <span>{name}</span>
            </NavLink>
        </FriendItem>
    );
};


const FriendItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width: calc(33.333% - 10px);
  padding: 0 5px;
  @media ${({theme}) => theme.media.tablet} {
    width: calc(50% - 10px);
    font-size: 16px;
  }
  @media ${({theme}) => theme.media.mobile} {
    width: calc(33.333% - 10px);
  }
  >a{
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;  
    text-align: center;
  }

  img {
    display: block;
    width: 50px;
    margin-bottom: 10px;
    border-radius: 50%;
    transition: all .3s;
    &:hover{
      transform: scale(0.95);
    }
  }

  span {
    display: block;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    font-weight: 500;
    transition: all .3s;
    &:hover{
      color: ${({theme}) => theme.colors.second}
    }
  }
`