import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import styled from "styled-components";
import banner from '../../images/banner.jpg'


type ProfilePropsType = {
    state: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (postText: string)=>void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <Banner>
                <img src={banner}/>
            </Banner>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
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