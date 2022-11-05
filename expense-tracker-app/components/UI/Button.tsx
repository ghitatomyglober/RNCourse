import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/ButtonStyles";
import { ViewStyle } from "react-native";
interface Props {
  children: JSX.Element | string | number;
  onPress: () => void;
  mode?: string;
  style?: ViewStyle;
}

function Button({ children, onPress, mode, style }: Props) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
