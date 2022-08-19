import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ArrowButton = ({ onPress, style }) => (
  <View style={[styles.container, style]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.txt}>{"<"}</Text>
    </TouchableOpacity>
  </View>
);

export default ArrowButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
  },
  txt: {
    fontSize: 22,
    color: "white",
    fontFamily: "Inter-Medium",
  },
});
