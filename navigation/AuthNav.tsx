import {Welcome, Login, ForgotPassword, Email, Bio, Gender, ProfilePicture, Username, Name, Birthday} from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../others/colors"
import {HeaderBackBtn} from "../components/"

const AuthNav = () => {
  const AuthStack = createNativeStackNavigator();
  
  return (
      <AuthStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.prussianBluePrimary,
        },
        headerTintColor: colors.silver,
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: ({canGoBack}) => canGoBack && ( <HeaderBackBtn />)
      }}>
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="ProfilePicture" component={ProfilePicture} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthStack.Screen name="Email" component={Email} />
        <AuthStack.Screen name="Birthday" component={Birthday} />
        <AuthStack.Screen name="Bio" component={Bio} />
        <AuthStack.Screen name="Gender" component={Gender} />
        <AuthStack.Screen name="Username" component={Username} />
        <AuthStack.Screen name="Name" component={Name} />
      </AuthStack.Navigator>
    )
}

export default AuthNav