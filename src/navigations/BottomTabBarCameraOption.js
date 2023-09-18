import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AccessCamera } from "../screens/AccessCamera";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";

const BottomTabScreens = createMaterialTopTabNavigator();

function BottomTabNavigation() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(18,30,35)",
      }}
    >
      <BottomTabScreens.Navigator
        initialRouteName="Photo"
        style={{ flex: 1 }}
        tabBarPosition="bottom"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "rgb(18,30,35)",
            height: 95,
            width: 150,
            alignSelf: "center",
          },
          tabBarActiveTintColor: "white",
          tabBarIndicatorContainerStyle: {
            opacity: 0,
          },
        }}
      >
        {/* <BottomTabScreens.Screen
          name="Video"
          component={AccessCamera}
          options={{ headerShown: false }}
        /> */}
        <BottomTabScreens.Screen
          name="Photo"
          component={AccessCamera}
          options={{ headerShown: false }}
        />
      </BottomTabScreens.Navigator>
    </View>
  );
}
export { BottomTabNavigation };
