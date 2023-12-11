import {AppStateType} from "../redux-store.ts";
export const selectIsFollowing = (state: AppStateType) => state.UsersPage.isFollowing
export const selectPageSize = (state: AppStateType) => state.UsersPage.pageSize
export const totalUsersCount = (state: AppStateType) => state.UsersPage.totalUsersCount
export const selectCurrentPage = (state: AppStateType) => state.UsersPage.currentPage
export const selectIsLoading = (state: AppStateType) => state.UsersPage.isLoading
export const selectUsers = (state: AppStateType) => state.UsersPage.users