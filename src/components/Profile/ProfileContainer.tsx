import {useEffect} from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfileTC} from "../../redux/profile-reducer.ts";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect.tsx";

export type mapStateToPropsType = {
    profile: ProfileInfoType | null
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

    return <Profile {...props} />;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
    };
};
const authRedirectComponent = WithAuthRedirect(ProfileContainer)
export default connect(mapStateToProps, {SetUserProfileTC})(authRedirectComponent);
