import { Home, Notifications, Created, Received, Account } from "../screens";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../others/colors";
import { AppHeaderRight, HeaderBackBtn } from "../components";
import tabBarOptions from "./homeTabBarOptions";
import homeStackNavOptions from "./homeStackNavOptions";
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const HomeTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={({ route }) => tabBarOptions({ route })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Created" component={Created} />
      <Tab.Screen name="Received" component={Received} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const HomeNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={homeStackNavOptions}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default HomeNav;
