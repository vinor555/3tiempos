import React from 'react';
//import { YellowBox } from "react-native";
import { LogBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";

//YellowBox.ignoreWarnings(["Setting a timer", "YellowBox has been"]);
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return <Navigation />;
}

