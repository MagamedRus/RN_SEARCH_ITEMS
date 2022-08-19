import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import ArrowButton from "./ArrowButton";


function Header({ screenTitle, navigator, style }) {
  const goBack = () => navigator.pop()
  return (
    <View style={[styles.container, style]}>
      <ArrowButton onPress={goBack} />
      <Text style={styles.txt}>{screenTitle || ''}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 5,
    elevation: 15,
  },
  txt: {
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: 18,
    height: 27,
    width: 210,
    marginLeft: 15,
    marginTop: 5
  }
})