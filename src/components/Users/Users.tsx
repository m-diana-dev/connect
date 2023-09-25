import {H1} from "../../styles/Theme.tsx";
import {mapDispatchToProps, mapStateToPropsType} from "./UsersContainer.tsx";
import {User} from "./User.tsx";
import styled from "styled-components";
import axios from "axios";
import React from "react";

export type UserPropsType = mapStateToPropsType & mapDispatchToProps

export class Users extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.SetTotalUsersCount(response.data.totalCount)
            })
    }

    onClickHandler = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pageCount; i++) {
            if (pages.length < 10) {
                pages.push(i)
            }
        }
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
                <div>
                    {pages.map(el => <span onClick={() => this.onClickHandler(el)}>{el}</span>)}
                </div>
            </>
        )
    }
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
  }
`