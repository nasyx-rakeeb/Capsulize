import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";
import { Button } from "react-native-paper";
import { useHome } from "../../hooks";
import { Compose } from "../../components";

const Home = ({ navigation }) => {
  const { composeModalVisible, showComposeModal, closeComposeModal } =
    useHome();

  return (
    <View style={styles.container}>
      <Compose
        visible={composeModalVisible}
        closeComposeModal={closeComposeModal}
      />
      <Button
        mode="contained"
        onPress={composeModalVisible ? closeComposeModal : showComposeModal}
      >
        Create
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
