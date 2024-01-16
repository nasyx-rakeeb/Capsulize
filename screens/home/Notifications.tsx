import { View, Text, StyleSheet } from "react-native";
import colors from "../../others/colors";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
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

export default Notifications;
