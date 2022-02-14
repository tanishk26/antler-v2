import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "./auth.css";

const Signin = () => {
    const emailRef = useRef();
    const psdRef = useRef();
    const { signInUser, forgotPassword } = useUserContext();
    const { signInWithGoogle, signInWithGithub } = useUserContext();
    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        if (email && password) signInUser(email, password);
    };

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (email)
            forgotPassword(email).then(() => {
                emailRef.current.value = "";
            });
    };

    return (
        // <div className="container">
        <div className="form">
            <h2> Login </h2>
            <form onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef} />
                <input placeholder="Password" type="password" ref={psdRef} />
                <button type="submit">Sign In</button>
                <button onClick={signInWithGoogle}> Continue with Google </button>
                <p onClick={forgotPasswordHandler}>Forgot Password?</p>
            </form>

        </div>
        // </div>
    );
};

export default Signin;
