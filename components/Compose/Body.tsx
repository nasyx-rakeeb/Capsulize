import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-paper";
import Note from "./Note";

const Body = ({
  timeCapsuleData,
  setTimeCapsuleData,
}: {
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          numberOfLines={4}
          multiline
          onChangeText={(v) => setTimeCapsuleData((p) => ({ ...p, text: v }))}
          value={timeCapsuleData.text}
          style={styles.input}
          placeholder="Add a message..."
          mode="flat"
          underlineColor={colors.blackPrimary}
          activeUnderlineColor={colors.wisteria}
          textColor={colors.offWhite}
          cursorColor={colors.wisteria}
          contentStyle={styles.inputContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: colors.prussianBlueSecondary,
    maxHeight: 300,
    backgroundColor: colors.blackPrimary,
    borderWidth: 0,
    fontSize: 18,
  },
  inputContent: {
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Body;
