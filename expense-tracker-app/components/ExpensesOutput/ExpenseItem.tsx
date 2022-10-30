import { styles } from "../styles/ExpenseItemStyles";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../../util/date";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type RootScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

function ExpenseItem({ id, description, amount, date }: Props) {
  const navigation = useNavigation<RootScreenNavigationProp>();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;
