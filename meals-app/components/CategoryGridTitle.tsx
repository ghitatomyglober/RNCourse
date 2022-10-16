import { Pressable, View, Text } from "react-native";
import { styles } from "./styles/CategoryGridTitleStyles";

interface CategoryGridTitleProps {
  title: string;
  color: string;
  onPress: () => void;
}

function CategoryGridTile({ title, color, onPress }: CategoryGridTitleProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
