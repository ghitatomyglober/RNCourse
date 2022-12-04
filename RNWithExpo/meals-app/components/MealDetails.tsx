import { View, Text, ViewStyle, TextStyle } from "react-native";
import { styles } from "./styles/MealDetailsStyles";

type Props = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: Props) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;
