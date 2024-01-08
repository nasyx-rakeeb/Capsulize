import { Text } from "react-native";
import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";
import { NavigationContainer } from "@react-navigation/native";
import { useRootNAv } from "../hooks";
import { FullScreenLoader } from "../components";

const RootNav = () => {
  const { fontsLoaded, errorLoadingFonts, loading, authorized } = useRootNAv();

  if (!fontsLoaded || loading) {
    return <FullScreenLoader />;
  }

  return (
    <NavigationContainer>
      {!authorized ? <AuthNav /> : <HomeNav />}
    </NavigationContainer>
  );
};

export default RootNav;
