import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";

const Received = () => {
  return (
    <View style={styles.container}>
      <Text>Received</Text>
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

export default Received;
