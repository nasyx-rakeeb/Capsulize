import axios from "axios";
import { BASE_API_URL } from "../others/constants";
import { getJwtToken, getFcmToken } from "../others/utils";

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
    const res = await axios.get(`${BASE_API_URL}/user/my-account`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res?.data?.status === "fail") {
      return { data: null, message: res?.data?.message, success: false };
    }

    return {
      data: res?.data?.data,
      message: "Account details fetched successfully",
      success: true,
    };
  } catch (error: any) {
    console.log(error);
    return {
      data: null,
      message: "Unable to reach server, please try again later",
      success: false,
    };
  }
};

export const saveFcmToken = async () => {
  const { token } = await getJwtToken();
  try {
    const { success, fcmToken } = await getFcmToken();

    if (!success) {
      console.warn("Error occurred while getting fcm token.");
      return;
    }

    const { data } = await axios.post(
      `${BASE_API_URL}/user/save-fcm-token`,
      { fcmToken },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getApproxLocation = async () => {
  const { token } = await getJwtToken();
  try {
    const ip = await axios.get("https://api.ipify.org/");
    
    const { data } = await axios.post(
      `${BASE_API_URL}/app/get-approx-location`,
      { ip: ip?.data },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    
    return { success: true, data: data?.data };
  } catch (error) {
    console.log(error);
    return { success: false, data: null };
  }
};
