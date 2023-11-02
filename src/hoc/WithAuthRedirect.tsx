import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store.ts";
import {connect} from "react-redux";
import {ComponentType} from "react";


type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to='/login'/>
        return <Component {...restProps as T & {}}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
