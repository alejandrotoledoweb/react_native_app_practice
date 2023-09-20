import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Input demo"
        onPress={() => navigation.navigate("Input")}
      />
      <Button
        title="Go to BoxSreen"
        onPress={() => navigation.navigate("Box")}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
