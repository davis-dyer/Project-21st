import React from "react";
import { Route } from "react-router-dom";
//import Login from "../auth/Login";
//import Register from "../auth/Register";
import UserViews from "./UserViews";

const ApplicationView = (/* { isAuth } */) => {

    /* 
        const localAllmanosUser = localStorage.getItem('allmanos_user')
        const allmanosUserObject = JSON.parse(localAllmanosUser)
        
        //if (allmanosUserObject.user || isAuth){
            return <UserViews />
        } else {
            {/* <Route path="/register" element={<Register />} /> */
    <UserViews />
}

export default ApplicationView
