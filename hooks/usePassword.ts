import { useState } from "react";
import { Keyboard } from "react-native";
import { useAuthContext } from "../context/AuthContext";

const usePassword = (navigation: any) => {
  const [password, setPassword] = useState<string>("");
  const [pwdVisibility, setPwdVisibility] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { setUserData } = useAuthContext();

  const notes = [
    "Password can not be empty",
    "Password must be at least 6 characters long",
    "Must contain letters, numbers, and at least one special character",
    "Password cannot begin or end with a white space",
  ];

  const noteConditionMet = (note: string) => {
    switch (note) {
      case notes[0]:
        return password.trim() !== "";
      case notes[1]:
        return password.length >= 6;
      case notes[2]:
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).+$/.test(password);
      case notes[3]:
        return !/^\s|\s$/.test(password);
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  const handleBtnPress = () => {
    try {
      if (areAllConditionsMet()) {
        Keyboard.dismiss();
        setUserData((prev) => ({ ...prev, password: password.trim() }));
        navigation.navigate("ProfilePicture");
      } else {
        setErrorMsg("Please fix the password issues before proceeding.");
      }
    } catch (error: any) {
      console.log(error);
      setErrorMsg("An error occurred, please try again");
    }
  };

  return {
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    password,
    setPassword,
    pwdVisibility,
    setPwdVisibility,
    errorMsg,
  };
};

export default usePassword;
