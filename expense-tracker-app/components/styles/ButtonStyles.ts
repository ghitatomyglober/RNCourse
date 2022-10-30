import { GlobalStyles } from "../../constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
      borderRadius: 4,
      padding: 8,
      backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
      backgroundColor: "transparent",
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
    flatText: {
      color: GlobalStyles.colors.primary200,
    },
    pressed: {
      opacity: 0.75,
      backgroundColor: GlobalStyles.colors.primary100,
      borderRadius: 4,
    },
  });
  