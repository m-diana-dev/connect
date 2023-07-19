import {NavLink} from "react-router-dom";
import styled from "styled-components";

export type DialogsItemPropsType = {
    id: number
    img: string
    name: string
}
export const DialogsItem = ({id, img, name}: DialogsItemPropsType) => {
    return (
        <li>
            <NavLink to={"/messages/" + id}>
                <DialogsItemRow>
                    <DialogsItemAvatar>
                        <img src={img} alt="avatar"/>
                    </DialogsItemAvatar>
                    {name}
                </DialogsItemRow>
            </NavLink>
        </li>
    )
}

const DialogsItemAvatar =styled.div `
  max-width: 50px;
  min-width: 50px;
  height: 50px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
const DialogsItemRow =styled.div `
  display: flex;
  align-items: center;
`

