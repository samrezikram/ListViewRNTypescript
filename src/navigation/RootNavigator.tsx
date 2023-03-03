import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from "react-redux";

import { RootStackParamList } from "./types";
import NotFoundScreen from "src/screens/NotFoundScreen";
import HomeScreen from "src/screens/HomeScreen";
import PostScreen from "src/screens/PostScreen";
import store from "src/store"

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Home";

  return (
    <Provider store={store}>
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="NotFound" component={NotFoundScreen}/>
          <Stack.Screen name="Post" component={PostScreen}/>
        </Stack.Navigator>
    </Provider>


  )
}