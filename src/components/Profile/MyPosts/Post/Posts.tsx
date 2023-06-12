import styled from "styled-components";
import avatar from '../../../../images/users/main.png'
import like from '../../../../images/icons/like.png'

type PostPropsType = {
    id: number
    text: string
    likes: number
}

export const Post = (props: PostPropsType) => {
    return (
        <PostItem>
            <PostItemAvatar>
                <img src={avatar} alt="avatar"/>
            </PostItemAvatar>
            <PostContent>
                <PostText>{props.text}</PostText>
                <PostLike>
                    <img src={like} alt="like"/>
                    <span>{props.likes}</span>
                </PostLike>
            </PostContent>

        </PostItem>
    )
}

const PostItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #DEDCFF;
    }
  }
`
const PostItemAvatar =styled.div `
    width: 60px;
    height: 60px;
    margin-right: 30px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

const PostText = styled.div`
  font-size: 20px;
  width: calc(100% - 60px);
`
const PostContent = styled.div`
  width: calc(100% - 100px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const PostLike = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  img {
    width: 20px;
  }

  span {
    font-size: 16px;
    margin-right: 5px;
  }
`