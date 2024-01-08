import axios from "axios";

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
      }
    );
    return { imageLink: response?.data?.data?.link, success: true };
  } catch (error) {
    console.log(error);
    return { imageLink: "", success: false };
  }
};
