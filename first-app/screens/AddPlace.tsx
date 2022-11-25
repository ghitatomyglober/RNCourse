import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Place } from "../models/place";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function AddPlace({ navigation }: Props) {
  async function createPlaceHandler(place: Place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
