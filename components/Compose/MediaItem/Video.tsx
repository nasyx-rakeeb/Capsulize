import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../others/colors";
import VideoPlayer from "react-native-video-controls";
import { Feather, Ionicons } from "react-native-vector-icons";
import CapsulizeSwitch from "../CapsulizeSwitch"

const VideoMediaItem = ({
  url,
  onRemove,
  openFullscreenMedia,
  isCapsulized,
  onCapsulize
}: {
  url: string;
  onRemove: () => void;
  openFullscreenMedia: () => void;
  isCapsulized: boolean
  onCapsulize: () => void
}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onRemove(url)} style={styles.icon}>
        <Feather name="x" size={20} color={colors.offWhite} />
      </TouchableOpacity>
       <CapsulizeSwitch value={isCapsulized} onChange={() => onCapsulize(url)} />
      <TouchableOpacity
        onPress={() => openFullscreenMedia(url, "video")}
        style={styles.resizeIcon}
      >
        <Ionicons name="resize-outline" size={19} color={colors.offWhite} />
      </TouchableOpacity>
      <VideoPlayer
        source={{ uri: url }}
        style={styles.videoItem}
        toggleResizeModeOnFullscreen={false}
        showOnStart={false}
        seekColor={colors.wisteria}
        disableBack={true}
        disableVolume={true}
        disableFullscreen={true}
        paused
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoItem: {
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
  resizeIcon: {
    position: "absolute",
    top: 4,
    right: 32,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: 1,
    padding: 2,
  },
});

export default VideoMediaItem;
