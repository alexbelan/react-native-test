import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { blueWater } from "../../theme/colors";
import ScreenContainer from "../../containers/ScreenContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers } from "../../redux/thunks/data";
import Posts from "./components/Posts";

const PostsScreen = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state?.data.users)
    const posts = useSelector(state => state?.data.posts)
    const loadingData = useSelector(state => state?.data.loadingData)
    
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        if(users.length !== 0) {
            dispatch(getPosts())
        }
    }, [users])

    // useEffect(() => {
    //     console.log("users", users)
    //     console.log("posts", posts)
    //     console.log("loadingData", loadingData)
    // }, [posts, users, loadingData])

    // console.log()

    return (
        <ScreenContainer>
            <Posts />
        </ScreenContainer>
    )
}

export default PostsScreen