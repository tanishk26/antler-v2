import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Signin from "./signin";
import Signup from "./signup";
import "./auth.css";

const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
    };

    const { signInWithGoogle, signInWithGithub } = useUserContext();

    return (
        <div className="container2">

            {!index ? <Signin /> : <Signup />}
            <p onClick={toggleIndex}>
                {!index ? "New user? Click here " : "Already have an acount?"}
            </p>
            {/* <button onClick={signInWithGoogle}> Continue with Google </button> */}


        </div>
    );
};

export default Auth;
