import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";

const Compose = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Compose</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Compose;
