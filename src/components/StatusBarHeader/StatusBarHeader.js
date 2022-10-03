import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import { cream } from "../../theme/colors";

const StatusBarHeader = () => {
    return (
        <View style={styles.root}>
            <StatusBar />
        </View>
    )
}

export default StatusBarHeader

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: Platform.OS === 'ios' && Dimensions.get('screen').height >= 843 ? 59 : 25,
        backgroundColor: cream,
    }
})