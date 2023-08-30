import {Post} from "./Post/Posts";
import {ActionType, PostsType} from "../../../redux/store.tsx";
import styled from "styled-components";
import {H2, Textarea} from "../../../styles/Theme.tsx";
import {Button} from "../../Button/Button.tsx";
import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer.ts";


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (action: ActionType)=>void
    newPostText: string
    updateNewPostText: (action: ActionType)=>void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const AddPostHandler = () => {
        if(newPostElement.current){
            props.addPost(AddPostActionCreator());
        }
    }
    const onChangeHandler = () => {
        if(newPostElement.current) {
            const textareaText = newPostElement.current.value;
            props.updateNewPostText(UpdateNewPostTextActionCreator(textareaText));
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

