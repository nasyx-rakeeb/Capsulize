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
import { TextInput, Button, List } from "react-native-paper";
import { usePassword } from "../../../hooks";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Password = ({ navigation }: { navigation: any }) => {
  const {
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    password,
    setPassword,
    pwdVisibility,
    setPwdVisibility,
  } = usePassword(navigation);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Pressable onPress={Keyboard.dismiss} style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Password</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>
            Secure your account by creating a secure password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={pwdVisibility}
            onChangeText={setPassword}
            value={password}
            left={<TextInput.Icon icon="lock" />}
            right={
              password?.length > 0 && (
                <TextInput.Icon
                  icon={pwdVisibility ? "eye" : "eye-off"}
                  onPress={() => {
                    setPwdVisibility(pwdVisibility ? false : true);
                  }}
                />
              )
            }
            style={styles.input}
            label="Password"
            mode="flat"
          />
        </View>
        {!!notes && notes?.length > 0 ? (
          <>
            <View style={styles.listContainer}>
              {notes.map((note, index) => (
                <List.Item
                  titleNumberOfLines={2}
                  style={styles.listItem}
                  titleStyle={[
                    styles.listTitle,
                    !noteConditionMet(note) && styles.error,
                  ]}
                  key={index}
                  title={note}
                  left={(props) =>
                    !!note && (
                      <MaterialIcon
                        {...props}
                        name={
                          !noteConditionMet(note) ? "highlight-remove" : "check"
                        }
                        color={!noteConditionMet(note) ? "red" : colors.silver}
                        size={15}
                      />
                    )
                  }
                />
              ))}
            </View>
          </>
        ) : null}
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
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.prussianBluePrimary,
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
    marginTop: 25,
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

export default Password;
