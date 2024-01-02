import {Home} from "../screens"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from "../others/colors"

const HomeNav = () => {
  const HomeTab = createBottomTabNavigator();
  
  return (
      <HomeTab.Navigator>
        <HomeTab.Screen name="Home" component={Home} />
      </HomeTab.Navigator>
    )
}

export default HomeNav