import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/IconButtonStyles";

type Props = {
  icon: string | any;
  size: number;
  color: string | undefined;
  onPress: () => void;
};

function IconButton({ icon, size, color, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
