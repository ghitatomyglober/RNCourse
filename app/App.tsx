import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <View>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

registerRootComponent(App);
