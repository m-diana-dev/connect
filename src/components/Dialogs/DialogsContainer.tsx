import {
    DialogsType,
    MessagesType,
    SendMessageActionCreator
} from "../../redux/dialogs-reducer.ts";
import {Dialogs} from "./Dialogs.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ActionType} from "../../redux/actions-types.ts";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect.tsx";
import {compose} from "redux";
import React from "react";


export type mapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType)=>void): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(SendMessageActionCreator(newMessageText))
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)