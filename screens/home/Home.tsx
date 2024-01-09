import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";
import { Button } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const { account, setIsUserAuthorized } = useAppContext();

  const fun = async () => {
    await SecureStore.deleteItemAsync("JWT_TOKEN");
    await setIsUserAuthorized(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={fun} mode="contained">
        log out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Home;
