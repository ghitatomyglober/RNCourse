import { View, Text } from "react-native";
import { Expense } from "../../constants/DUMMY_EXPENSES";
import { styles } from "../styles/ExpensesSummaryStyles";

interface Props {
  expenses: Expense[];
  periodName: string;
}

function ExpensesSummary({ expenses, periodName }: Props) {
  const expensesSum = expenses.reduce((sum: number, expense: Expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
