import { useState } from "react";

const useForgotPassword = (navigation) => {
  const [email, setEmail] = useState<string>("");

  const handleBtnPress = () => {};

  return { email, setEmail, handleBtnPress };
};

export default useForgotPassword;
