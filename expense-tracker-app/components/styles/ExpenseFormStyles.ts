import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export const styles = StyleSheet.create({
    form: {
      marginTop: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      marginVertical: 24,
      textAlign: "center",
    },
    inputsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowInput: {
      flex: 1,
    },
    errorText: {
      textAlign: "center",
      color: GlobalStyles.colors.error500,
      margin: 8,
    },
    buttons: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      minWidth: 120,
      marginHorizontal: 8,
    },
  });