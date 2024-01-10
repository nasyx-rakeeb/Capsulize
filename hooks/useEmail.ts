import { useState } from "react";
import { isEmail } from "../others/utils";
import { Keyboard } from "react-native";
import { BASE_API_URL } from "../others/constants";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useEmail = (navigation: any) => {
  const [email, setEmail] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setloading] = useState(false);
  const { setUserData } = useAuthContext();
  const notes = [
    "Email address cannot be empty",
    "Email address must be in valid format",
  ];

  const noteConditionMet = (note: string) => {
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

  const onDismissSnackBar = () => setErrorMsg("");

  const handleBtnPress = async () => {
    try {
      Keyboard.dismiss();

      setloading(true);

      const { data } = await axios.post(
        `${BASE_API_URL}/auth/validate-email`,
        { email },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      setloading(false);

      if (data?.canUse === false || data?.status === "fail") {
        setErrorMsg(data?.message);
        return;
      }

      setUserData((prev) => ({ ...prev, email: email }));

      navigation.navigate("Bio");
    } catch (error: any) {
      console.log(error);
      setloading(false);
      setErrorMsg("An error occured, please try again");
    }
  };

  return {
    email,
    setEmail,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    onDismissSnackBar,
    errorMsg,
    loading,
  };
};

export default useEmail;
