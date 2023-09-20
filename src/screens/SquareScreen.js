import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  let [color, setColor] = useState({ red: 0, green: 0, blue: 0 });
  const setOneColor = (color, value) => {
    if (color + value > 255 || color + value < 0) {
      return;
    } else {
      setColor((current) => ({
        ...current,
        [color]: current[color] + value,
      }));
    }
  };
  return (
    <View>
      <Text>SquareScreen</Text>
      <ColorCounter
        onIncrease={() => setOneColor("red", COLOR_INCREMENT)}
        onDecrease={() => setOneColor("red", -1 * COLOR_INCREMENT)}
        color="red"
      />
      <ColorCounter
        onIncrease={() => setOneColor("green", COLOR_INCREMENT)}
        onDecrease={() => setOneColor("green", -1 * COLOR_INCREMENT)}
        color="green"
      />
      <ColorCounter
        onIncrease={() => setOneColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setOneColor("blue", -1 * COLOR_INCREMENT)}
        color="blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
