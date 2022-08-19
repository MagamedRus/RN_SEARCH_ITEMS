import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getOnlyCurrencySign } from "../common/textTransform";

function ItemCard({ item }) {
  const imageSrc = item.img
    ? { uri: item.img }
    : require("../assets/img/nonImgIco.png");

  const currencySign = getOnlyCurrencySign(item.currencySign);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={imageSrc} />
      <View style={styles.aboutContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.aboutText}>
          Цена: {Math.round(item.price)} {currencySign}
        </Text>
        <Text style={styles.aboutText}>Вес: {item.weight} г.</Text>
      </View>
    </View>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    marginBottom: 10,
    borderColor: "#d9caca",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  img: {
    height: 85,
    width: 85,
    marginRight: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d2d2d2",
  },
  nameText: {
    fontSize: 17,
    minHeight: 32,
    letterSpacing: 0.5,
    fontFamily: "Inter-Medium",
  },
  aboutText: {
    fontSize: 16,
    fontFamily: "Inter-regular",
    letterSpacing: 0.5,
  },
});
