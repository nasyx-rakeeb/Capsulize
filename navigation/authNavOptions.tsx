import colors from "../others/colors";
import { HeaderBackBtn } from "../components";

const appNavOptions = {
  headerStyle: {
    backgroundColor: colors.prussianBluePrimary,
  },
  headerTintColor: colors.silver,
  headerShadowVisible: false,
  headerTitle: "",
  headerLeft: ({ canGoBack }) => canGoBack && <HeaderBackBtn />,
};

export default appNavOptions;
