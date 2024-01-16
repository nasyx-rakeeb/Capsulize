import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";
import { Button } from "react-native-paper";
import { useAppContext } from "../../context/AppContext";
import * as SS from "expo-secure-store";

const Home = ({ navigation }) => {
  const { setIsUserAuthorized } = useAppContext();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        mode="contained"
        onPress={async () => {
          await SS.deleteItemAsync("JWT_TOKEN");
          setIsUserAuthorized(false);
        }}
      >
        log out
      </Button>
      <Button
        mode="contained"
        onPress={async () => {
          navigation.navigate("Compose");
        }}
      >
        Compose
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
