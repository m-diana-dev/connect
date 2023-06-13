import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";
import styled from "styled-components";
import banner from '../../images/banner.jpg'


type ProfilePropsType = {
    posts: PostsType[]
    addPost: (postText: string)=>void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <Banner>
                <img src={banner}/>
            </Banner>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
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