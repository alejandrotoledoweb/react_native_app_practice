import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";

const InputScreen = () => {
  let [text, setText] = useState("");
  let [pass, setPass] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => {
          setText(newValue);
        }}
      />
      <Text>My name is {text}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        onChangeText={(newValue) => {
          setPass(newValue);
        }}
      />
      {pass.length < 5 ? (
        <Text>Password must be at leasst 5 characters long</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: { borderWidth: 1, margin: 5, borderColor: "black" },
});

export default InputScreen;
