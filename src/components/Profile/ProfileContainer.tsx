import React from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfile} from "../../redux/profile-reducer.ts";
import axios from "axios";


export type mapStateToPropsType = {
    profile: ProfileInfoType | null
}
export type mapDispatchToProps = {
    SetUserProfile: (profile: ProfileInfoType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.SetUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.ProfilePage.profile
    }
}
export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer)