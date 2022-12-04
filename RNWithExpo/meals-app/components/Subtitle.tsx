import { View, Text } from "react-native";
import { styles } from "./styles/SubtitleStyles";

interface Props {
  children: JSX.Element | string | number;
}

function Subtitle({ children }: Props) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;
