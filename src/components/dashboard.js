import React from "react";
import { useUserContext } from "../context/userContext";
import Dcoin from "./Dcoin";
const Dashboard = () => {
    const { user, logoutUser } = useUserContext();
    return (
        <div>
            <Dcoin />
            <button onClick={logoutUser}>Log out</button>
        </div>
    );
};

export default Dashboard;
