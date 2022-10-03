import { View, Text } from 'react-native';
import { styles } from './styles/NumberContainerStyles';

interface Props {
    children: JSX.Element | string | number
}

function NumberContainer({children}: Props) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;