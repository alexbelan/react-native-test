import React from "react";
import { Image, StyleSheet } from "react-native";

const staticImage = require("../../assets/logo.png");

const LogoImage = () => {
    return (
       <Image source={staticImage} style={styles.root}/>
    )
}

export default LogoImage

const styles = StyleSheet.create({
    root: {
        width: 70,
        height: 63,
    }
})