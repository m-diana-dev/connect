import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {H2} from "../../styles/Theme.tsx";
import {Friend} from "../Friend/Friend.tsx";
import {FriendsType} from "../../redux/friends-reducer.ts";


type NavbarPropsType = {
    friends: FriendsType[]
}
export const Navbar = ({friends}: NavbarPropsType) => {
    return (
        <Aside>
            <NavMenu>
                <ul>
                    <li><NavLink to="/connect/profile">Profile</NavLink></li>
                    <li><NavLink to="/connect/messages">Messages</NavLink></li>
                    <li><NavLink to="/connect/users">Users</NavLink></li>
                    <li><NavLink to="/connect/news">News</NavLink></li>
                    <li><NavLink to="/connect/music">Music</NavLink></li>
                </ul>
            </NavMenu>
            <FriendsBlock>
                <H2>Friends</H2>
                <FriendsItems>
                    {friends.map(el => <Friend key={el.id} id={el.id} img={el.img} name={el.name}/>)}
                </FriendsItems>
            </FriendsBlock>
        </Aside>
    )
}


const Aside = styled.aside`
  position: sticky;
  top: 30px;
  width: calc(30% - 20px);
  height: 100%;
  @media ${({theme}) => theme.media.tablet} {
    width: calc(30% - 10px);
  }
  @media ${({theme}) => theme.media.mobile} {
    width: 100%;
    position: static;
    height: auto;
    margin-bottom: 20px;
  }
`
const NavMenu = styled.nav`
  padding: 30px 20px;
  font-size: 20px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;
  @media ${({theme}) => theme.media.mobile} {
    padding: 20px 15px;
    font-size: 18px;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ul
  li {
    font-size: 20px;
    @media ${({theme}) => theme.media.mobile} {
      font-size: 18px;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
      @media ${({theme}) => theme.media.mobile} {
        margin-bottom: 7px;
      }
    }

    a.active {
      color: ${({theme}) => theme.colors.main};
    }
  }
`
const FriendsBlock = styled.div`
  padding: 30px 20px;
  font-size: 20px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const FriendsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`