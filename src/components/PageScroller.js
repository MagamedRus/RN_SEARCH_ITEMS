import React from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import { getPagesArr } from "../common/pages";
import ArrowButton from "./ArrowButton";
import PageNumber from "./PageNumber";

function PageScroller({ currentPage, pageCount, onChange }) {
  const isLastPage = currentPage === pageCount;
  const isFirstPage = currentPage === 1;
  const pagesArr = getPagesArr(pageCount);

  const goNextPage = () => !isLastPage && onChange(currentPage + 1);
  const goPrevPage = () => !isFirstPage && onChange(currentPage - 1);

  const renderNumber = ({ item }) => (
    <PageNumber
      key={item.id}
      number={item.value}
      isChoosed={currentPage === item.value}
      isLast={pageCount === item.value}
      onPress={onChange}
    />
  );

  return (
    <View style={styles.container}>
      <ArrowButton style={styles.prevBtn} onPress={goPrevPage} />
      <FlatList
        horizontal={true}
        style={styles.numberList}
        showsHorizontalScrollIndicator={false}
        data={pagesArr}
        renderItem={renderNumber}
        onEndReachedThreshold={0.7}
      />
      <ArrowButton style={styles.nextButtton} onPress={goNextPage} />
    </View>
  );
}

export default PageScroller;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: Dimensions.get("screen").width - 30,
    bottom: 10,
    left: 15,
    opacity: 15,
  },
  numberList: {
    flex: 1,
    marginHorizontal: 30,
    width: Dimensions.get("screen").width - 90,
  },
  prevBtn: {
    position: "absolute",
    height: 38,
    left: -8,
  },
  nextButtton: {
    position: "absolute",
    height: 38,
    right: -8,
    transform: [{ rotateY: "180deg" }],
  },
});
