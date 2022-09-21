import { View, Text, Pressable } from 'react-native';
import { styles } from './styles/GoalItemStyles';

interface GoalItemProps {
  onDeleteItem: (id: string) => void;
  id: string;
  text: string;
}

function GoalItem({id, onDeleteItem, text}: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => onDeleteItem(id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;