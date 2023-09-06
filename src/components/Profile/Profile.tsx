import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import styled from "styled-components";
import banner from '../../images/banner.jpg'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";

export const Profile = () => {
    return (
        <>
            <Banner>
                <img src={banner}/>
            </Banner>
            <ProfileInfo/>
            <MyPostsContainer/>
        </>
    )
}

const Banner= styled.div `
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.mobile} {
    height: 150px;
    margin-bottom: 10px;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`