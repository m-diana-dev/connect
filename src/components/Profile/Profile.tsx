import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import styled from "styled-components";
import banner from '../../images/banner.jpg'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";


// type ProfilePropsType = {
    // state: AppStateType
    // dispatch: Dispatch
// }
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
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`