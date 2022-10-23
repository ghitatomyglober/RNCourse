import type { RouteProp } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealsList";
import { useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = {
  route: RouteProp<RootStackParamList, "MealsOverview">;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function MealsOverviewScreen({ route, navigation }: Props) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )!.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
