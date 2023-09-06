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
  @media ${({theme}) => theme.media.mobile} {
    padding: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`
export const Avatar = styled.div`
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  margin-right: 50px;
  @media ${({theme}) => theme.media.tablet} {
    max-width: 125px;
    max-height: 125px;
    margin-right: 30px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    max-width: 100px;
    max-height: 100px;
    margin-right: 15px;
  }
  @media (max-width: 375px) {
    margin-right: 0;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
const UserInfo = styled.div`
  @media (max-width: 375px) {
    text-align: center;
  }
`

