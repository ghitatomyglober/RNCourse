import { View, Text, Button, StyleSheet } from "react-native";
import { RootDrawerParamList } from "../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList>;
};

function UserScreen({ navigation }: Props) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
