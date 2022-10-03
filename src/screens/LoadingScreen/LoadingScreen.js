import React from "react";
import { View, StyleSheet } from "react-native";
import P from "../../ui/Text/P";


const LoadingScreen = () => {
    return (
        <View style={styles.root}>
            <P>Loading...</P>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    }
})