import { useState } from "react";
import { isEmail } from "../others/utils";
import { Keyboard } from "react-native";
import { BASE_API_URL } from "../others/constants";
import axios from "axios";

const useResetPassword = (navigation: any) => {
  const [otp, setOtp] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [pwdVisibility, setPwdVisibility] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const disableBtn = () => {
    if (!otp || otp?.trim()?.length <= 5) {
      return true;
    } else if (!newPassword || newPassword?.trim()?.length <= 5) {
      return true;
    } else {
      return false;
    }
  };

  const handleBtnPress = async () => {
    setErrorMsg("");
    setLoading(true);
    Keyboard.dismiss();

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).+$/.test(newPassword)) {
      setErrorMsg(
        "New password must contain letters, numbers, and at least one special character",
      );
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `${BASE_API_URL}/auth/reset-password`,
        { otp: otp.trim(), newPassword: newPassword.trim() },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      setLoading(false);

      if (data?.status === "fail") {
        setErrorMsg(data?.message);
        return;
      } else if (data?.status === "ok") {
        setSuccessMsg("Password updated successfully, you can now log in");
        setOtp("");
        setNewPassword("");
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setErrorMsg("An error occured, please try again");
    }
  };

  const onDismissSnackBar = () => setSuccessMsg("");

  const handleLoginPress = () => {
    navigation.navigate("Login");
    onDismissSnackBar();
  };

  return {
    setPwdVisibility,
    pwdVisibility,
    handleBtnPress,
    disableBtn,
    errorMsg,
    loading,
    newPassword,
    setNewPassword,
    otp,
    setOtp,
    successMsg,
    onDismissSnackBar,
    handleLoginPress,
  };
};

export default useResetPassword;
