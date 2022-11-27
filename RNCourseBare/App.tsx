import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function getUserLocationHandler() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was dernied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
  }
  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={getUserLocationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
