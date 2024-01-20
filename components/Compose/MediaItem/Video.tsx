import { View, StyleSheet } from "react-native";
import colors from "../../../others/colors";
import VideoPlayer from "react-native-video-controls";
import { VIDEO_POSTER } from "../../../others/constants";

const VideoMediaItem = ({ url }: { url: string }) => {
  return (
    <View style={styles.itemContainer}>
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
        posterResizeMode="cover"
        poster={VIDEO_POSTER}
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
});

export default VideoMediaItem;
