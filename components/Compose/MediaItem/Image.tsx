import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import colors from "../../../others/colors";
import { Feather, Ionicons } from "react-native-vector-icons";
import { Switch } from "react-native-paper";
import CapsulizeSwitch from "../CapsulizeSwitch"

const ImageMediaItem = ({
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
      <TouchableOpacity
        onPress={() => onRemove(url, "image")}
        style={styles.icon}
      >
        <Feather name="x" size={20} color={colors.offWhite} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openFullscreenMedia(url, "image")}
        style={styles.resizeIcon}
      >
        <Ionicons name="resize-outline" size={19} color={colors.offWhite} />
      </TouchableOpacity>
      <CapsulizeSwitch value={isCapsulized} onChange={() => onCapsulize(url)} />
      <Image
        resizeMode='cover'
        source={{ uri: url }}
        style={styles.imageItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    height: 170,
    aspectRatio: 16 / 9,
    borderRadius: 8,
    backgroundColor: colors.black,
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
  }
});

export default ImageMediaItem;
