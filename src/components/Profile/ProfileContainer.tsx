import React, {useEffect} from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {
    GetUserStatusTC,
    ProfileInfoType,
    savePhotoTC,
    SetUserProfileTC, updateProfileTC,
    UpdateUserStatusTC
} from "../../redux/profile-reducer.ts";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect.tsx";
import {compose} from "redux";
import {selectId, selectIsAuth} from "../../redux/selectors/auth-selectors.ts";
import {selectProfile, selectProfileStatus} from "../../redux/selectors/profile-selectors.ts";

export type mapStateToPropsType = {
    profile: ProfileInfoType | null
    status: string
    authorizedUserId: number
    isAuth: boolean
}
export type mapDispatchToProps = {
    SetUserProfileTC: (userID: number) => void
    GetUserStatusTC: (userID: number) => void
    UpdateUserStatusTC: (status: string) => void
    savePhotoTC: (photo: File) => void
    updateProfileTC: (formData: any) => void
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps

export type PathParamsType = {
    userID: string
}

/*
    Changed the Class component to a Functional to use the UseParams hook.
    For now with side effect, change it later
 */
function ProfileContainer(props: ProfileContainerPropsType) {
    const {userID} = useParams<PathParamsType>()
    useEffect(() => {
        props.SetUserProfileTC(Number(userID) || props.authorizedUserId)
        props.GetUserStatusTC(Number(userID) || props.authorizedUserId)
    }, [userID]);

    return <Profile {...props} isOwner={!userID}/>;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: selectProfile(state),
        status: selectProfileStatus(state),
        authorizedUserId: selectId(state),
        isAuth: selectIsAuth(state),
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {SetUserProfileTC, GetUserStatusTC, UpdateUserStatusTC, savePhotoTC, updateProfileTC}),
    WithAuthRedirect
)(ProfileContainer)