import styled from "styled-components";
import {H1} from "../../../styles/Theme.tsx";
import avatar from '../../../images/users/main.png'

export const ProfileInfo = () => {
    return (
        <MainBlockTop>
            <Avatar>
                <img
                    src={avatar} alt="avatar"/>
            </Avatar>
            <UserInfo>
                <H1>Ivan, 21</H1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </UserInfo>
        </MainBlockTop>
    )
}


const MainBlockTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-top: -50px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  z-index: 2;
`
export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
const UserInfo = styled.div`

`

