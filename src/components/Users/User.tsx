import {Button} from "../Button/Button.tsx";
import styled from "styled-components";
import defaultAvatar from "../../images/users/avatar.webp";

type UserItemPropType = {
    id: number
    img: string
    name: string
    followed: boolean
    status: string
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}
export const User = (props: UserItemPropType) => {
    return (
        <UserItem followed={props.followed}>
            <img src={props.img ? props.img : defaultAvatar}/>
            <UserItemWrapp>
                <div>
                    <UserItemName>{props.name}</UserItemName>
                    <UserItemStatus>{props.status}</UserItemStatus>
                </div>
            </UserItemWrapp>
            {props.followed
                ? <Button name={'Unfollow'} callback={() => props.followUser(props.id)}/>
                : <Button name={'Follow'} callback={() => props.unfollowUser(props.id)}/>}
        </UserItem>
    );
};

const UserItem = styled.div<{followed?:boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child){
    margin-bottom: 30px;
    position: relative;
    &::before{
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
  }
  
  button{
    background-color: ${(props) => !props.followed ? ({theme}) => theme.colors.main : '#D08EFF' 
  }
`
const UserItemWrapp = styled.div`
  display: flex;
  width: calc(100% - 330px);
`
const UserItemName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`
const UserItemStatus = styled.div`
  font-style: italic;
`