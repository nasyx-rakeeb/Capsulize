import { useState } from "react";
import { isEmail } from "../others/utils";
import { Alert, Keyboard } from "react-native";
import { BASE_API_URL } from "../others/constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const useLogin = (navigation: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pwdVisibility, setPwdVisibility] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);

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

  const handleLoginPress = async () => {
    setErrorMsg("");
    try {
      Keyboard.dismiss();
      setLoading(true);
      const { data } = await axios.post(
        `${BASE_API_URL}/auth/login`,
        { email: email.trim(), password: password.trim() },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setLoading(false);

      if (data?.status === "fail") {
        setErrorMsg(data?.message);
        return;
      } else if (data?.status === "ok") {
        await SecureStore.setItemAsync("JWT_TOKEN", data?.token?.toString());
        Alert.alert("Success");
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setErrorMsg("An error occured, please try again");
    }
  };

  const handleForgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleSignupPress = () => {
    navigation.navigate("Username");
  };

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
    errorMsg,
    loading,
  };
};

export default useLogin;
