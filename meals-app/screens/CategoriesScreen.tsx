import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/Category";

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      id={itemData.item.id}
    />
  );
}

function CategoriesScreen() {
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
