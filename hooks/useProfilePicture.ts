import { useState, useMemo, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { useAuthContext } from "../context/AuthContext";
import BottomSheet from "@gorhom/bottom-sheet";
import { Alert } from "react-native";
import axios from "axios";
import { BASE_API_URL } from "../others/constants";
import { saveToSecurestore } from "../others/utils";
import { Buffer } from "buffer";

const useProfilePicture = (navigation: any) => {
  const [profilePicture, setProfilePicture] = useState<string>("");
  const notes = [""];
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { userData, setUserData } = useAuthContext();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const sheetRef = useRef<BottomSheet>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setloading] = useState(false);

  const onDismissSnackBar = () => setErrorMsg("");

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
        setUserData((prev) => ({
          ...prev,
          profilePicture: !!result.assets ? result.assets[0].uri : "",
        }));
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
        setUserData((prev) => ({
          ...prev,
          profilePicture: !!result.assets ? result.assets[0].uri : "",
        }));
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

  const handleBtnPress = async () => {
    setloading(true);
    try {
      const { data } = await axios.post(
        `${BASE_API_URL}/auth/signup`,
        { ...userData },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setloading(false);

      if (data?.status === "fail") {
        setErrorMsg(data?.message);
        return;
      } else if (data?.status === "ok") {
        await saveToSecurestore("JWT_TOKEN", data?.token?.toString());
        Alert.alert("Success");
      }
    } catch (error: any) {
      console.log(error);
      setloading(false);
      setErrorMsg("An error occured, please try again");
    }
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
    onDismissSnackBar,
    errorMsg,
    loading,
  };
};

export default useProfilePicture;
