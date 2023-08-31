import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.ts";
import {Dialogs} from "./Dialogs.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ActionType} from "../../redux/store.tsx";


const mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.DialogsPage.newMessageText,
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType)=>void) => {
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