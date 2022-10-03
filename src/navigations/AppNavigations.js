import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from "react-redux";
import { check } from "../redux/thunks/auth";
import { LoadingScreen } from "../screens/LoadingScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { PostsScreen } from "../screens/PostsScreen";

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
    const dispatch = useDispatch()
    const loadingUser = useSelector(store => store?.auth.loadingUser)
    const user = useSelector(store => store?.auth.user)

    useEffect(() => {
        dispatch(check())
    }, [])

    return (
        <NavigationContainer >
            <Stack.Navigator>
                {!!loadingUser && 
                     <Stack.Screen 
                        name="LoadingScreen"
                        component={LoadingScreen}
                        options={{headerShown: false}} />
                }
                {!(!!user) && 
                    <Stack.Screen 
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{headerShown: false}} />
                }
                {!!user && 
                    <Stack.Screen 
                        name="PostsScreen"
                        component={PostsScreen}
                        options={{headerShown: false}} />
                }
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigations