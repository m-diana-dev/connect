import {AppStateType} from "../redux-store.ts";

export const selectDialogs = (state: AppStateType) => state.DialogsPage.dialogs
export const selectMessages = (state: AppStateType) => state.DialogsPage.messages