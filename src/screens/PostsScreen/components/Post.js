import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../../ui/Card";
import P from "../../../ui/Text";

const Post = ({autor, company, title}) => {
    return (
        <Card style={styles.root}>
            <View style={styles.block}>
                <P bold>Autor: {autor}</P>
            </View>
            <View style={styles.block}>
                <P bold>Company: {company}</P>
            </View>
            <View style={styles.block}>
                <P bold>Title: {title}</P>
            </View>
        </Card>
    )
}

export default Post

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 12,
        paddingVertical: 15,
    },
    block: {
        marginBottom: 15,
    }
})