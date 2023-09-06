import {H1} from "../../styles/Theme.tsx";
import {mapDispatchToProps, mapStateToPropsType} from "./UsersContainer.tsx";
import {User} from "./User.tsx";
import styled from "styled-components";
import axios from "axios";
import {Button} from "../Button/Button.tsx";

export type UserPropsType = mapStateToPropsType & mapDispatchToProps
export const Users = (props: UserPropsType) => {
    const getUsers = () => {
        if(props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
                props.setUsers(response.data.items)
            })
        }
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
                              unfollowUser={props.unfollowUser}
                              followUser={props.followUser}/>
                    )
                })}
            </UsersItems>
            <Button name={'Get Users'} callback={getUsers}/>
        </>
    )
}

const UsersTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h1{
    margin-bottom: 0;
  }
  span{
    color: #929CAB;
    font-size: 18px;
    margin-left: 15px;
  }
`
const UsersItems = styled.div`
  &:not(:last-child){
    margin-bottom: 40px;
  }
`