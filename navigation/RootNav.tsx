import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";
import { NavigationContainer } from "@react-navigation/native";
import { useRootNAv } from "../hooks";
import { FullScreenLoader } from "../components";
import { useAppContext } from "../context/AppContext";

const RootNav = () => {
  const { fontsLoaded, errorLoadingFonts } = useRootNAv();
  const { isUserAuthorized, appLoading } = useAppContext();

  if (!fontsLoaded || appLoading) {
    return <FullScreenLoader showWithoutOverlay={true} />;
  }

  return (
    <NavigationContainer>
      {!isUserAuthorized ? <AuthNav /> : <HomeNav />}
    </NavigationContainer>
  );
};

export default RootNav;
