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
import { TextInput, List } from "react-native-paper";
import Note from "./Note";

const Dropdown = ({
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
      <TouchableOpacity onPress={toggleOptions} style={styles.inputContainer}>
        <TextInput
          editable={false}
          value={
            timeCapsuleData?.audience?.charAt(0)?.toUpperCase() +
            timeCapsuleData?.audience?.slice(1)
          }
          left={<TextInput.Icon icon="account-multiple" />}
          style={styles.input}
          label="Audience"
          mode="flat"
        />
      </TouchableOpacity>
      <Animated.View
        style={[styles.optionsContainer, { height: optionsHeight }]}
      >
        {options.map((option, index) => (
          <List.Item
            key={index}
            onPress={() => {
              setTimeCapsuleData((p) => ({ ...p, audience: option }));
              toggleOptions();
            }}
            style={styles.optionItem}
            titleStyle={styles.optionTitle}
            title={option.charAt(0).toUpperCase() + option.slice(1)}
            right={(props) =>
              timeCapsuleData?.audience === option && (
                <MaterialIcon
                  {...props}
                  name="check"
                  color={colors.silver}
                  size={15}
                />
              )
            }
          />
        ))}
      </Animated.View>
      <Note note="Choose who can view your time capsule. Public means it's visible to everyone, Followers limits it to your followers, and Specified Users lets you choose specific recipients." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    marginHorizontal: 12,
    backgroundColor: colors.prussianBlueSecondary,
  },
  optionsContainer: {
    overflow: "hidden",
    width: "100%",
  },
  optionItem: {
    backgroundColor: colors.prussianBlueSecondary,
    marginHorizontal: 12,
  },
  optionTitle: {
    fontFamily: "Roboto-Regular",
    color: colors.silver,
    fontSize: 15,
  },
});

export default Dropdown;
