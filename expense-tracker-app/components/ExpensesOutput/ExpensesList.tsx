import { FlatList } from "react-native";
import { Expense } from "../../constants/DUMMY_EXPENSES";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

function renderExpenseItem(itemData: { item: Expense }) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }: Props) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
