import * as SecureStore from "expo-secure-store";

export const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const formatISODate = (date: Date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
};

export const saveToSecurestore = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getFromSecurestore = async (key: string) => {
  try {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
