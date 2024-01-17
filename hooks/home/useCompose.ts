import { useState, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

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
  const options = ["public", "followers", "specified Users"];
  const [audienceModalVisible, setAudienceModalVisible] = useState(false);
  const [cameraOptionsModalVisible, setCameraOptionsModalVisible] =
    useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    type: "Point",
    coordinates: [0, 0],
  });

  const handleLocationChange = (event) => {
    setSelectedLocation({
      type: "Point",
      coordinates: [
        event.nativeEvent.coordinate.longitude,
        event.nativeEvent.coordinate.latitude,
      ],
    });
  };

  const onNext = () => {
    closeComposeModal();
    return;
  };

  const onCancelLocation = () => {
    setMapVisible(false);
  };

  const onSelectLocation = () => {
    setTimeCapsuleData((p) => ({ ...p, location: { ...selectedLocation } }));
    onCancelLocation();
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

  const capture = async (option: "video" | "image") => {
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
        mediaTypes:
          option === "image"
            ? ImagePicker.MediaTypeOptions.Images
            : ImagePicker.MediaTypeOptions.Videos,
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

  const addAudio = async () => {
    try {
      const audioFile = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
      });
      if (!audioFile?.canceled) {
        setTimeCapsuleData((p) => ({
          ...p,
          media: [
            ...p?.media,
            { mediaType: "audio", url: result.assets[0].uri },
          ],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    timeCapsuleData,
    onNext,
    options,
    setTimeCapsuleData,
    addAudio,
    addMedia,
    addLocation,
    capture,
    audienceModalVisible,
    setAudienceModalVisible,
    cameraOptionsModalVisible,
    setCameraOptionsModalVisible,
    mapVisible,
    setMapVisible,
    onSelectLocation,
    onCancelLocation,
    selectedLocation,
    setSelectedLocation,
    handleLocationChange,
  };
};

export default useCompose;
