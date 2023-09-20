import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListComponent = () => {
  const friends = [
    { name: "Friend#1", age: 234 },
    { name: "Friend#2", age: 34 },
    { name: "Friend#3", age: 43 },
    { name: "Friend#4", age: 12 },
    { name: "Friend#5", age: 23 },
    { name: "Friend#6", age: 25 },
    { name: "Friend#7", age: 34 },
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        console.log("items rendered");
        console.log({ item });
        return (
          <Text style={styles.list}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  list: { marginVertical: 10 },
});

export default ListComponent;
