import { Text, TextStyle, StyleProp } from 'react-native';
import { styles } from './styles/InstructionTextStyles';

interface Props {
    children: JSX.Element | string,
    style?: StyleProp<TextStyle> | undefined
}

function InstructionText({ children, style }: Props) {
  return <Text style={style === undefined? [styles.instructionText, style] : styles.instructionText }>{children}</Text>;
}

export default InstructionText;
