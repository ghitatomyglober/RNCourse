import { FlatList, ListRenderItemInfo } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CategoryGridTile from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/Category";
import { RootStackParamList } from "../App";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function CategoriesScreen({ navigation }: Props) {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
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
