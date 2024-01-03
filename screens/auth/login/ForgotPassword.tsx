import { View, Text, StyleSheet } from "react-native";
import colors from "../../../others/colors";
import { TextInput, Button } from "react-native-paper";
import { useForgotPassword } from "../../../hooks";

const ForgotPassword = ({ navigation }) => {
  const { email, setEmail, handleBtnPress, disableBtn } = useForgotPassword(navigation);

  return (
    <View style={styles.container}>
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
      <View style={styles.btnContainer}>
        <Button
          labelStyle={styles.btnTxt}
          style={styles.btn}
          icon="arrow-right"
          mode="contained"
          onPress={handleBtnPress}
          disabled={disableBtn()}
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
