import { View, Text } from 'react-native';
import { styles } from './styles/GuessLogItemStyles';
interface Props {
    roundNumber: number,
    guess: number,
}

function GuessLogItem({ roundNumber, guess } : Props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;