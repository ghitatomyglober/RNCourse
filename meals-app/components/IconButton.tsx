import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/IconButtonStyles";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
};

function IconButton({ icon, color, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;