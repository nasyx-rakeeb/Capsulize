import { StyleSheet, View, TextInput } from "react-native";
import colors from "../../others/colors";
import SelectedMedia from "./SelectedMedia";

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
          multiline
          onChangeText={(v) => setTimeCapsuleData((p) => ({ ...p, text: v }))}
          value={timeCapsuleData.text}
          style={styles.input}
          placeholder="Add a message..."
          cursorColor={colors.offWhite}
          placeholderTextColor={colors.gray}
        />
      </View>
      <View style={styles.selectedMediaContainer}>
        <SelectedMedia data={timeCapsuleData} setData={setTimeCapsuleData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: colors.prussianBlueSecondary,
    maxHeight: 300,
    backgroundColor: colors.blackPrimary,
    fontSize: 18,
    height: "auto",
    color: colors.offWhite,
  },
  selectedMediaContainer: {
    marginTop: 18,
  },
});

export default Body;
