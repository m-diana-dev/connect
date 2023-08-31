import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.ts";
import {Dialogs} from "./Dialogs.tsx";
import StoreContext from "../../StoreContext.tsx";

// type DialogsContainerPropsType = {
//     state: AppStateType
//     dispatch: Dispatch
// }
export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const updateNewMessageText = (messageText: string) => {
                        store.dispatch(UpdateNewMessageTextActionCreator(messageText))
                    }
                    const sendMessage = () => {
                        store.dispatch(SendMessageActionCreator())
                    }
                    return (
                        <Dialogs updateNewMessageText={updateNewMessageText}
                                 sendMessage={sendMessage}
                                 newMessageText={store.getState().DialogsPage.newMessageText}
                                 dialogs={store.getState().DialogsPage.dialogs}
                                 messages={store.getState().DialogsPage.messages}/>
                    )
                }
            }
            </StoreContext.Consumer>
    )
}
