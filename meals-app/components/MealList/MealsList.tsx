import { View, FlatList, StyleSheet } from "react-native";
import { ListRenderItemInfo } from "react-native";
import Meal from "../../models/Meal";

import MealItem from "./MealItem";

interface Props {
  items: Meal[];
}

function MealsList({ items }: Props) {
  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
