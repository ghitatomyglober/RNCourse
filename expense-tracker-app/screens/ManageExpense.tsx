import { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { styles } from "./styles/ManageExpenseStyles";
import { RootStackParamList } from "../App";
import type { RouteProp } from "@react-navigation/native";
import { Expense } from "../constants/DUMMY_EXPENSES";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

type Props = {
  route: RouteProp<RootStackParamList, "ManageExpense">;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function ManageExpense({ route, navigation }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>();

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - please try again later!");
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData: Expense) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try again later!");
      setIsSubmitting(false);
    }
  }
  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onPress={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
