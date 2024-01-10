import axios from "axios";
import { BASE_API_URL } from "../others/constants";
import { getJwtToken } from "../others/utils";

export const uploadImage = async (image: string | null | undefined) => {
  if (!image) {
    return { imageLink: "", success: true };
  }
  try {
    const response = await axios.post(
      "https://api.imgur.com/3/image",
      {
        image: image,
      },
      {
        headers: {
          Authorization: "Client-ID 2f0614d3de4bd45",
        },
      },
    );
    return { imageLink: response?.data?.data?.link, success: true };
  } catch (error) {
    console.log(error);
    return { imageLink: "", success: false };
  }
};

export const getMyAccount = async (): Promise<{
  data: User | null;
  message: string;
  success: boolean;
}> => {
  const { token } = await getJwtToken();
  try {
    const { data } = await axios.get(`${BASE_API_URL}/user/my-account`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data?.status === "fail") {
      return { data: null, message: data?.message, success: false };
    }

    return {
      data: data?.data,
      message: "Account details fetched successfully",
      success: true,
    };
  } catch (error: any) {
    console.log(error);
    return {
      data: null,
      message:
        "An error occurred while fetching account details, please try again",
      success: false,
    };
  }
};
