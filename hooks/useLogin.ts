import { useState } from "react";
import { isEmail } from "../others/utils";
import {Keyboard} from "react-native"

const useLogin = (navigation) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pwdVisibility, setPwdVisibility] = useState<boolean>(true);

  const disableBtn = () => {
    if (!email || email?.trim()?.length <= 0) {
      return true;
    } else if (!password || password?.trim()?.length <= 5) {
      return true;
    } else if (!isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleLoginPress = () => {
    Keyboard.dismiss()
  };
  
  const handleForgotPress = () => {
    navigation.navigate("ForgotPassword");
  }
  
  const handleSignupPress = () => {
    navigation.navigate("Username");
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    setPwdVisibility,
    pwdVisibility,
    handleLoginPress,
    handleForgotPress,
    handleSignupPress,
    disableBtn,
  };
};

export default useLogin;
