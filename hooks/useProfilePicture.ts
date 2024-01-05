import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const useProfilePicture = (navigation: any) => {
  const [profilePicture, setProfilePicture] = useState<string>("");
  const notes = [""];
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const pickImage = async () => {
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

  const handleBtnPress = () => {
    navigation.navigate("");
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
  };
};

export default useProfilePicture;
