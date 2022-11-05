import { View, Text } from "react-native";

import { styles } from "../styles/ErrorOverlayStyles";
import Button from "./Button";

function ErrorOverlay({
  message,
  onPress,
}: {
  message: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onPress}>Ok</Button>
    </View>
  );
}

export default ErrorOverlay;
