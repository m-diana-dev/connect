import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {H2} from "../../styles/Theme.tsx";
import {Friend} from "../Friend/Friend.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {UserType} from "../../redux/users-reducer.ts";
import {selectFriends} from "../../redux/selectors/friends-selectors.ts";


type mapStateToPropsType = {
    friends: UserType[]
}

type NavbarPropsType = mapStateToPropsType
const Navbar = (props: NavbarPropsType) => {
    const firstSixFriends = (friends: UserType[]) => {
        const newArr: UserType[] = [];
        for (let i = 0; i < 6 && i < friends.length; i++) {
            newArr.push(friends[i])
        }
        return newArr
    }

    return (
        <Aside>
            <NavMenu>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                </ul>
            </NavMenu>
            <FriendsBlock>
                <FriendsBlockTop>
                    <H2>Friends</H2>
                    <NavLink to="/friends">
                        All
                    </NavLink>
                </FriendsBlockTop>
                <FriendsItems>
                    {firstSixFriends(props.friends).map(el => <Friend key={el.id} id={el.id} img={el.photos.small}
                                                                      name={el.name}/>)}
                </FriendsItems>
            </FriendsBlock>
        </Aside>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: selectFriends(state)
    }
}
export default connect(mapStateToProps, {})(Navbar)

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

    a {
      transition: all .3s;

      &:hover {
        color: ${({theme}) => theme.colors.second};
      }

      &.active {
        color: ${({theme}) => theme.colors.main};
      }
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

const FriendsBlockTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2{
    margin-bottom: 0;
  }
  > a {
    font-size: 18px;
    font-weight: 500;
    transition: all .3s;

    &:hover {
      color: ${({theme}) => theme.colors.main};
    }
    @media ${({theme}) => theme.media.tablet} {
      font-size: 16px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      font-size: 14px;
    }
  }
`

const FriendsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`