import {Post} from "./Post/Posts";
import {PostsType} from "../../../redux/state";
import styled from "styled-components";
import {H2, Textarea} from "../../../styles/Theme.tsx";
import {Button} from "../../Button/Button.tsx";


type MyPostsPropsType = {
    posts: PostsType[]
}
export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <>
            <Posts>
                <H2>My Posts</H2>
                <Textarea></Textarea>
                <Button name={'Send'} callback={()=>{}}></Button>
            </Posts>
            <div>
                {props.posts.map(el=><Post key={el.id} id={el.id} text={el.text} likes={el.likes}/>)}
            </div>
        </>
    )
}

const Posts= styled.div `
    margin-bottom: 30px;
`

