import colors from "../others/colors"
import {AppHeaderRight, AppTitle} from "../components"

const HomeStackNavOptions = {
  headerStyle: {
          backgroundColor: colors.prussianBluePrimary,
        },
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
        headerTintColor: colors.offWhite,
        headerShadowVisible: false,
        headerTitle: () => <AppTitle />,
        headerLeft: () => null,
        headerRight: () => <AppHeaderRight />
}

export default HomeStackNavOptions