import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from 'react-redux'
import { cream } from "../../theme/colors";
import { LogoutBtn } from "../../ui/Button";

const Header = () => {
    const user = useSelector(store => store?.auth.user)

    return (
        <View style={styles.root}>
            <View>
                {/* <Text>Logo</Text> */}
                <Image source={require("../../assets/logo.png")} style={{width: 70, height: 63}} />
            </View>
            <View>
                {!!user &&
                    <LogoutBtn />
                }
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: 118,
        backgroundColor: cream,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    }
})