import { useState } from "react";

const useLogin = (navigation) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pwdVisibility, setPwdVisibility] = useState<boolean>(true);

  const handleBtnPress = (navigateTo: "ForgotPassword" | "Username") => {
    navigation.navigate(navigateTo);
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    setPwdVisibility,
    pwdVisibility,
    handleBtnPress,
  };
};

export default useLogin;
