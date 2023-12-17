import {DialogsItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messages/Messages";
import styled from "styled-components";
import {H1, Textarea} from "../../styles/Theme.tsx";
import {Button} from "../common/Button/Button.tsx";
import {mapDispatchToPropsType, mapStateToPropsType} from "./DialogsContainer.tsx";
import {FieldValues, useForm} from "react-hook-form";

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
export const Dialogs = (props: DialogsPropsType) => {

    const {
        register,
        formState:{isValid},
        handleSubmit,
        reset
    } = useForm()

    const onSubmitHandler = (formData: FieldValues) => {
        props.sendMessage(formData.newMessageText)
        reset()
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
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Textarea {...register('newMessageText', {required: 'Enter your message',})}/>
                        <Button name={'Send'} disabled={!isValid}/>
                    </form>
                </MessageBlock>
            </DialogsWrapp>
        </div>
    )
}

const DialogsWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${({theme}) => theme.media.tablet} {
    flex-direction: column;
  }
`
const DialogsItems = styled.div`
  position: sticky;
  top: 30px;
  width: calc(30% - 10px);
  height: 100%;
  padding: 30px 20px;
  border: 1px solid #DEDCFF;
  border-radius: 10px;
  @media ${({theme}) => theme.media.tablet} {
    position: static;
    width: 100%;
    margin-bottom: 20px;
  }

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
  @media ${({theme}) => theme.media.tablet} {
    width: 100%;
  }
`