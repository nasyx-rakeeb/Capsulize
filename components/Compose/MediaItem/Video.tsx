import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../../../others/colors";
import VideoPlayer from "react-native-video-controls";
import { Feather, Ionicons } from "react-native-vector-icons";
import CapsulizeSwitch from "../CapsulizeSwitch";
import { useState } from "react";
import BlurAmountSlider from "../BlurAmountSlider";
import BlurAmountPreview from "../BlurAmountPreview";

const VideoMediaItem = ({
  url,
  onRemove,
  openFullscreenMedia,
  isCapsulized,
  onCapsulize,
  blurAmount,
  setBlurAmount,
}: {
  url: string;
  onRemove: () => void;
  openFullscreenMedia: () => void;
  isCapsulized: boolean;
  onCapsulize: () => void;
  blurAmount: number;
  setBlurAmount: () => void;
}) => {
  const videoRef = useRef(null);

  const onEnd = () => {
    if (videoRef.current) {
      videoRef.current.seekTo(0);
      videoRef.current?.methods?.togglePlayPause();
    }
  };

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
        ref={videoRef}
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
        onEnd={onEnd}
      />
      {isCapsulized && (
        <>
          <ImageBackground
            source={{ uri: url }}
            style={styles.blurOverlay}
            blurRadius={isCapsulized ? blurAmount : 0}
          />
          <BlurAmountSlider
            url={url}
            blurAmount={blurAmount}
            setBlurAmount={setBlurAmount}
          />
          <BlurAmountPreview blurAmount={blurAmount} />
        </>
      )}
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
    position: "relative",
    overflow: "hidden",
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
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default VideoMediaItem;
