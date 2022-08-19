import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ItemCard from "./ItemCard";

const ItemsList = ({ items }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      {items.map((item) => (
        <ItemCard key={item.sid} item={item} />
      ))}
    </View>
  </ScrollView>
);

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingVertical: 15,
    paddingBottom: 45,
    flexDirection: "column",
  },
});
