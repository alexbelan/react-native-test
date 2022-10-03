import React from "react";
import { Text } from "react-native";

const P = ({children, bold}) => {
    return (
        <Text style={{fontWeight: !!bold ? "700" : "400"}}>
            {children}
        </Text>
    )
}

export default P
