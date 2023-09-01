import {H1} from "../../styles/Theme.tsx";
import {mapDispatchToProps, mapStateToPropsType} from "./UsersContainer.tsx";
import avatar1 from "../../images/users/avatar-1.png";
import avatar2 from "../../images/users/avatar-2.png";
import avatar3 from "../../images/users/avatar-3.jpg";
import avatar4 from "../../images/users/avatar-4.jpg";
import avatar5 from "../../images/users/main.png";
import {User} from "./User.tsx";
import styled from "styled-components";

export type UserPropsType = mapStateToPropsType & mapDispatchToProps
export const Users = (props: UserPropsType) => {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, img: avatar1, name: 'Anna Del', location: {country: 'Russia', city: 'Moscow'}, status: 'Hi!', follow: false},
            {id: 2, img: avatar2, name: 'Dima Petrov', location: {country: 'Russia', city: 'Sochi'}, status: 'Good', follow: true},
            {id: 3, img: avatar3, name: 'Lida', location: {country: 'Russia', city: 'Kirov'}, status: '^)', follow: true},
            {id: 4, img: avatar4, name: 'Ivan Ivanov', location: {country: 'Russia', city: 'Krasnodar'}, status: 'Hot!!!!', follow: false},
            {id: 5, img: avatar5, name: 'Mikkel', location: {country: 'Russia', city: 'Moscow'}, status: 'webdev', follow: false},
        ])
    }
    return (
        <>
            <UsersTop>
                <H1>Users</H1>
                <span>{props.users.length}</span>
            </UsersTop>
            <div>
                {props.users.map(el => {
                    return (
                        <User key={el.id}
                              id={el.id}
                              img={el.img}
                              name={el.name}
                              location={el.location}
                              follow={el.follow}
                              status={el.status}
                              unfollowUser={props.unfollowUser}
                              followUser={props.followUser}/>
                    )
                })}
            </div>
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