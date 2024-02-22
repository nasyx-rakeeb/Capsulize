import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../others/colors";

type Props = {
  showWithoutOverlay?: boolean;
  animationWidth?: number;
  animationheight?: number;
  overlayOpacity?: number;
  visible: boolean;
};

const FullScreenLoader: React.FC<Props> = ({
  showWithoutOverlay,
  animationWidth,
  animationheight,
  overlayOpacity,
  visible,
}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: !showWithoutOverlay
              ? `rgba(0, 0, 0, ${overlayOpacity ?? 0.5})`
              : colors.blackPrimary,
          },
        ]}
      >
        <LottieView
          autoPlay
          hardwareAccelerationAndroid
          loop
          style={{
            width: animationWidth ?? 200,
            height: animationheight ?? 200,
          }}
          source={require("../../assets/lottie_animations/Loader.json")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FullScreenLoader;
