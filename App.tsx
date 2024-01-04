import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import colors from "./others/colors";
import RootNav from "./navigation/RootNav";
import { PaperProvider } from "react-native-paper";
import { useApp } from "./hooks";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  const { fontsLoaded, errorLoadingFonts } = useApp();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
    <PaperProvider>
      <View style={styles.container}>
        <RootNav />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
  },
});
