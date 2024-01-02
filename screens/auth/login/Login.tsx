import {View, Text, StyleSheet} from "react-native"
import colors from "../../../others/colors"
import { TextInput } from 'react-native-paper';

const Login  = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.subHeadingContainer}>
      <Text style={styles.subHeading}>Please sign in to continue</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput left={<TextInput.Icon icon="account"/>} style={styles.input} label="Email" mode="flat" />
        <TextInput left={<TextInput.Icon icon="lock"/>} right={<TextInput.Icon icon="eye"/>} style={styles.input} label="Password" mode="flat" />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
  },
  headingContainer: {
    width: "100%",
    marginHorizontal: 25
  },
  heading: {
    color: colors.white,
    fontFamily: "Poppins-Bold",
    fontSize: 26
  },
  subHeadingContainer: {
    width: "100%",
    marginHorizontal: 25
  },
  subHeading: {
    color: colors.slateGray,
    fontFamily: "Roboto-Regular",
    fontSize: 16
  },
  inputContainer: {
    width: "100%",
    marginTop: 50
  },
  input: {
    marginBottom: 12,
    marginHorizontal: 25,
    backgroundColor: colors.prussianBlueSecondary
  }
})

export default Login