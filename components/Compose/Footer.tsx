import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AnonymousSwitch from "./AnonymousSwitch";

const Footer = ({
  addAudio,
  addMedia,
  addLocation,
  capture,
  cameraOptionsModalVisible,
  setCameraOptionsModalVisible,
  timeCapsuleData,
  setTimeCapsuleData,
  keyboardVisible,
}: {
  addLocation: () => void;
  addMedia: () => void;
  addAudio: () => void;
  capture: () => void;
  cameraOptionsModalVisible: boolean;
  setCameraOptionsModalVisible: () => void;
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
  keyboardVisible: boolean;
}) => {
  return (
    <View style={styles.container}>
      {!keyboardVisible && (
        <View style={styles.switchContainer}>
          <AnonymousSwitch
            timeCapsuleData={timeCapsuleData}
            setTimeCapsuleData={setTimeCapsuleData}
          />
        </View>
      )}
      <View style={styles.actionBtnContainer}>
        <TouchableOpacity onPress={addMedia}>
          <MaterialIcon
            name="photo-library"
            size={24}
            color={colors.wisteria}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCameraOptionsModalVisible(
              cameraOptionsModalVisible ? false : true,
            );
          }}
        >
          <MaterialIcon name="camera-alt" size={24} color={colors.wisteria} />
        </TouchableOpacity>
        <TouchableOpacity onPress={addLocation}>
          <MaterialIcon name="add-location" size={24} color={colors.wisteria} />
        </TouchableOpacity>
        <TouchableOpacity onPress={addAudio}>
          <MaterialIcon name="audiotrack" size={24} color={colors.wisteria} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    borderTopWidth: 0.5,
    borderTopColor: colors.slateGray,
  },
  switchContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.slateGray,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  actionBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default Footer;
