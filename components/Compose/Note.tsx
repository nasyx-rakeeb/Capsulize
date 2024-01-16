import { StyleSheet, View, Text } from "react-native";
import colors from "../../others/colors";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Note = ({ note }: { note: string }) => {
  return (
    <View style={styles.noteContainer}>
      <MaterialIcon
        name="info-outline"
        color={colors.silver}
        size={15}
        style={styles.noteIcon}
      />
      <Text style={styles.note}>{note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    flexDirection: "row",
    marginTop: 6,
    width: "100%",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  note: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: colors.silver,
    marginRight: 12,
    flex: 1,
    textAlign: "justify",
  },
  noteIcon: {
    marginLeft: 12,
    marginRight: 6,
    marginTop: 1.8,
  },
});

export default Note;
