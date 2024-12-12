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
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);
  const [input1, setInput1] = useState("0");
  const [input2, setInput2] = useState("0");

  const addNumbers = async () => {
    setLoading(true);

    try {
      const start = performance.now();
      const res = await MyRustModule.rustAdd(+input1, +input2);

      setLoadingTime(performance.now() - start);

      const start2 = performance.now();
      const end = performance.now() - start2;

      console.log(`Rust took ${loadingTime}ms, JS took ${end}ms`);
      setLoading(false);
      setResult(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! Test here</Text>
      <Text>{MyRustModule.hello()}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input1.toString()}
          keyboardType="numeric"
          onChangeText={(text) => setInput1(text.trim().replace(/[^0-9]/g, ""))}
        />
        <Text>+</Text>
        <TextInput
          style={styles.input}
          value={input2.toString()}
          keyboardType="numeric"
          onChangeText={(text) => setInput2(text.trim().replace(/[^0-9]/g, ""))}
        />
      </View>
      <TouchableOpacity onPress={addNumbers} style={styles.button}>
        <Text>Calculate</Text>
      </TouchableOpacity>
      <Text>{result ? `Result: ${result}` : "No result yet"}</Text>
      <Text>{loadingTime && `Function call took ${loadingTime}ms`}</Text>
      <Text>{loading && `Calculating...`}</Text>

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
