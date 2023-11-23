import {Post} from "./Post/Posts";
import styled from "styled-components";
import {H2, Textarea} from "../../../styles/Theme.tsx";
import {Button} from "../../Button/Button.tsx";
import {mapDispatchToPropsType, mapStateToPropsType} from "./MyPostsContainer.tsx";
import {useForm} from "react-hook-form";


type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType
export const MyPosts = (props: MyPostsPropsType) => {
    const {
        register,
        formState: {
            isValid
        },
        handleSubmit,
        reset
    } = useForm()
    const onSubmitHandler = (formData: any) => {
        props.addPost(formData.newPostText);
        reset()
    }

    return (
        <>
            <Posts>
                <H2>My Posts</H2>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Textarea {...register('newPostText', {required: 'Enter post text'})}></Textarea>
                    <Button name={'Send'} disabled={!isValid}></Button>
                </form>
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

