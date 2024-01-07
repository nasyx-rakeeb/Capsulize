import axios from "axios";

export const uploadImage = async (image: string) => {
  try {
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
