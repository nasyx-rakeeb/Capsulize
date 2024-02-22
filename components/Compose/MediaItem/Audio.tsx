import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../../../others/colors";
import { Feather, AntDesign } from "react-native-vector-icons";
import { useAudioMediaItem } from "../../../hooks";

const AudioMediaItem = ({
  url,
  onRemove,
}: {
  url: string;
  onRemove: () => void;
}) => {
  const { play, pause, playing, loading, error, position, duration } =
    useAudioMediaItem(url);

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onRemove(url)} style={styles.icon}>
        <Feather name="x" size={20} color={colors.offWhite} />
      </TouchableOpacity>
      <Image
        source={require("../../../assets/images/audio-player-background.jpg")}
        style={styles.audioItem}
        resizeMode="cover"
      />
      {!loading ? (
        <AntDesign
          onPress={playing ? pause : play}
          name={playing ? "pausecircleo" : "play"}
          size={35}
          color={colors.offWhite}
          style={styles.audioPlayBtn}
        />
      ) : (
        <ActivityIndicator
          style={styles.audioPlayBtn}
          size="large"
          color={colors.offWhite}
        />
      )}
      {error && (
        <Text style={styles.errorMsg}>
          Error occurred while trying to play audio
        </Text>
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
  icon: {
    position: "absolute",
    top: 4,
    right: 4,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: 1,
    padding: 2,
  },
  errorMsg: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    color: colors.offWhite,
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: colors.slateGray,
    padding: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    textAlign: "center",
    width: "100%",
  },
});

export default AudioMediaItem;
