import { View } from 'react-native';
import { styles } from './styles/CardStyles';

interface Props {
    children: JSX.Element[]
}

function Card({ children } : Props) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
