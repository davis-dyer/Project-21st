import React from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const Authorized = ({children}) => {
    const location = useLocation()

    if (localStorage.getItem('allmanos_user') || localStorage.getItem('googleAuth')) {
        return children
    } else {
        /* return <Navigate
                to={`/login/${location.search}`}
                replace
                state={{location}}
            /> */
    }
}