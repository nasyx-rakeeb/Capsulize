import { useState, useMemo, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { useAuthContext } from "../context/AuthContext";
import BottomSheet from "@gorhom/bottom-sheet";
import { Alert } from "react-native";

const useProfilePicture = (navigation: any) => {
  const [profilePicture, setProfilePicture] = useState<string>("");
  const notes = [""];
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { userData, setUserData } = useAuthContext();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const sheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
    sheetRef.current?.snapToIndex(0);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
    sheetRef.current?.close();
  };

  const pickImage = async () => {
    try {
      closeBottomSheet();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setProfilePicture(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error occurred while launching media library: " + error);
    }
  };

  const openCamera = async () => {
    closeBottomSheet();
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Error",
        "Sorry, we need camera permissions to make this work!"
      );
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [1, 1],
        base64: true,
        allowsEditing: true,
      });

      if (!result.canceled) {
        setProfilePicture(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };

  const noteConditionMet = (note: string) => {
    switch (note) {
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  const removeProfilePicture = () => {
    setUserData((prev) => ({ ...prev, profilePicture: "" }));
    setProfilePicture("");
  };

  const handleBtnPress = () => {
    setUserData((prev) => ({ ...prev, profilePicture: profilePicture }));
    // navigation.navigate("");
  };

  return {
    profilePicture,
    areAllConditionsMet,
    noteConditionMet,
    setProfilePicture,
    handleBtnPress,
    notes,
    imageLoading,
    setImageLoading,
    pickImage,
    removeProfilePicture,
    bottomSheetVisible,
    sheetRef,
    openBottomSheet,
    closeBottomSheet,
    openCamera,
  };
};

export default useProfilePicture;
