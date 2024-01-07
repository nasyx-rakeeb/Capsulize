import { useState } from "react";
import { Keyboard } from "react-native";
import axios from "axios";
import { BASE_API_URL } from "../others/constants";

const useUsername = (navigation: any) => {
  const [username, setUsername] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setloading] = useState(false);
  const notes = [
    "Username can not be empty",
    "Must be at least 4 characters long",
    "Must not exceed 15 characters",
    "Username can not begin with or end with a period",
    "Only letters, numbers, and - . _ are allowed",
    "Consecutive periods are not allowed",
  ];

  const noteConditionMet = (note: string) => {
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

  const onDismissSnackBar = () => setErrorMsg("");

  const handleBtnPress = async () => {
    try {
      Keyboard.dismiss();

      setloading(true);

      const { data } = await axios.post(
        `${BASE_API_URL}/auth/username-available`,
        { username },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setloading(false);

      if (data?.available === false || data?.status === "fail") {
        setErrorMsg(data?.message);
        return;
      }

      navigation.navigate("Name");
    } catch (error: any) {
      console.log(error);
      setErrorMsg("An error occured, please try again");
    }
  };

  return {
    username,
    setUsername,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    onDismissSnackBar,
    errorMsg,
    loading,
  };
};

export default useUsername;
