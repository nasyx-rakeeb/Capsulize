import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../others/colors";
import { Button } from "react-native-paper";
import { useWelcome } from "../../hooks";
import LottieView from "lottie-react-native";

const Welcome = ({ navigation }) => {
  const { handleBtnPress } = useWelcome(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            style={styles.animation}
            source={require("../../assets/lottie_animations/Robot.json")}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Welcome!</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>
            Ahoy there! Welcome aboard our time-traveling ship. Secure your spot
            in the crew by signing up or teleport to your account with a quick
            login.
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.btnContainer}>
          <Button
            uppercase={false}
            labelStyle={styles.btnTxt1}
            buttonColor={colors.wisteria}
            style={styles.btn1}
            icon="login"
            mode="contained"
            onPress={() => handleBtnPress("Login")}
          >
            Log In
          </Button>
          <Button
            uppercase={false}
            labelStyle={styles.btnTxt2}
            style={styles.btn2}
            icon="account-plus"
            mode="outlined"
            onPress={() => handleBtnPress("Username")}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
    justifyContent: "space-between",
  },
  animationContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    marginLeft: 20,
  },
  headingContainer: {
    width: "90%",
  },
  heading: {
    color: colors.silver,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "Merienda-Bold",
    letterSpacing: 3.5,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btn1: {
    width: "90%",
    marginBottom: 12,
  },
  btn2: {
    width: "90%",
    marginBottom: 12,
    borderColor: colors.silver,
  },
  box: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt1: {
    color: colors.prussianBluePrimary,
    fontFamily: "Roboto-Bold",
  },
  btnTxt2: {
    color: colors.silver,
    fontFamily: "Roboto-Bold",
  },
  subHeadingContainer: {
    width: "90%",
    marginTop: 10,
  },
  subHeading: {
    textAlign: "center",
    color: colors.silver,
    fontFamily: "Roboto-Regular",
    letterSpacing: 1.5,
    fontSize: 16,
  },
});

export default Welcome;
