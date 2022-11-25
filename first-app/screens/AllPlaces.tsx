import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";
import { RootStackParamList } from "../App";
import type { RouteProp } from "@react-navigation/native";
import { Place } from "../models/place";

type Props = {
  route: RouteProp<RootStackParamList, "AllPlaces">;
};

function AllPlaces({ route }: Props) {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
