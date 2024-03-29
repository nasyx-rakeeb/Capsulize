import { useState } from "react";
import { Keyboard } from "react-native";
import { useAuthContext } from "../../../context/AuthContext";

const useName = (navigation: any) => {
  const [name, setName] = useState<string>("");
  const { setUserData } = useAuthContext();
  const notes = [
    "Name cannot be empty",
    "Must be at least 2 characters long",
    "Cannot exceed 15 characters",
    "Cannot contain special characters",
  ];

  const noteConditionMet = (note: string) => {
    switch (note) {
      case notes[0]:
        return name.trim() !== "";
      case notes[1]:
        return name.length > 1;
      case notes[2]:
        return name.length <= 15;
      case notes[3]:
        return !/[!@#$%^&*(),.?":{}|<>]/.test(name);
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  const handleBtnPress = () => {
    Keyboard.dismiss();
    setUserData((prev) => ({ ...prev, name: name.trim() }));
    navigation.navigate("Email");
  };

  return {
    name,
    setName,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
  };
};

export default useName;
