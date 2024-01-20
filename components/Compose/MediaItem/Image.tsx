import { View, StyleSheet, Image } from "react-native";
import colors from "../../../others/colors";

const ImageMediaItem = ({ url }: { url: string }) => {
  return (
    <View style={styles.itemContainer}>
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
});

export default ImageMediaItem;
