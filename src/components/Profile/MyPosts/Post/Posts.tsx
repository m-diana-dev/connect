import styled from "styled-components";
import avatar from '../../../../assets/images/users/main.png'
import {Icon} from "../../../common/Icon/Icon.tsx";

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
                    <Icon id={'like'} height={'22'} width={'18'} viewBox={'0 0 22 22'}/>
                    <span>{props.likes}</span>
                </PostLike>
            </PostContent>

        </PostItem>
    )
}

const PostItem = styled.div`
  display: flex;
  align-items: center;
  @media ${({theme}) => theme.media.mobileSmall} {
    flex-direction: column;
    align-items: flex-start;
  }

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
  @media ${({theme}) => theme.media.mobile} {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    width: 45px;
    height: 45px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

const PostText = styled.div`
  font-size: 18px;
  width: calc(100% - 60px);
  @media ${({theme}) => theme.media.mobile} {
    font-size: 16px;
    width: calc(100% - 50px);
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    width: 100%;
    margin-bottom: 10px;
  }
`
const PostContent = styled.div`
  width: calc(100% - 100px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media ${({theme}) => theme.media.mobile} {
    width: calc(100% - 65px);
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`
const PostLike = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  background-color: #F6EAFF;
  cursor: pointer;
  

  span {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 500;
    margin-right: 5px;
    @media ${({theme}) => theme.media.mobile} {
      font-size: 14px;
      margin-right: 3px;
    }
  }
`