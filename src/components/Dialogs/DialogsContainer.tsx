import {
    DialogsType,
    MessagesType,
    SendMessageActionCreator,
    UpdateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer.ts";
import {Dialogs} from "./Dialogs.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ActionType} from "../../redux/actions-types.ts";


export type mapStateToPropsType = {
    newMessageText: string
    dialogs: DialogsType[]
    messages: MessagesType[]
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    updateNewMessageText: (messageText: string) => void
    sendMessage: () => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newMessageText: state.DialogsPage.newMessageText,
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType)=>void): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (messageText: string) => {
            dispatch(UpdateNewMessageTextActionCreator(messageText))
        },
        sendMessage: () => {
            dispatch(SendMessageActionCreator())
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)