import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES, Expense } from "../constants/DUMMY_EXPENSES";

interface Props {
  children: JSX.Element | string | number;
}

interface ExpensesContextType {
  expenses: Expense[];
  addExpense: ({ description, amount, date }: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, { description, amount, date }: Expense) => void;
}

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [] as Expense[],
  addExpense: ({ description, amount, date }: Expense) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, { description, amount, date }: Expense) => {},
});

function expensesReducer(state: Expense[], action: any) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense: Expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense: Expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: Props) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: Expense) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, expenseData: Expense) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
