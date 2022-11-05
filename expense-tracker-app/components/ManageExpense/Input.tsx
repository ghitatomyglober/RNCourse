import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  ViewStyle,
  View,
} from "react-native";
import { styles } from "../styles/InputStyles";

interface Props {
  label: string;
  style?: StyleProp<any>;
  textInputConfig?: TextInputProps;
  invalid?: boolean;
}

function Input({ label, invalid, style, textInputConfig }: Props) {
  const inputStyles = [styles.input] as ViewStyle[];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;
