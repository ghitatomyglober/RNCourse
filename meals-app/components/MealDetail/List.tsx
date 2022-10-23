import { View, Text } from "react-native";
import { styles } from "../styles/ListStyles";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
}

export default List;
