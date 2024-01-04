import { useState } from "react";
import { Keyboard } from "react-native";

const useUsername = (navigation) => {
  const [username, setUsername] = useState<string>("");
  const notes = [
    "Username can not be empty",
    "Must be at least 4 characters long",
    "Must not exceed 15 characters",
    "Username can not begin with or end with a period",
    "Only letters, numbers, and - . _ are allowed",
    "Consecutive periods are not allowed",
  ];

  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return username.trim() !== "";
      case notes[1]:
        return username.length >= 4;
      case notes[2]:
        return username.length <= 15;
      case notes[3]:
        return !/^\./.test(username) && !/\.$/.test(username);
      case notes[4]:
        return /^[A-Za-z0-9_.-]+$/.test(username);
      case notes[5]:
        return !/\.\./.test(username);
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  const handleBtnPress = () => {
    Keyboard.dismiss();
    navigation.navigate("Name");
  };

  return {
    username,
    setUsername,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
  };
};

export default useUsername;
