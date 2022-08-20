import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet} from "react-native";
import { getBeforeMaxNumber } from "../common/number";
import { isScrolledToRight } from "../common/utils";
import PageNumber from "./PageNumber";

export const PageList = ({ pagesData, currentPage, onChange }) => {
  const [showsPages, setShowsPages] = useState([]);

  useEffect(() => {
    showNextPages();
  }, []);

  const showNextPages = () => {
    const pagesLength = pagesData.length;
    const countShows = showsPages.length + 25;
    const showsElements = getBeforeMaxNumber(pagesLength, countShows);
    const cuttedPagesArr = pagesData.slice(0, showsElements);
    setShowsPages(cuttedPagesArr);
  };

  const onScroll = (event) => {
    const isShowedAll = showsPages.length === pagesData.maxItemsCount;
    const isScrolledRight =
      !isShowedAll && isScrolledToRight(event.nativeEvent, 25);
    isScrolledRight && showNextPages();
  };

  return (
    <ScrollView
      style={styles.container}
      onScroll={onScroll}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {showsPages.map((pageNumber) => (
        <PageNumber
          key={pageNumber.id}
          number={pageNumber.value}
          isChoosed={currentPage === pageNumber.value}
          onPress={onChange}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    width: Dimensions.get("screen").width - 90,
  },
});
