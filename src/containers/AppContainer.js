import React from "react";
import { useSelector } from "react-redux";

const AppContainer = () => {
    const loadingUser = useSelector(store => store?.auth.loadingUser)

    if(!!loadingUser) {
        
    }
}