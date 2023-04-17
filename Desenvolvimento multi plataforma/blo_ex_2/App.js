import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Post from './components/post';
import { useEffect, useState } from 'react';
import getPostsAsync from './serveces';

export default function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsAsync(data => { setPosts(data); })

  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

       {posts.map((post) => <Post data={post} />)}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
