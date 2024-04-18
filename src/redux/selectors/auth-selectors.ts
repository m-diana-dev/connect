import {AppStateType} from "../redux-store.ts";
export const selectIsAuth = (state: AppStateType) => state.auth.isAuth
export const selectLogin = (state: AppStateType) => state.auth.login
export const selectId = (state: AppStateType) => state.auth.id
export const selectError = (state: AppStateType) => state.auth.error
export const selectCaptcha = (state: AppStateType) => state.auth.captcha