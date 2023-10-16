import {useEffect} from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfile} from "../../redux/profile-reducer.ts";
import axios from "axios";
import {useParams} from "react-router-dom";


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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID || 2}`)
            .then((res) => {
                props.SetUserProfile(res.data)
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
