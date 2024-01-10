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
import { TextInput, Button, Snackbar, Portal } from "react-native-paper";
import { useResetPassword } from "../../../hooks";
import { ErrorMsg } from "../../../components";

const ResetPassword = ({ navigation }: { navigation: any }) => {
  const {
    setPwdVisibility,
    pwdVisibility,
    handleBtnPress,
    disableBtn,
    errorMsg,
    loading,
    newPassword,
    otp,
    setNewPassword,
    setOtp,
    successMsg,
    onDismissSnackBar,
    handleLoginPress,
  } = useResetPassword(navigation);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Portal>
        <Snackbar
          visible={!!successMsg && successMsg?.length > 0 ? true : false}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Login",
            onPress: handleLoginPress,
          }}
        >
          {successMsg}
        </Snackbar>
      </Portal>
      <Pressable onPress={Keyboard.dismiss} style={styles.innerContainer}>
        <View style={styles.top}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Reset Password</Text>
          </View>
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>
              Please enter the new password along with 6 digit OTP which was
              sent to your email address
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={setOtp}
              value={otp}
              left={<TextInput.Icon icon="message-text-clock" />}
              style={[styles.input, styles.input1]}
              label="OTP"
              mode="flat"
            />
            <TextInput
              secureTextEntry={pwdVisibility}
              onChangeText={setNewPassword}
              value={newPassword}
              left={<TextInput.Icon icon="lock" />}
              right={
                newPassword?.length > 0 && (
                  <TextInput.Icon
                    icon={pwdVisibility ? "eye" : "eye-off"}
                    onPress={() => {
                      setPwdVisibility(pwdVisibility ? false : true);
                    }}
                  />
                )
              }
              style={styles.input}
              label="New Password"
              mode="flat"
            />
          </View>
          {!!errorMsg && errorMsg?.length > 0 && (
            <ErrorMsg errorMsg={errorMsg} />
          )}
          <View style={styles.btnContainer}>
            <Button
              labelStyle={styles.btnTxt}
              style={styles.btn}
              icon="login"
              mode="contained"
              onPress={handleBtnPress}
              disabled={disableBtn() || loading}
              loading={loading}
            >
              Reset
            </Button>
          </View>
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
  top: {
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
  input1: {
    marginBottom: 12,
  },
  btnContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 20,
  },
  btn: {
    marginHorizontal: 25,
  },
  btnTxt: {
    color: colors.prussianBluePrimary,
    fontFamily: "Roboto-Bold",
  },
});

export default ResetPassword;
