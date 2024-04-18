import {Post} from "./Post/Posts";
import styled from "styled-components";
import {H2, Textarea} from "../../../styles/Theme.tsx";
import {Button} from "../../common/Button/Button.tsx";
import {mapDispatchToPropsType, mapStateToPropsType} from "./MyPostsContainer.tsx";
import {FieldValues, useForm} from "react-hook-form";


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
    const onSubmitHandler = (formData: FieldValues) => {
        props.addPost(formData.newPostText);
        reset()
    }

    return (
        <>
            <Posts>
                <H2>Posts</H2>
                {props.profile?.userId === props.authId &&
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Textarea {...register('newPostText', {required: 'Enter post text'})}></Textarea>
                        <Button name={'Send'} disabled={!isValid}></Button>
                    </form>
                }
            </Posts>
            <div>
                {props.posts.map(el => <Post key={el.id} id={el.id} text={el.text} likes={el.likes}
                                             avatar={props.profile?.photos.small}/>)}
            </div>
        </>
    )
}

const Posts = styled.div`
  margin-bottom: 30px;
`

