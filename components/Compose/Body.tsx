import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-paper";
import Dropdown from "./Dropdown";
import Note from "./Note";

const Body = ({
  timeCapsuleData,
  setTimeCapsuleData,
  options,
  optionsHeight,
  toggleOptions,
  optionsVisible,
}: {
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
  options: string[];
  optionsHeight: any;
  optionsVisible: boolean;
  toggleOptions: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Dropdown
        timeCapsuleData={timeCapsuleData}
        setTimeCapsuleData={setTimeCapsuleData}
        optionsVisible={optionsVisible}
        optionsHeight={optionsHeight}
        options={options}
        toggleOptions={toggleOptions}
      />
      <View style={styles.inputContainer}>
        <TextInput
          numberOfLines={4}
          multiline
          onChangeText={(v) => setTimeCapsuleData((p) => ({ ...p, text: v }))}
          value={timeCapsuleData.text}
          left={<TextInput.Icon icon="alphabetical-variant" />}
          style={styles.input}
          label="Message"
          mode="flat"
        />
        <Note note="Craft a personalized message to accompany your time capsule. Share your thoughts, memories, or anything you'd like with the recipients." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    paddingVertical: 15,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 30,
  },
  input: {
    backgroundColor: colors.prussianBlueSecondary,
    maxHeight: 150,
    marginHorizontal: 12,
  },
});

export default Body;
