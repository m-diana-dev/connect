import {useEffect} from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfileTC} from "../../redux/profile-reducer.ts";
import {Navigate, useParams} from "react-router-dom";


export type mapStateToPropsType = {
    profile: ProfileInfoType | null
    isAuth: boolean
}
export type mapDispatchToProps = {
    SetUserProfileTC: (userID: number) => void
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
        props.SetUserProfileTC(Number(userID) || 2)
    }, [userID]);

    if(!props.isAuth) return <Navigate to='/login'/>
    return <Profile {...props} />;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {SetUserProfileTC})(ProfileContainer);
