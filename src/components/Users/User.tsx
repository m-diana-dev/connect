import {Button} from "../Button/Button.tsx";
import styled from "styled-components";

type UserItemPropType = {
    id: number
    img: string
    name: string
    location: {
        country: string
        city: string
    }
    follow: boolean
    status: string
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}
export const User = (props: UserItemPropType) => {
    return (
        <UserItem follow={props.follow}>
            <img src={props.img}/>
            <UserItemWrapp>
                <div>
                    <UserItemName>{props.name}</UserItemName>
                    {/*<UserItemLocation>{props.location.country}, {props.location.city}</UserItemLocation>*/}
                    <UserItemStatus>{props.status}</UserItemStatus>
                </div>
            </UserItemWrapp>
            {props.follow
                ? <Button name={'Follow'} callback={() => props.unfollowUser(props.id)}/>
                : <Button name={'Unfollow'} callback={() => props.followUser(props.id)}/>}
        </UserItem>
    );
};

const UserItem = styled.div<{follow?:boolean}>`
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
    background-color: ${(props) => props.follow ? ({theme}) => theme.colors.main : '#D08EFF' 
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
const UserItemLocation = styled.div`
  margin-bottom: 5px;
`
const UserItemStatus = styled.div`
  font-style: italic;
`