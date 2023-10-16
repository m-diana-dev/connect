import React from "react";
import {Header} from "./Header.tsx";
import {connect} from "react-redux";
import {SetUser} from "../../redux/auth-reducer.ts";
import {AppStateType} from "../../redux/redux-store.ts";
import {ProfileInfoType, SetUserProfile} from "../../redux/profile-reducer.ts";
import {connectAPI} from "../../api/api.ts";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
    id: number
}

type mapDispatchToPropsType = {
    SetUser: (id: number, login: string, email: string) => void
    SetUserProfile: (profile: ProfileInfoType) => void
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        connectAPI.authMe()
            .then(res => {
                if (res.resultCode === 0) {
                    const {id, login, email} = res.data
                    this.props.SetUser(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})
export default connect(mapStateToProps, {SetUser, SetUserProfile})(HeaderContainer)

