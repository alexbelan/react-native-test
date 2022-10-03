import React from "react";
import { useDispatch } from 'react-redux'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";
import { LogOutIcon } from "../Icon";
import { logout } from "../../redux/thunks/auth";

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const logoutApp = () => {
        dispatch(logout())
    }

    return (
        <RectButton onPress={logoutApp}>
            <LogOutIcon />
        </RectButton>
    )
}

export default LogoutBtn
