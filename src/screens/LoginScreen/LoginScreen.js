import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { blueWater } from "../../theme/colors";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import { Button } from "../../ui/Button";
import ScreenContainer from "../../containers/ScreenContainer";
import { getUser } from "../../api/auth";
import { GET_USER } from "../../redux/actions/auth";
import { login } from "../../redux/thunks/auth";

const LoginScreen = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        login: "",
        password: "",
    })

    const handleForm = (nameData, text) => {
        setData(prev => ({...prev, [nameData]: text}))
    }

    const sendLogin = () => {
        // console.log("sendLogin")
        dispatch(login(data))
    }

    return (
        <ScreenContainer>
            <Card style={styles.card}>
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>Autorization</Text>
                    </View>
                <View style={styles.form}>
                    <Input 
                        style={styles.input}
                        lebal={"login"}
                        value={data.login}
                        onChange={(text) => handleForm("login", text)}
                    />
                    <Input
                        style={styles.input}
                        lebal={"password"}
                        value={data.password}
                        secureTextEntry={true}
                        onChange={(text) => handleForm("password", text)}
                    />
                    <View>
                        <Button onPress={sendLogin}>
                            {"Submit"}
                        </Button>
                    </View>
                </View>    
            </Card>
        </ScreenContainer>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    card: {
        paddingTop: 8,
        paddingRight: 43,
        paddingBottom: 32,
        paddingLeft: 35,
        
    },
    titleBlock: {
        width: "100%",
        alignItems: "center",
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        color: blueWater,
        alignItems: "center",
    },
    form: {
        alignItems: "center",
    },
    input: {
        // marginTop: 15,
        marginBottom: 22,
    }
})