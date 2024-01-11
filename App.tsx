import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import colors from "./others/colors";
import RootNav from "./navigation/RootNav";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider>
        <AppProvider>
          <View style={styles.container}>
            <RootNav />
            <StatusBar style="auto" />
          </View>
        </AppProvider>
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
