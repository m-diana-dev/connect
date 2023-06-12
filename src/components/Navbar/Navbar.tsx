import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
    return (
        <Aside>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/messages">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
            </ul>
        </Aside>
    )
}


const Aside= styled.aside `
  position: sticky;
  top: 30px;
  width: calc(30% - 20px);
  height: 100%;
  padding: 30px 20px;
  font-size: 20px;
  border: 1px solid ${({theme})=>theme.colors.border};
  border-radius: 10px;

  ul
  li {
    font-size: 20px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    a.active {
      color: ${({theme})=>theme.colors.main};
    }
  }
`