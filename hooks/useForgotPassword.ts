import { useState } from "react";
import { isEmail } from "../others/utils";
import {Keyboard} from "react-native"

const useForgotPassword = (navigation) => {
  const [email, setEmail] = useState<string>("");

  const disableBtn = () => {
    if (!email || email?.trim()?.length <= 0) {
      return true;
    } else if (!isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleBtnPress = () => {
    Keyboard.dismiss()
  };

  return { email, setEmail, handleBtnPress, disableBtn };
};

export default useForgotPassword;
