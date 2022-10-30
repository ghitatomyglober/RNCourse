import { GlobalStyles } from "../../constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 8,
      backgroundColor: GlobalStyles.colors.primary50,
      borderRadius: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    period: {
      fontSize: 12,
      color: GlobalStyles.colors.primary400,
    },
    sum: {
      fontSize: 16,
      fontWeight: "bold",
      color: GlobalStyles.colors.primary500,
    },
  });