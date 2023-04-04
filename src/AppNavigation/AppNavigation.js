import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ActivityIndicator, View } from "react-native";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Profile from "../screens/Profile/Profile";
import DefaultLogin from "../screens/DefaultLogin/DefaultLogin";
import Chat from "../screens/Chat/Chat";
import UploadContent from "../screens/UploadContent/UploadContent";

const Stack = createNativeStackNavigator();

const AuthenticatedUserContext = React.createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DefaultLogin" component={DefaultLogin} />
    </Stack.Navigator>
  );
};

const AppStack = ({ AppState }) => {
  return (
    <Stack.Navigator defaultScreenOptions={Chat}>
      <Stack.Screen name="Home">
        {(props) => <Home {...props} AppState={AppState} />}
      </Stack.Screen>

      <Stack.Screen name="Login">
        {(props) => <Login {...props} AppState={AppState} />}
      </Stack.Screen>

      <Stack.Screen name="Chat">{(props) => <Chat {...props} />}</Stack.Screen>
      <Stack.Screen name="UploadContent">
        {(props) => <UploadContent {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const GeneralNavigator = ({ AppState }) => {
  const { user, setUser } = React.useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    return unsubscribeAuth;
  }, [user]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack AppState={AppState} /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function AppNavigation({ AppState }) {
  return (
    <AuthenticatedUserProvider>
      <GeneralNavigator AppState={AppState} />
    </AuthenticatedUserProvider>
  );
}
