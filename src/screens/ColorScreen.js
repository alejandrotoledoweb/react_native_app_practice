import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log({ colors });
  return (
    <View>
      <Text style={styles.textStyle}>Color Screen</Text>
      <Button
        title="Add a color: "
        onPress={() => setColors([...colors, randomRGB()])}
      />
      <View
        style={{ height: 70, width: 70, backgroundColor: randomRGB() }}
      ></View>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 70, width: 120, backgroundColor: item }}>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});

export default ColorScreen;
