import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native with TypeScript!</Text>
      <Image 
      style={{width: 200, height: 200}}
      source={{uri: "https://tse1.mm.bing.net/th?id=OIF.if6yS7nj%2fx%2bZlLCs3FBEqA&pid=Api&P=0&h=180"}}></Image>
      <Button title="press me"></Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;