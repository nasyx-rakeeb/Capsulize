import { HelperText } from "react-native-paper";
import { StyleSheet, StyleProp, TextStyle } from "react-native";

interface ErrorMsgProps {
  errorMsg: string;
  style?: StyleProp<TextStyle>;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ errorMsg, style }) => {
  return (
    <HelperText style={[styles.error, style]} type="error" visible={true}>
      {errorMsg}
    </HelperText>
  );
};

export default ErrorMsg;

const styles = StyleSheet.create({
  error: {
    marginHorizontal: 15,
    textAlign: "center",
    marginTop: 8,
  },
});
