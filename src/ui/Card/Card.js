import React from "react";
import { StyleSheet, View } from "react-native";
import { blueWater, white } from "../../theme/colors";

const Card = ({children, style={}}) => {
    return (
        <View style={{...styles.root, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        borderRadius: 6,
        borderWidth: 5,
        borderColor: blueWater,
        margin: 15,
        backgroundColor: white,
        // elevation: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            height: 4,
            width: 0
        }
    }
})

export default Card