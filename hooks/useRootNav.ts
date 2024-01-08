import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SecureStore from "expo-secure-store";

export default function useRootNav() {
  const [fontsLoaded, errorLoadingFonts] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Merienda-Black": require("../assets/fonts/Merienda/Merienda-Black.ttf"),
    "Merienda-Bold": require("../assets/fonts/Merienda/Merienda-Bold.ttf"),
    "Merienda-ExtraBold": require("../assets/fonts/Merienda/Merienda-ExtraBold.ttf"),
    "Merienda-Medium": require("../assets/fonts/Merienda/Merienda-Medium.ttf"),
    "Merienda-SemiBold": require("../assets/fonts/Merienda/Merienda-SemiBold.ttf"),
    "Merienda-Regular": require("../assets/fonts/Merienda/Merienda-Regular.ttf"),
  });
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const JWT_TOKEN = await SecureStore.getItemAsync("JWT_TOKEN");
      if (JWT_TOKEN) {
        setAuthorized(true);
      } else if (!JWT_TOKEN) {
        setAuthorized(false);
      }
      setLoading(false);
    })();
  }, []);

  return {
    fontsLoaded,
    errorLoadingFonts,
    loading,
    authorized,
  };
}
