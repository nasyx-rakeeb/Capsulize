import colors from "../others/colors";
import { HeaderBackBtn } from "../components";

const appNavOptions = {
  headerStyle: {
    backgroundColor: colors.blackPrimary,
  },
  headerTintColor: colors.offWhite,
  headerShadowVisible: false,
  headerTitle: "",
  headerLeft: ({ canGoBack }) => canGoBack && <HeaderBackBtn />,
};

export default appNavOptions;
