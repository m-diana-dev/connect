import {useEffect} from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfile} from "../../redux/profile-reducer.ts";
import {useParams} from "react-router-dom";
import {connectAPI} from "../../api/api.ts";


export type mapStateToPropsType = {
    profile: ProfileInfoType | null
}
export type mapDispatchToProps = {
    SetUserProfile: (profile: ProfileInfoType) => void
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
            connectAPI.getProfile(userID || 2)
            .then((res) => {
                props.SetUserProfile(res)
            })
    }, [userID]);

    return <Profile {...props} />;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
    };
};

export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer);
