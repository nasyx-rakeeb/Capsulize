import { View, StyleSheet } from "react-native";
import colors from "../../others/colors";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppHeaderRight = () => {
  return (
    <View style={styles.container}>
      <MaterialIcon
        style={styles.icon}
        name="search"
        size={24}
        color={colors.offWhite}
      />
      <Ionicons
        style={[styles.messagesIcon, styles.icon]}
        name="chatbubble"
        size={20}
        color={colors.offWhite}
      />
      <MaterialIcon
        style={styles.icon}
        name="settings"
        size={22}
        color={colors.offWhite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  messagesIcon: {
    marginHorizontal: 12,
  },
  icon: {
    backgroundColor: colors.prussianBlueSecondary,
    borderRadius: 10,
    padding: 5,
  },
});

export default AppHeaderRight;
