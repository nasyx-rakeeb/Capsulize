import { View, StyleSheet, Text } from "react-native";
import colors from "../../others/colors";
import Slider from "@react-native-community/slider";

const BlurAmountSlider = ({
  blurAmount,
  setBlurAmount,
  url,
}: {
  blurAmount: number;
  setBlurAmount: () => void;
  url: string;
}) => {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={5}
        maximumValue={100}
        minimumTrackTintColor={colors.wisteria}
        maximumTrackTintColor={colors.offWhite}
        thumbTintColor={colors.wisteria}
        onValueChange={(v) => setBlurAmount(url, Math.floor(v))}
        value={blurAmount}
      />
    </View>
  );
};

export default BlurAmountSlider;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 4,
    alignItems: "center",
  },
  slider: {
    width: 302,
  },
});
