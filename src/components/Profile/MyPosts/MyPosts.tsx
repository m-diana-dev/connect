import {Post} from "./Post/Posts";
import {PostsType} from "../../../redux/state";
import styled from "styled-components";
import {H2, Textarea} from "../../../styles/Theme.tsx";
import {Button} from "../../Button/Button.tsx";
import React, {ChangeEvent} from "react";


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: ()=>void
    newPostText: string
    updateNewPostText: (postText: string)=>void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const AddPostHandler = () => {
        if(newPostElement.current){
            props.addPost();
        }
    }
    const onChangeHandler = () => {
        if(newPostElement.current) {
            const textareaText = newPostElement.current.value;
            props.updateNewPostText(textareaText);
        }
    }
    return (
        <>
            <Posts>
                <H2>My Posts</H2>
                <Textarea ref={newPostElement} value={props.newPostText} onChange={onChangeHandler}></Textarea>
                <Button name={'Send'} callback={AddPostHandler}></Button>
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

