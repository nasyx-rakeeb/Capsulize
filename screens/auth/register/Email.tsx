import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
} from "react-native";
import colors from "../../../others/colors";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { useEmail } from "../../../hooks";
import { List } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Email = ({ navigation }: any) => {
  const {
    email,
    setEmail,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    errorMsg,
    loading,
    onDismissSnackBar,
  } = useEmail(navigation);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Snackbar
        visible={!!errorMsg && errorMsg?.length > 0 ? true : false}
        onDismiss={onDismissSnackBar}
      >
        {errorMsg}
      </Snackbar>
      <Pressable onPress={Keyboard.dismiss} style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Email</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>
            Provide your email for account verification.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            left={<TextInput.Icon icon="email" />}
            style={styles.input}
            label="Email"
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
            disabled={!areAllConditionsMet() || loading}
            loading={loading}
          >
            Continue
          </Button>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.blackPrimary,
  },
  innerContainer: {
    flex: 1,
  },
  headingContainer: {
    width: "100%",
    marginHorizontal: 25,
  },
  heading: {
    color: colors.silver,
    fontFamily: "Rubik-Bold",
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
    color: colors.blackPrimary,
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

export default Email;
