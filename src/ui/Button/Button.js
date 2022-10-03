import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from 'react-native-gesture-handler'
import { cream } from "../../theme/colors";

const Button = ({children, color, onPress}) => {
    return (
        <RectButton 
            onPress={onPress}
            style={{...styles.root, backgroundColor: !!color ? color : cream}}>
            <Text style={styles.text}>{children}</Text>
        </RectButton>
    )
}

export default Button

const styles = StyleSheet.create({
    root: {
        width: 213,
        height: 43,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "800"
    }
})