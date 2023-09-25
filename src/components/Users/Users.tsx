import {H1} from "../../styles/Theme.tsx";
import {mapDispatchToProps, mapStateToPropsType} from "./UsersContainer.tsx";
import {User} from "./User.tsx";
import styled from "styled-components";
import axios from "axios";
import React from "react";
import {Button} from "../Button/Button.tsx";

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
                <Pagination>
                    {pages.map(el => <Button active={this.props.currentPage === el}
                                             pagination={true}
                                             callback={() => this.onClickHandler(el)}
                                             name={el.toString()}></Button>)}
                </Pagination>
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