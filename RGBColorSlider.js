import React, { useState } from "react"
import { View, Text, StyleSheet, Slider } from "react-native"

const RGBColorSlider = () => {
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)

  return (
    <View
      style={[styles.container, { backgroundColor: `rgb(${r}, ${g}, ${b})` }]}
    >
      <Text style={{ fontSize: 30 }}>
        rgb({r}, {g}, {b})
      </Text>
      <View style={[styles.container, { height: "20%" }]}>
        <Slider
          maximumValue={255}
          value={r}
          minimumTrackTintColor={"red"}
          onValueChange={v => setR(Math.floor(v))}
          style={styles.slider}
        />
        <Slider
          maximumValue={255}
          value={g}
          minimumTrackTintColor={"green"}
          onValueChange={v => setG(Math.floor(v))}
          style={styles.slider}
        />
        <Slider
          maximumValue={255}
          value={b}
          minimumTrackTintColor={"blue"}
          onValueChange={v => setB(Math.floor(v))}
          style={styles.slider}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  slider: {
    width: "80%"
  }
})

export default RGBColorSlider
