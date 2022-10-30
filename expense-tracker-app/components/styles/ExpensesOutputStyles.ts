import { GlobalStyles } from "../../constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 0,
      backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 32,
    },
  });