import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";
import { NavigationContainer } from "@react-navigation/native";
import { useRootNAv } from "../hooks";
import { Alert, FullScreenLoader } from "../components";
import { useAppContext } from "../context/AppContext";

const RootNav = () => {
  const { fontsLoaded, errorLoadingFonts } = useRootNAv();
  const { isUserAuthorized, appLoading, appErrorMsg, visible, setVisible } =
    useAppContext();

  return (
    <NavigationContainer>
      <Alert
        visible={visible}
        setVisible={setVisible}
        title="Error"
        description={appErrorMsg}
      />
      <FullScreenLoader
        visible={!fontsLoaded || appLoading}
        showWithoutOverlay={true}
      />
      {!isUserAuthorized ? <AuthNav /> : <HomeNav />}
    </NavigationContainer>
  );
};

export default RootNav;
