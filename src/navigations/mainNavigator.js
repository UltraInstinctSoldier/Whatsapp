import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { BottomTabNavigation } from "./BottomTabBarCameraOption";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import { useState } from "react";

import React from "react";
import Calls from "../screens/Calls";
import Status from "../screens/Status";
import ChatsTab from "../screens/ChatsTab";
import Communities from "../screens/Communities";
import { useEffect } from "react";

const Tab = createMaterialTopTabNavigator();

export default function MainNavigator({ navigation, route }) {
  const cameraAccess = async () => {
    await navigation.navigate("BottomTabNavigation");
  };

  // useEffect(() => {
  //   (async () => {
  //   await
  //   })();
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(30,43,50)",
            paddingBottom: 10,
            flexDirection: "row",
            alignItems: "flex-end",
            paddingTop: 14,
          }}
        >
          <View
            style={{
              flex: 0.8,
              alignItems: "flex-start",
            }}
          >
            <Text style={Styles.HeadCon}>WhatsApp</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              flex: 0.4,
              paddingRight: 12,
            }}
          >
            <TouchableOpacity onPress={cameraAccess}>
              <Ionicons
                name="camera-outline"
                color={"rgb(110,130,140)"}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="search-sharp"
                color={"rgb(110,130,140)"}
                size={23}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="md-ellipsis-vertical"
                color={"rgb(110,130,140)"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="ChatsTab"
        screenOptions={{
          tabBarInactiveTintColor: "rgb(110,130,140)",
          tabBarActiveTintColor: "rgb(0,175,140)",
          // tabBarShowLabel: false,
          // tabBarShowIcon: false,
          tabBarStyle: {
            backgroundColor: "rgb(30,43,50)",
          },
          tabBarIndicatorStyle: {
            height: 3,
            backgroundColor: "rgb(0,175,140)",
          },
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 17,
          },
          tabBarPressColor: "gray",
        }}
      >
        <Tab.Screen
          name="Communities"
          component={Communities}
          options={{
            tabBarIconStyle: {
              marginRight: 50,
              //              width: 50,
            },

            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              width: 50,
              height: 3,
              backgroundColor: "rgb(0,175,140)",
            },
            tabBarIcon: () => (
              <FontAwesome5 name="users" size={18} color={"rgb(110,130,140)"} />
            ),
          }}
        />
        <Tab.Screen
          name="ChatsTab"
          component={ChatsTab}
          options={{
            tabBarAccessibilityLabel: "home",
            title: "Chats",
          }}
        />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </View>
  );
}
const Styles = StyleSheet.create({
  HeadCon: {
    paddingLeft: 15,
    //    paddingTop: 32,
    //    backgroundColor: "red",
    fontSize: 20,
    color: "rgb(110,130,140)",
  },
});
