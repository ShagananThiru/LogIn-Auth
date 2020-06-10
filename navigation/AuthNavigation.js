import { createStackNavigator } from "react-navigation-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/WelcomePage";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ForgotPassword from "../screens/ForgotPassword";

const AuthNavigation = createStackNavigator(
  {
    WelcomePage: {screen: WelcomePage},
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    initialRouteName: "WelcomePage",
    headerMode: "none"
  }
);

export default AuthNavigation;

// const Stack = createStackNavigator();

// function AuthNavigation(){
//   return(
//     <Stack.Navigator
//       initialRouteName="WelcomePage"
//       screenOptions={{ gestureEnabled: false }}
//     >
//       <Stack.Screen
//         name="WelcomePage"
//         component={WelcomePage}
//         options={{ title: 'Welcome' }}
//       />
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{ title: 'Login' }}
//       />
//       <Stack.Screen
//         name="Signup"
//         component={Signup}
//         options={{ title: 'Signup' }}
//       />
//       <Stack.Screen
//         name="ForgotPassword"
//         component={ForgotPassword}
//         options={{ title: 'Password Reset' }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default AuthNavigation;
