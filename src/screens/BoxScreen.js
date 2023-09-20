import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    borderWidth: 1,
    borderColor: "red",
  },
  parentStyle: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});

export default BoxScreen;
