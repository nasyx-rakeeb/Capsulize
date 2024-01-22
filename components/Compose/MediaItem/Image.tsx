import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../../others/colors";
import { Feather } from "react-native-vector-icons";

const ImageMediaItem = ({
  url,
  onRemove,
}: {
  url: string;
  onRemove: () => void;
}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onRemove(url)} style={styles.icon}>
        <Feather name="x" size={20} color={colors.offWhite} />
      </TouchableOpacity>
      <Image
        resizeMode="cover"
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
    backgroundColor: "rgba(255,255,255, 0.2)",
    zIndex: 1,
    padding: 2,
  },
});

export default ImageMediaItem;
