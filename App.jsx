import React from "react";
import {Pressable,TouchableOpacity, TouchableHighlight, Image, StyleSheet, Text, View, Button, Alert } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native with javascript
        !</Text>
      <Image 
      style={{width: 200, height: 200, margin: 20}}
      source={{uri: "https://tse1.mm.bing.net/th?id=OIF.if6yS7nj%2fx%2bZlLCs3FBEqA&pid=Api&P=0&h=180"}}></Image>
      <Button title="press me"></Button>
      <TouchableOpacity style={{padding: 10, backgroundColor: 'lightblue', borderRadius: 5}} onPress={()=> Alert.alert("pressed")}>
        <Text>button</Text>
      </TouchableOpacity>

      <TouchableHighlight style={{marginTop: 20, padding: 10, backgroundColor: 'pink', borderRadius: 5}} onPress={()=> Alert.alert("hello pressed")} underlayColor="blue">
        <Text>hello</Text>
      </TouchableHighlight>

      <Pressable>
        <Text style={{marginTop: 20, padding: 10, backgroundColor: 'lightgreen', borderRadius: 5}} >Pressable Button</Text>
      </Pressable>
    </View>
  );
};

const press =()=>{
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  backgroundColor: "#111",},
});

export default App;