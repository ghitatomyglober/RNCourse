import { Text } from 'react-native';
import { styles } from './styles/TitleStyles';

interface Props {
    children: string
}

function Title({children} : Props) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;