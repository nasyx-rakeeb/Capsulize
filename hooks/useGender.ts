import { useRef, useState } from "react";
import { Animated } from "react-native";
import { useAuthContext } from "../context/AuthContext";

const useGender = (navigation: any) => {
  const [gender, setGender] = useState<string>("");
  const options = ["male", "female", "other"];
  const notes = ["Gender can not be empty"];
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const optionsHeight = useRef(new Animated.Value(0)).current;
  const { setUserData } = useAuthContext();

  const noteConditionMet = (note: string) => {
    switch (note) {
      case notes[0]:
        return !!gender && gender.length > 1;
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  const handleBtnPress = () => {
    setUserData((prev) => ({ ...prev, gender: gender }));
    navigation.navigate("Password");
  };

  const toggleOptions = () => {
    Animated.timing(optionsHeight, {
      toValue: optionsVisible ? 0 : options.length * 50,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setOptionsVisible(!optionsVisible);
  };

  return {
    gender,
    setGender,
    handleBtnPress,
    notes,
    options,
    noteConditionMet,
    areAllConditionsMet,
    optionsVisible,
    setOptionsVisible,
    optionsHeight,
    toggleOptions,
  };
};

export default useGender;
