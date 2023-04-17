import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Post =  props  => {

  const {id, title, body} = props.data;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} ({id})</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 10,
        width: 350,
    }, 
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    body: {
        fontSize: 18,
    }, 
});

export default Post;