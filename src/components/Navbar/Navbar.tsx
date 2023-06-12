import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {H2} from "../../styles/Theme.tsx";
import {Friend} from "../Friend/Friend.tsx";
import {FriendsType} from "../../redux/state.tsx";


type NavbarPropsType = {
    friends: FriendsType[]
}
export const Navbar = ({friends}: NavbarPropsType) => {
    return (
        <Aside>
            <NavMenu>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
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
`
const NavMenu = styled.nav`
  padding: 30px 20px;
  font-size: 20px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ul
  li {
    font-size: 20px;

    &:not(:last-child) {
      margin-bottom: 10px;
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