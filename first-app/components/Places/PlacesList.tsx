import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";

import { Colors } from "../../constants/colors";
import { Place } from "../../models/place";
import PlaceItem from "./PlaceItem";

type Props = {
  places: Place[];
};

function PlacesList({ places }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function selectPlaceHandler(id: string) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
