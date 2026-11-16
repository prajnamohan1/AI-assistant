import React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";
import ResultScreen from "../screens/ResultScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { Task } from "../types";

export type RootStackParamList = {
  Home: undefined;

  Task: {
    task: Task;
  };

  Result: {
    task: Task;
    result: string;
  };

  Settings: undefined;
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerBackTitle: "Back",
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={({ route }) => ({
            title: route.params.task.title,
          })}
        />

        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            title: "Your Result",
          }}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}