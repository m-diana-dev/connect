import {H1} from "../../styles/Theme.tsx";
import {mapDispatchToProps, mapStateToPropsType} from "./UsersContainer.tsx";
import {User} from "./User.tsx";
import styled from "styled-components";
import axios from "axios";
import React from "react";

export type UserPropsType = mapStateToPropsType & mapDispatchToProps

export class Users extends React.Component<UserPropsType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                <UsersTop>
                    <H1>Users</H1>
                    <span>{this.props.users.length}</span>
                </UsersTop>
                <UsersItems>
                    {this.props.users.map(el => {
                        return (
                            <User key={el.id}
                                  id={el.id}
                                  img={el.photos.small}
                                  name={el.name}
                                  followed={el.followed}
                                  status={el.status}
                                  unfollowUser={this.props.unfollowUser}
                                  followUser={this.props.followUser}/>
                        )
                    })}
                </UsersItems>
            </>
        )
    }
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