import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useRef } from "react";
import { Camera } from "expo-camera";
import * as Brightness from "expo-brightness";
import Slider from '@react-native-community/slider';

export default function FlashlightApp() {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const cameraRef = useRef(null);

  const toggleTorch = async () => {
    if (isTorchOn) {
      await Brightness.setBrightnessAsync(1); // Restablecer el brillo a su valor original (1.0).
    } else {
      await Brightness.setBrightnessAsync(0.5); // Establecer un valor menor para simular una linterna.
    }
    setIsTorchOn(!isTorchOn);
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>BRILLO</Text>
        <Button
          title={isTorchOn ? "SUBIR BRILLO" : "BAJAR BRILLO"}
          onPress={toggleTorch}
        />
        <Camera style={{ width: 0, height: 0 }} ref={cameraRef} />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>BRILLO AJUSTABLE</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#123423"
          maximumTrackTintColor="#000000"
        />
      </View>
    </>
  );
}
