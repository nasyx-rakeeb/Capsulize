import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SecureStore from "expo-secure-store";

export default function useRootNav() {
  const [fontsLoaded, errorLoadingFonts] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik/Rubik-Regular.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik/Rubik-Medium.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik/Rubik-Bold.ttf"),
  });

  return {
    fontsLoaded,
    errorLoadingFonts,
  };
}
