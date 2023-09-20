import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterComponent = () => {
  let [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter((counter += 1))} />
      <Button title="Decrease" onPress={() => setCounter((counter -= 1))} />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterComponent;
