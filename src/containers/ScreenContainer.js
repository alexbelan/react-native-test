import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import StatusBarHeader from "../components/StatusBarHeader";

const ScreenContainer = ({children}) => {
    return (
        <View>
            <StatusBarHeader />
            <Header />
            {children}
        </View>
    )
}

export default ScreenContainer