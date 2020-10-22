import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC, setAuthUserDataTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";


type mapStateToPropsType={
    isAuth: boolean
    login: string
}

type MapDispatchPropsType = {
    logoutTC:()=>void
}

type PropsType = MapDispatchPropsType & mapStateToPropsType

export class AuthDataContainer extends React.Component<PropsType> {


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect
(mapStateToProps, {logoutTC})(AuthDataContainer)