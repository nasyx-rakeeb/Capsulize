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
import { TextInput, Button } from "react-native-paper";
import { useForgotPassword } from "../../../hooks";
import { ErrorMsg } from "../../../components";

const ForgotPassword = ({ navigation }: { navigation: any }) => {
  const { email, setEmail, handleBtnPress, disableBtn, errorMsg, loading } =
    useForgotPassword(navigation);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Pressable onPress={Keyboard.dismiss} style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Reset Password</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>
            Please enter your email to continue
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
        {!!errorMsg && errorMsg?.length > 0 && <ErrorMsg errorMsg={errorMsg} />}
        <View style={styles.btnContainer}>
          <Button
            labelStyle={styles.btnTxt}
            style={styles.btn}
            icon="arrow-right"
            mode="contained"
            onPress={handleBtnPress}
            disabled={disableBtn() || loading}
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
});

export default ForgotPassword;
