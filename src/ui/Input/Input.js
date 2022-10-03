import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { blueWater, grey } from "../../theme/colors";

const Input = ({
    lebal,
    secureTextEntry=false,
    value,
    onChange,
    style={}
}) => {
    return (
        <View style={{...style, ...styles.root}}>
            <View style={styles.labelBlock}>
                <Text style={styles.labelText}>{lebal}</Text>
            </View>
            <TextInput 
                style={styles.input}
                value={value}
                secureTextEntry={secureTextEntry} 
                onChangeText={onChange}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    root: {
        width: "100%",
    },
    labelBlock: {
        marginBottom: 15,
    },
    labelText: {
        fontSize: 24,
        fontWeight: "800",
    },
    input: {
        fontSize: 21,
        lineHeight: 25,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: blueWater,
        backgroundColor: grey,
    }
})