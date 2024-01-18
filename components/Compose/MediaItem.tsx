import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../others/colors";
import { Audio, Video, ResizeMode } from "expo-av";
import Feather from "react-native-vector-icons/Feather";

const MediaItem = ({
  item,
  setData,
}: {
  item: { mediaType: "audio" | "video" | "audio"; url: string };
  setData: () => void;
}) => {
  return (
    <View style={styles.itemContainer}>
      {item?.mediaType === "video" ? (
        <>
          <Video
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            source={{ uri: item?.url }}
            style={styles.videoItem}
          />
          <RemoveBtn />
        </>
      ) : item?.mediaType === "audio" ? (
        <>
          <View style={styles.audioItem} />
          <RemoveBtn />
        </>
      ) : item?.mediaType === "image" ? (
        <>
          <Image
            resizeMode="contain"
            source={{ uri: item?.url }}
            style={styles.imageItem}
          />
          <RemoveBtn />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  videoItem: {
    height: 170,
    aspectRatio: 16 / 9,
  },
  audioItem: {},
  imageItem: {
    height: 170,
    aspectRatio: 16 / 9,
  },
  itemContainer: {
    backgroundColor: colors.black,
    borderColor: colors.slateGray,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 6,
    position: "relative",
  },
  actionBtn: {
    backgroundColor: colors.blackPrimary,
    borderRadius: 200,
    position: "absolute",
    top: 7,
    right: 7,
    padding: 2,
  },
});

export default MediaItem;

const RemoveBtn = ({ onPress }: { onPress: () => void }) => {
  return (
    <Feather
      name="x"
      size={24}
      color={colors.offWhite}
      style={styles.actionBtn}
    />
  );
};
