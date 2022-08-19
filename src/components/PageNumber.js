import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PageNumber({ number, onPress, isChoosed, isLast }) {
  const numberStyle = isChoosed
    ? [styles.pageNumber, styles.choosedPageNumber]
    : styles.pageNumber;

  const selectPage = () => !isChoosed && onPress(number);

  return (
    <>
      <TouchableOpacity onPress={selectPage}>
        <Text style={numberStyle}>{number}</Text>
      </TouchableOpacity>
      {!isLast && <Text style={styles.pageNumber}>●</Text>}
    </>
  );
}

export default React.memo(PageNumber);

const styles = StyleSheet.create({
  pageNumber: {
    lineHeight: 40,
    fontSize: 18,
    color: "white",
    marginHorizontal: 3,
    textAlign: "center",
  },
  choosedPageNumber: {
    paddingHorizontal: 5,
    borderLeftColor: "rgba(0,0,0,0.4)",
    borderRightColor: "rgba(0,0,0,0.4)",
    borderRightWidth: 2,
    borderLeftWidth: 2,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
