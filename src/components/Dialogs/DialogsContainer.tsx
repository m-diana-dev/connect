import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.ts";
import {Dialogs} from "./Dialogs.tsx";
import {AppStateType} from "../../redux/redux-store.ts";
import {Dispatch} from "redux";

type DialogsContainerPropsType = {
    state: AppStateType
    dispatch: Dispatch
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const updateNewMessageText = (messageText: string) => {
        props.dispatch(UpdateNewMessageTextActionCreator(messageText))
    }
    const sendMessage = () => {
        props.dispatch(SendMessageActionCreator())
    }
    return (
        <Dialogs updateNewMessageText={updateNewMessageText}
                 sendMessage={sendMessage}
                 newMessageText={props.state.DialogsPage.newMessageText}
                 dialogs={props.state.DialogsPage.dialogs}
                 messages={props.state.DialogsPage.messages}/>
    )
}
