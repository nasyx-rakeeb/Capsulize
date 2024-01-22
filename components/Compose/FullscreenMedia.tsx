import React from "react";
import { Modal, StyleSheet, View, Image, Dimensions } from "react-native";
import colors from "../../others/colors";
import VideoPlayer from "react-native-video-controls";
import { Ionicons } from "react-native-vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const FullscreenMedia = ({
  visible,
  closeModal,
  fullscreenMedia,
}: {
  visible: boolean;
  closeModal: () => void;
  fullscreenMedia: { type: string; url: string };
}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.container}>
        {fullscreenMedia?.type === "image" ? (
          <>
            <Ionicons
              onPress={closeModal}
              style={styles.btn}
              name="chevron-back"
              size={30}
              color={colors.offWhite}
            />
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={styles.media}
              source={{ uri: fullscreenMedia?.url }}
            />
          </>
        ) : (
          <VideoPlayer
            source={{ uri: fullscreenMedia?.url }}
            style={styles.media}
            toggleResizeModeOnFullscreen={false}
            seekColor={colors.wisteria}
            onBack={closeModal}
            disableFullscreen={true}
            resizeMode="contain"
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "relative",
  },
  media: {
    width: WIDTH,
    height: HEIGHT,
  },
  btn: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 2,
    borderRadius: 4,
  },
});

export default FullscreenMedia;
