import { useState } from "react";
import { isEmail } from "../others/utils";
import {Keyboard} from "react-native"

const useEmail = (navigation) => {
  const [email, setEmail] = useState<string>("");
  const notes = [
    "Email address cannot be empty",
    "Email address must be in valid format",
  ];

  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return email.trim() !== "";
      case notes[1]:
        return isEmail(email);
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  const handleBtnPress = () => {
    Keyboard.dismiss()
    navigation.navigate("Bio");
  };

  return {
    email,
    setEmail,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
  };
};

export default useEmail;
