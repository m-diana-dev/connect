import {DialogsItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messages/Messages";
import {DialogsType, MessagesType} from "../../redux/state";
import styled from "styled-components";
import {H1, Textarea} from "../../styles/Theme.tsx";
import {Button} from "../Button/Button.tsx";
import React from "react";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export const Dialogs = (props: DialogsPropsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendMessageHandler = () => {
        if (newMessageElement.current) {
            const textMessage = newMessageElement.current.value;
            alert(textMessage)
        }
    }
    return (
        <div>
            <DialogsWrapp>
                <DialogsItems>
                    <H1>Dialogs</H1>
                    <ul>
                        {props.dialogs.map(el => <DialogsItem key={el.id} id={el.id} img={el.img} name={el.name}/>)}
                    </ul>
                </DialogsItems>
                <MessageBlock>
                    <MessageItems>
                        {props.messages.map(el => <MessageItem key={el.id} my={el.my} text={el.text}/>)}
                    </MessageItems>
                    <Textarea ref={newMessageElement}/>
                    <Button name={'Send'} callback={sendMessageHandler}/>
                </MessageBlock>
            </DialogsWrapp>
        </div>
    )
}

const DialogsWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const DialogsItems = styled.div`
  position: sticky;
  top: 30px;
  width: calc(30% - 10px);
  height: 100%;
  padding: 30px 20px;
  border: 1px solid #DEDCFF;
  border-radius: 10px;

  a.active {
    color: #A72DFF;
  }

  ul {
    li {
      font-size: 18px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`
const MessageItems = styled.div`
  margin-bottom: 30px;
  max-height: 400px;
  height: 100%;
  overflow: auto;
`
const MessageBlock = styled.div`
  width: calc(70% - 10px);
  height: 100%;
`