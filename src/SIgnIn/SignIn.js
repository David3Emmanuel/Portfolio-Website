import "./SignIn.css";
import PostInput from "../UI/PostInput";
import useSignIn from "./useSignIn";
import { useState } from "react";

export default function SignIn({ redirect }) {
    const [signIn, setSignIn] = useState(true);
    const { params, credentials, dispatch, handleSignIn, handleSignUp, errorMessage } = useSignIn(redirect, setSignIn);

    function switchSignIn() {
        setSignIn(prev => !prev);
        dispatch({});
    }

    return <form className="sign-in" onSubmit={signIn ? handleSignIn : handleSignUp}>
        <p className="sign-in-message">{params.message}</p>
        <h2>{signIn ? "SIGN IN" : "SIGN UP"}</h2>
        {!signIn && <PostInput name="USERNAME" label="Username:" value={credentials.username} dispatch={dispatch} />}
        <PostInput name="EMAIL" label="Email:" value={credentials.email} dispatch={dispatch} />
        <PostInput name="PASSWORD" label="Password:" password value={credentials.password} dispatch={dispatch} />
        <p className="error-message">{errorMessage}</p>
        <button className="post-button" onClick={signIn ? handleSignIn : handleSignUp}>{signIn ? "SIGN IN" : "SIGN UP"}</button>
        <button className="switch-sign-in" onClick={switchSignIn}>{signIn ? "New user? Sign up here" : "Existing user? Sign in here"}</button>
    </form>
}