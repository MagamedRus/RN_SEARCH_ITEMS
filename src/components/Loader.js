import React from "react";
import { Image, StyleSheet } from "react-native";
import loaderGif from "../assets/img/loader.gif";

const Loader = () => (
  <Image resizeMethod="scale" style={styles.container} source={loaderGif} />
);

export default Loader;

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginTop: "30%",
    justifyContent: "center",
    alignSelf: "center",
  },
});
