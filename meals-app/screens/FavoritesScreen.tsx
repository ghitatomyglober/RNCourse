import { View, Text } from "react-native";
// import { useContext } from "react";
import { useSelector } from "react-redux";

import MealsList from "../components/MealList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { styles } from "./styles/FavoritesScreenStyles";

type State = {
  favoriteMeals: {
    ids: string[];
  };
};

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: State) => state.favoriteMeals.ids
  );

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;
