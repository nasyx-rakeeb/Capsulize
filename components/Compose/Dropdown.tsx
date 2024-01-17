import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TextInput, List } from "react-native-paper";

const Dropdown = ({
  timeCapsuleData,
  setTimeCapsuleData,
  options,
  setAudienceModalVisible,
}: {
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
  options: string[];
  setAudienceModalVisible: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          editable={false}
          left={<TextInput.Icon icon="account-multiple" />}
          style={styles.input}
          label="Audience"
          mode="flat"
        />
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <List.Item
            key={index}
            onPress={() => {
              setTimeCapsuleData((p) => ({ ...p, audience: option }));
              setAudienceModalVisible(false);
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderWidth: 1,
    borderColor: colors.slateGray,
    borderRadius: 6,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: colors.blackPrimary,
  },
  optionsContainer: {
    overflow: "hidden",
    width: "100%",
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  optionItem: {
    backgroundColor: colors.blackPrimary,
    marginVertical: -1,
  },
  optionTitle: {
    fontFamily: "Roboto-Regular",
    color: colors.silver,
    fontSize: 15,
  },
});

export default Dropdown;
