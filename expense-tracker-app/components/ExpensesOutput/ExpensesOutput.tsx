import { Text, View } from "react-native";
import { Expense } from "../../constants/DUMMY_EXPENSES";
import { styles } from "../styles/ExpensesOutputStyles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface Props {
  expenses: Expense[];
  expensesPeriod: string;
  fallbackText: string;
}

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }: Props) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}
export default ExpensesOutput;
