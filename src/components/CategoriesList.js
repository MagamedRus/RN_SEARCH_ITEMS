import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CategoryCard from "./CategoryCard";

function CategoriesList({ categories, goSubcategories }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {categories.map((category) => (
          <CategoryCard
            key={category.sid}
            goSubcategories={goSubcategories}
            category={category}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 45,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
