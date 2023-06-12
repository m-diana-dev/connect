import styled from "styled-components";

export type FriendPropsType = {
    id: number
    img: string
    name: string
}
export const Friend = ({img, name}: FriendPropsType) => {
    return (
        <FriendItem>
            <img src={img} alt="avatar"/>
            <span>{name}</span>
        </FriendItem>
    );
};


const FriendItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width: calc(33.333% - 10px);

  img {
    display: block;
    width: 50px;
    margin-bottom: 5px;
  }
  span{
    display: block;
    text-align: center;
  }
`