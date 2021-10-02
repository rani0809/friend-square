import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css"
import { auth, provider } from "./firebase"
import {actionTypes} from "./reducer";
import { useStateValue } from "./StateProvider"

function Login() {
    const[dispatch]= useStateValue();
    const signIn=()=>{
    auth
    .sighInWithPopup(provider)
    .then((result) => {
        dispatch({ 
            type: actionTypes.SET_USER,
            user: result.user,
        });
    })
    .catch((error) =>alert(error.message));
};
        return (
        <div className="login">
            <div className="login__logo">
            <img 
            src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg " alt=""
            />

            </div>
            <Button type="submit " onClick={signIn} >
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
