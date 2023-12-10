import React from "react";
import {Header} from "./Header.tsx";
import {connect} from "react-redux";
import {authMeTC, logoutUserTC} from "../../redux/auth-reducer.ts";
import {AppStateType} from "../../redux/redux-store.ts";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
    id: number
}

type mapDispatchToPropsType = {
    authMeTC: () => void
    logoutUserTC: () => void
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.authMeTC()
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
export default connect(mapStateToProps, {authMeTC, logoutUserTC})(HeaderContainer)

