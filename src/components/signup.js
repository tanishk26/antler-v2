import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "./auth.css";

const Signup = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const psdRef = useRef();
    const { registerUser } = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = psdRef.current.value;
        if (email && password && name) registerUser(email, password, name);
    };

    return (
        // <div className="container">
        <div className="form">
            <h2> Sign Up</h2>
            <form onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef} />
                <input placeholder="Name" type="name" ref={nameRef} />
                <input placeholder="Password" type="password" ref={psdRef} />
                <button type="submit">Register</button>
            </form>
        </div>
        // </div>
    );
};

export default Signup;
