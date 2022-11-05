import { View, ActivityIndicator } from "react-native";
import { styles } from "../styles/ErrorOverlayStyles";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;
