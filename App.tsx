import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import colors from "./others/colors";
import RootNav from "./navigation/RootNav";
import { PaperProvider } from "react-native-paper";
import { useApp } from "./hooks";

export default function App() {
  const { fontsLoaded, errorLoadingFonts } = useApp();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <RootNav />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
  },
});
