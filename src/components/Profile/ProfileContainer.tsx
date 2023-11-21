import React, {useEffect} from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {GetUserStatusTC, ProfileInfoType, SetUserProfileTC, UpdateUserStatusTC} from "../../redux/profile-reducer.ts";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect.tsx";
import {compose} from "redux";

export type mapStateToPropsType = {
    profile: ProfileInfoType | null
    status: string
}
export type mapDispatchToProps = {
    SetUserProfileTC: (userID: number) => void
    GetUserStatusTC: (userID: number) => void
    UpdateUserStatusTC: (status: string) => void
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
        props.SetUserProfileTC(Number(userID) || 29569)
        props.GetUserStatusTC(Number(userID) || 29569)
    }, [userID]);

    return <Profile {...props} />;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {SetUserProfileTC, GetUserStatusTC, UpdateUserStatusTC}),
    WithAuthRedirect
)(ProfileContainer)