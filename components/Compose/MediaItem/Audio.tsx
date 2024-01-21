import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import colors from "../../../others/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useAudioMediaItem} from "../../../hooks"

const AudioMediaItem = ({url}: {url: string}) => {
  const {play, pause, playing, loading, error} = useAudioMediaItem(url)
  
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require("../../../assets/images/audio-player-background.jpg")}
        style={styles.audioItem}
        resizeMode="cover"
      />
      {!loading ? ( <AntDesign
        onPress={playing ? pause : play}
        name={playing ? "pausecircleo" : "play"}
        size={35}
        color={colors.offWhite}
        style={styles.audioPlayBtn}
      />) : (
        <ActivityIndicator style={styles.audioPlayBtn} size="large" color={colors.offWhite} />
        )}
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
