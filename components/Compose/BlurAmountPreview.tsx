import { View, StyleSheet, Text } from "react-native";
import colors from "../../others/colors";

const BlurAmountPreview = ({
  blurAmount,
  rightStyle,
}: {
  blurAmount: number;
  rightStyle: number;
}) => {
  return (
    <View style={{ ...styles.previewContainer, right: rightStyle ?? 60 }}>
      <Text style={styles.txt}>Blur: {blurAmount}</Text>
    </View>
  );
};

export default BlurAmountPreview;

const styles = StyleSheet.create({
  previewContainer: {
    position: "absolute",
    top: 4,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 4,
    padding: 3.3,
    zIndex: 999999,
  },
  txt: {
    color: colors.offWhite,
    fontFamily: "Rubik-Regular",
  },
});
