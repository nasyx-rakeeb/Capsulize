import { useState } from "react";
import { isEmail } from "../others/utils";
import { Keyboard } from "react-native";
import axios from "axios";
import { BASE_API_URL } from "../others/constants";

const useForgotPassword = (navigation: any) => {
  const [email, setEmail] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const disableBtn = () => {
    if (!email || email?.trim()?.length <= 0) {
      return true;
    } else if (!isEmail(email.trim())) {
      return true;
    } else {
      return false;
    }
  };

  const handleBtnPress = async () => {
    try {
      Keyboard.dismiss();
      setLoading(true);

      const { data } = await axios.post(
        `${BASE_API_URL}/auth/forgot-password`,
        { email: email.trim() },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setLoading(false);

      if (data?.status === "fail") {
        setErrorMsg(data?.message);
        return;
      }

      navigation.navigate("ResetPassword");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setErrorMsg("An error occured, please try again");
    }
  };

  return { email, setEmail, handleBtnPress, disableBtn, errorMsg, loading };
};

export default useForgotPassword;
