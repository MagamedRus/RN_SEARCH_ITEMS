import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function CategoryCard({ category, goSubcategories }) {
  const imageSrc = category.icon
    ? { uri: category.icon }
    : require("../assets/img/nonImgIco.png");
  const enterCategory = () => goSubcategories(category);

  return (
    <TouchableOpacity onPress={enterCategory} style={styles.container}>
      <Image style={styles.img} source={imageSrc} />
      <Text style={styles.txt}>{category.name || "Название категории"}</Text>
    </TouchableOpacity>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "space-between",
    minHeight: 200,
    width: 144,
    marginVertical: 5,
    borderColor: "#d9caca",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },

  img: {
    height: 120,
    width: 120,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d2d2d2",
  },

  txt: {
    maxHeight: 80,
    textAlign: "center",
    marginTop: 6,
	fontSize: 16,
	color: 'black',
	fontFamily: 'Inter-Light'
  },
});
