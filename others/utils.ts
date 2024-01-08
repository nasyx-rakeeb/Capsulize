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
