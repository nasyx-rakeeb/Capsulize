import { View, Text, StyleSheet } from "react-native";
import colors from "../../../others/colors";
import { TextInput, Button } from "react-native-paper";
import { useBio } from "../../../hooks";
import { List } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Bio = ({ navigation }) => {
  const {
    bio,
    setBio,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
  } = useBio(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>About Me</Text>
      </View>
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeading}>Share a little about who you are</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          numberOfLines={4}
          multiline
          onChangeText={setBio}
          value={bio}
          left={<TextInput.Icon icon="information-outline" />}
          style={styles.input}
          label="Bio (optional)"
          mode="flat"
        />
      </View>
      <View style={styles.listContainer}>
        {notes.map((note, index) => (
          <List.Item
            style={styles.listItem}
            titleStyle={[
              styles.listTitle,
              !noteConditionMet(note) && styles.error,
            ]}
            key={index}
            title={note}
            left={(props) => (
              <MaterialIcon
                {...props}
                name={!noteConditionMet(note) ? "highlight-remove" : "check"}
                color={!noteConditionMet(note) ? "red" : colors.silver}
                size={15}
              />
            )}
          />
        ))}
      </View>
      <View style={styles.btnContainer}>
        <Button
          labelStyle={styles.btnTxt}
          style={styles.btn}
          icon="arrow-right"
          mode="contained"
          onPress={handleBtnPress}
          disabled={!areAllConditionsMet()}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
  },
  headingContainer: {
    width: "100%",
    marginHorizontal: 25,
  },
  heading: {
    color: colors.silver,
    fontFamily: "Poppins-Bold",
    fontSize: 26,
  },
  subHeadingContainer: {
    width: "100%",
  },
  subHeading: {
    color: colors.slateGray,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginHorizontal: 25,
    lineHeight: 20,
  },
  inputContainer: {
    width: "100%",
    marginTop: 50,
  },
  input: {
    marginHorizontal: 25,
    backgroundColor: colors.prussianBlueSecondary,
    maxHeight: 150,
  },
  btnContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 30,
  },
  btn: {
    marginHorizontal: 25,
  },
  btnTxt: {
    color: colors.prussianBluePrimary,
    fontFamily: "Roboto-Bold",
  },
  listContainer: {
    width: "100%",
    marginHorizontal: 10,
  },
  listTitle: {
    fontFamily: "Roboto-Regular",
    color: colors.silver,
    fontSize: 12,
    marginLeft: -8.5,
  },
  listItem: {
    marginBottom: -20,
  },
  error: {
    color: "red",
  },
});

export default Bio;
