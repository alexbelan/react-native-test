import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
    const posts = useSelector(state => state?.data.posts)
    const users = useSelector(state => state?.data.users)   

    const renderPost = ({item}) => {
        const user = users.find(user => user.id == item.userId)

        return (
            <Post 
                title={item.title}
                autor={user.name}
                company={user.company.name}
            />
        )
    }

    return (
        <View style={styles.root}>
            <FlatList 
                data={posts}
                renderItem={renderPost}
            />
        </View>
    )
}

export default Posts

const  styles = StyleSheet.create({
    root: {
        marginBottom: 370,
    }
})