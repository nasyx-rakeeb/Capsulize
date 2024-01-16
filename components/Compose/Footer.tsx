import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Footer = ({
  addLink,
  addAudio,
  addMedia,
  addLocation,
  capture,
}: {
  addLocation: () => void;
  addLink: () => void;
  addMedia: () => void;
  addAudio: () => void;
  capture: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addMedia}>
        <MaterialIcon name="photo-library" size={24} color={colors.wisteria} />
      </TouchableOpacity>
      <TouchableOpacity onPress={capture}>
        <MaterialIcon name="camera-alt" size={24} color={colors.wisteria} />
      </TouchableOpacity>
      <TouchableOpacity onPress={addLocation}>
        <MaterialIcon name="add-location" size={24} color={colors.wisteria} />
      </TouchableOpacity>
      <TouchableOpacity onPress={addLink}>
        <MaterialIcon name="insert-link" size={24} color={colors.wisteria} />
      </TouchableOpacity>
      <TouchableOpacity onPress={addAudio}>
        <MaterialIcon name="audiotrack" size={24} color={colors.wisteria} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    borderTopWidth: 0.5,
    borderTopColor: colors.slateGray,
    paddingVertical: 10,
    paddingHorizontal: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Footer;
