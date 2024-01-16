import { useState, useRef } from "react";
import { Animated } from "react-native";
import * as ImagePicker from "expo-image-picker"

const useCompose = (closeComposeModal: () => void) => {
  const [timeCapsuleData, setTimeCapsuleData] = useState<TimeCapsule>({
    recipients: [],
    audience: "public",
    location: { locationDataType: null, coordinates: [] },
    urls: [],
    text: "",
    revealIdentityAtRevealTime: null,
    anonymous: false,
    revealTime: null,
    media: [],
  });
  const optionsHeight = useRef(new Animated.Value(0)).current;
  const options = ["public", "followers", "specified Users"];
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

  const onDone = () => {
    closeComposeModal();
    return;
  };

  const toggleOptions = () => {
    Animated.timing(optionsHeight, {
      toValue: optionsVisible ? 0 : options.length * 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setOptionsVisible(!optionsVisible);
  };

  const addLocation = async () => {};

  const addMedia = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setTimeCapsuleData((p) => ({
          ...p,
          media: [
            ...p?.media,
            { mediaType: result.assets[0].type, url: result.assets[0].uri },
          ],
        }));
      }
    } catch (error) {
      console.log("Error occurred while launching media library: " + error);
    }
  };

  const capture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Error",
        "Sorry, we need camera permissions to make this work!",
      );
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
        aspect: [1, 1],
        base64: true,
        allowsEditing: true,
      });

      if (!result.canceled) {
        setTimeCapsuleData((p) => ({
          ...p,
          media: [
            ...p?.media,
            { mediaType: result.assets[0].type, url: result.assets[0].uri },
          ],
        }));
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };

  const addLink = () => {};

  const addAudio = async () => {};

  return {
    timeCapsuleData,
    onDone,
    options,
    optionsHeight,
    toggleOptions,
    optionsVisible,
    setTimeCapsuleData,
    addAudio,
    addLink,
    addMedia,
    addLocation,
    capture,
  };
};

export default useCompose;
