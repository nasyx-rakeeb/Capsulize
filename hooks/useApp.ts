import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function useApp() {
  const [fontsLoaded, errorLoadingFonts] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-BoldItalic': require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf')
  });

  return {
    fontsLoaded,
    errorLoadingFonts
  }
}