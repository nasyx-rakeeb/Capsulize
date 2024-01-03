import { View, Text, StyleSheet } from "react-native";
import colors from "../../../others/colors";
import { TextInput, Button } from "react-native-paper";
import { useLogin } from "../../../hooks";

const Login = ({ navigation }) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    setPwdVisibility,
    pwdVisibility,
    handleBtnPress,
  } = useLogin(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Login</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>Please sign in to continue</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            left={<TextInput.Icon icon="email" />}
            style={[styles.input, styles.input1]}
            label="Email"
            mode="flat"
          />
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
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn2}
            labelStyle={styles.btnTxt2}
            mode="text"
            onPress={() => {
              handleBtnPress("ForgotPassword");
            }}
            rippleColor={colors.prussianBluePrimary}
          >
            Forgot password?
          </Button>
          <Button
            labelStyle={styles.btnTxt}
            style={styles.btn}
            icon="login"
            mode="contained"
            onPress={() => {}}
          >
            Log In
          </Button>
        </View>
      </View>
      <View style={styles.signupBtnContainer}>
        <Button
          style={styles.btn2}
          labelStyle={styles.signupBtnTxt}
          mode="text"
          onPress={() => {
            handleBtnPress("Username");
          }}
          rippleColor={colors.prussianBluePrimary}
        >
          Don't have an account? Sign Up
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
  top: {
    flex: 1,
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
  },
  input1: {
    marginBottom: 12,
  },
  btnContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 1.5,
  },
  btn: {
    marginHorizontal: 25,
  },
  btnTxt: {
    color: colors.prussianBluePrimary,
    fontFamily: "Roboto-Bold",
  },
  btnTxt2: {
    color: colors.silver,
    fontFamily: "Roboto-Bold",
    marginBottom: 30,
  },
  btn2: {
    marginHorizontal: 16,
  },
  signupBtnContainer: {
    width: "100%",
  },
  signupBtnTxt: {
    color: colors.silver,
    fontFamily: "Roboto-Bold",
  },
});

export default Login;
