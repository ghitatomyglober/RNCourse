import { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { styles } from "./styles/MealDetailStyles";
import Subtitle from "../components/Subtitle";
import List from "../components/List";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import type { RouteProp } from "@react-navigation/native";
import IconButton from "../components/IconButton";

type Props = {
  route: RouteProp<RootStackParamList, "MealDetail">;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function MealDetailScreen({ route, navigation }: Props) {
  const mealId = route.params.mealId;

  const selectedMeal: Meal = MEALS.find((meal) => meal.id === mealId)!;
  function headerButtonPressHandler() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
