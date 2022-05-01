import React from 'react';
import { GoogleLogin } from "react-google-login";

interface CGoogleLoginProps {
    label?: string;
    onSuccess?(res: any): void;
    onFailure?(res: any): void;
    [propName: string]: any
};

interface CGoogleLoginState {};

export default class CGoogleLogin extends React.Component <CGoogleLoginProps, CGoogleLoginState> {
    constructor(props: CGoogleLoginProps){
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    };

    onSuccess(res: any) {
        console.log("[Login Success] currentUser:", res.profileObj);
    };

    onFailure(res: any) {
        console.log("[Login Failed] res", res);
    };

    render() {
        const {...rest} = this.props;

        return (
            <GoogleLogin
                clientId={"824204274900-2hh3a7nk2jvrmgb1gp77l2nmrpr6975d.apps.googleusercontent.com"}
                buttonText={this.props.label || "Login with Google"}
                onSuccess={this.props.onSuccess || this.onSuccess}
                onFailure={this.props.onFailure || this.onFailure}
                cookiePolicy={"single_host_origin"}
                {...rest}
            />
        );
    };
};