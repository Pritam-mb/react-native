import React, { JSX } from "react";
import { Image, StyleSheet, Text, View, Button,SafeAreaView,Alert ,useColorScheme} from "react-native";

const App = ():JSX.Element => {
  const isdark = useColorScheme() === 'light';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[isdark ? styles.white : styles.black, styles.header]}>Hello, World!</Text>
      </View>

      {/* <View style={styles.header}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to React Native!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          This is a simple React Native application.
        </Text>
        <Button title="Click Me" onPress={() => Alert.alert("Button Pressed!")} />
      </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center", //flex-end
    justifyContent: "center",
  },
  header: {
    fontSize: 48,
    fontWeight: "300",
    fontFamily: 'poppins',
  },
  logo: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
    fontFamily: 'System',
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  white:{
    color:'white'
  },
  black:{
    color:'black'
  }
});

export default App;