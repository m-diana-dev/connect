import React from "react";
import {Profile} from "./Profile.tsx";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfile} from "../../redux/profile-reducer.ts";
import axios from "axios";
import {
    RouteComponentProps,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export type PathParamsType = {
    userID: string
}
export type mapStateToPropsType = {
    profile: ProfileInfoType | null
}
export type mapDispatchToProps = {
    SetUserProfile: (profile: ProfileInfoType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps
type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
function withRouter(Component: typeof ProfileContainer) {
    return function ComponentWithRouterProp(props: CommonProfileContainerPropsType) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
}

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        let userID;
        this.props.router.params.userID ? userID = this.props.router.params.userID : userID = 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile
    }
}

export default connect(mapStateToProps, {SetUserProfile})(withRouter(ProfileContainer)
)