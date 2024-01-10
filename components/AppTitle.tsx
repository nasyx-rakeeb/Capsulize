import { Text, StyleSheet } from "react-native";
import colors from "../others/colors";

const AppTitle = () => {
  return <Text style={styles.title}>Capsulize</Text>;
};

export default AppTitle;

const styles = StyleSheet.create({
  title: {
    color: colors.offWhite,
    fontFamily: "Rubik-Bold",
    fontSize: 24,
  },
});
