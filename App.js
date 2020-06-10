import React from "react";
import { StatusBar } from "react-native";
import AppContainer from "./navigation";
import Firebase, { FirebaseProvider } from "./Config/Firebase";
// import Initial from "./screens/Initial";

export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <StatusBar barStyle="light-content" backgroundColor="#000000"/>
      <AppContainer />
      {/* <Initial /> */}
    </FirebaseProvider>
  );
}

