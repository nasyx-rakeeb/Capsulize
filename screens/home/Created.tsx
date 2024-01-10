import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";

const Created = () => {
  return (
    <View style={styles.container}>
      <Text>Created</Text>
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

export default Created;
