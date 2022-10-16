import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/Category";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
