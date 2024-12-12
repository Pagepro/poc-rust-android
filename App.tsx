import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyRustModule from "./modules/my-rust-module";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! Test here</Text>
      <Text>{MyRustModule.hello()}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 100,
    height: 50,
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
