import {
  Welcome,
  Login,
  ForgotPassword,
  Email,
  Bio,
  Gender,
  ProfilePicture,
  Username,
  Name,
  Birthday,
  Password,
  ResetPassword,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../others/colors";
import { HeaderBackBtn } from "../components/";
import { AuthProvider } from "../context/AuthContext";
import authNavOptions from "./authNavOptions";

const AuthNav = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <AuthStack.Navigator screenOptions={authNavOptions}>
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Password" component={Password} />
        <AuthStack.Screen name="ProfilePicture" component={ProfilePicture} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthStack.Screen name="Gender" component={Gender} />
        <AuthStack.Screen name="Email" component={Email} />
        <AuthStack.Screen name="Birthday" component={Birthday} />
        <AuthStack.Screen name="Bio" component={Bio} />
        <AuthStack.Screen name="Username" component={Username} />
        <AuthStack.Screen name="Name" component={Name} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      </AuthStack.Navigator>
    </AuthProvider>
  );
};

export default AuthNav;
