import * as SecureStore from "expo-secure-store";

export const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const formatISODate = (date: Date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
};

export const getJwtToken = async (): Promise<{
  tokenFound: boolean;
  token: string | null;
  reason?: "not-available" | "error-occurred";
}> => {
  try {
    const token = await SecureStore.getItemAsync("JWT_TOKEN");
    if (!token) {
      return { tokenFound: false, token: null, reason: "not-available" };
    }
    return { tokenFound: true, token };
  } catch (error) {
    console.log(error);
    return { tokenFound: false, token: null, reason: "error-occurred" };
  }
};
