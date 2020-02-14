import React from "react"
import { StyleSheet, Text, View } from "react-native"

import RGBColorSlider from "./RGBColorSlider"

export default function App() {
  return (
    <View style={styles.container}>
      <RGBColorSlider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
