import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { styles } from "./styles/MealDetailStyles";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import type { RouteProp } from "@react-navigation/native";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

type Props = {
  route: RouteProp<RootStackParamList, "MealDetail">;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

type State = {
  favoriteMeals: {
    ids: string[];
  };
};

function MealDetailScreen({ route, navigation }: Props) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: State) => state.favoriteMeals.ids
  );
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal: Meal = MEALS.find((meal) => meal.id === mealId)!;

  const mealIsFavorite = favoriteMealIds.includes(mealId);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      // favoriteMealsCtx.removeFavorite(mealId);
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
