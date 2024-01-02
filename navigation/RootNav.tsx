import AuthNav from "./AuthNav"
import HomeNav from "./HomeNav"
import { NavigationContainer } from "@react-navigation/native";

const RootNav = () => {
  return (
    <NavigationContainer>
      <AuthNav />
      </NavigationContainer>
    )
}

export default RootNav