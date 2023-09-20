import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";

const InputScreen = () => {
  let [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => {
          setText(newValue);
          console.log(newValue);
        }}
      />
      <Text>My name is {text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: { borderWidth: 1, margin: 5, borderColor: "black" },
});

export default InputScreen;
