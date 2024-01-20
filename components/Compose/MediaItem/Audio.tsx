import { View, StyleSheet, Image } from "react-native";
import colors from "../../../others/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const AudioMediaItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require("../../../assets/images/audio-player-background.jpg")}
        style={styles.audioItem}
        resizeMode="cover"
      />
      <AntDesign
        name="play"
        size={35}
        color={colors.offWhite}
        style={styles.audioPlayBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  audioItem: {
    height: 170,
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  itemContainer: {
    backgroundColor: colors.black,
    borderColor: colors.slateGray,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 6,
    position: "relative",
  },
  audioPlayBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -17.5 }, { translateY: -17.5 }],
  },
});

export default AudioMediaItem;
