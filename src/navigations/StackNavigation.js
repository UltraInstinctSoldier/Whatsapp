import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartCommunity from "../screens/StartCommunity";
import Communities from "../screens/Communities";
import ChatsTab from "../screens/ChatsTab";
import Huzefa from "../screens/Huzefa";
import AbddulMalik from "../screens/AbddulMalik";
import Arish from "../screens/Arish";
import Ayan from "../screens/Ayan";
import Abdullah from "../screens/Abdullah";
import Haris from "../screens/Haris";
import Hasham from "../screens/Hasham";
import Gulzaib from "../screens/Gulzaib";
import Abis from "../screens/Abis";
import Haziq from "../screens/Haziq";
import { BottomTabNavigation } from "./BottomTabBarCameraOption";

import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./mainNavigator";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const StackOver = createNativeStackNavigator();

const userData = [
  {
    image:
      "https://brandslogos.com/wp-content/uploads/images/large/dragon-ball-z-logo.png",
    name: "Huzefa",
    newestMessage: "Milte han phr.😊",
    dateTime: "12:22 am",
    icon: "circle",
    isStatus: 2,
    onChatPress: "HuzefaChat",
    textColor: "rgb(0,175,140)",
    messageCount: 3,
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/125-1255921_dragon-ball-super-by-urielalv-z-warriors-goku.png",
    name: "Arish",
    newestMessage: "Once Open A time...",
    dateTime: "08:57 pm",
    icon: "circle",
    isStatus: 0,
    onChatPress: "ArishChat",
    textColor: "rgb(0,175,140)",
    messageCount: 3,
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/824-8243779_dragon-ball-z-dragon.png",
    name: "Abis",
    newestMessage: "Done kro👍",
    dateTime: "07:22 pm",
    icon: "circle",
    isStatus: 2,
    onChatPress: "AbisChat",
    textColor: "rgb(0,175,140)",
    messageCount: 3,
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/87-874712_render-dragon-ball-z-pikkon-dragon-ball-z.png",
    name: "Hasham",
    newestMessage: "Kal cchalten han mcdonalds...",
    dateTime: "05:07 pm",
    icon: "",
    isStatus: 2,
    onChatPress: "HashamChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/19-196550_goku-vegeta-more-dragon-ball-z-vegeta-y.png",
    name: "Ayan",
    newestMessage: "Dubai me ho aj kal...",
    dateTime: "02:45 pm",
    icon: "",
    isStatus: 0,
    onChatPress: "AyanChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://a0.anyrgb.com/pngimg/580/1896/goku-ultra-instinct-ultra-instinct-super-saiyan-goku-android-17-instinct-dragon-ball-xenoverse-2-dragon-ball-xenoverse-dragon-ball-z-dokkan-battle-goku-black-dragon-ball-gt.png",
    name: "Haziq",
    newestMessage: "Circket🏏 khelen ge farm me...",
    dateTime: "Yesterday",
    icon: "",
    isStatus: 0,
    onChatPress: "HaziqChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dbq6wx0-1823a3a4-d5f8-4d31-b7f3-57701b36c7d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGJxNnd4MC0xODIzYTNhNC1kNWY4LTRkMzEtYjdmMy01NzcwMWIzNmM3ZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ivO0HCITtoPdkwGkH7N02DfIcWoK4mxw16nx-UvkztM",
    name: "Abddul Malik",
    newestMessage: "Mera Visa a gaya...",
    dateTime: "13/05/2023",
    icon: "",
    isStatus: 2,
    onChatPress: "AbddulMalikChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Abdullah",
    newestMessage: "thk hai okay.",
    dateTime: "05/05/2023",
    icon: "",
    isStatus: 0,
    onChatPress: "AbdullahChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images.pexels.com/photos/1858115/pexels-photo-1858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Gulzaib",
    newestMessage: "Bike ghar khari hai...",
    dateTime: "27/04/2023",
    icon: "",
    isStatus: 0,
    onChatPress: "GulzaibChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images.pexels.com/photos/910086/pexels-photo-910086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Haris",
    newestMessage: "ho jaye ga kam.",
    dateTime: "21/04/2023",
    icon: "",
    isStatus: 2,
    onChatPress: "HarisChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://brandslogos.com/wp-content/uploads/images/large/dragon-ball-z-logo.png",
    name: "Huzefa",
    newestMessage: "Milte han phr.😊",
    dateTime: "12:22 am",
    icon: "circle",
    isStatus: 2,
    onChatPress: "HuzefaChat",
    textColor: "rgb(0,175,140)",
    messageCount: 3,
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/125-1255921_dragon-ball-super-by-urielalv-z-warriors-goku.png",
    name: "Arish",
    newestMessage: "Once Open A time...",
    dateTime: "08:57 pm",
    icon: "circle",
    isStatus: 0,
    onChatPress: "ArishChat",
    textColor: "rgb(0,175,140)",
    messageCount: 3,
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/824-8243779_dragon-ball-z-dragon.png",
    name: "Abis",
    newestMessage: "Done kro👍",
    dateTime: "07:22 pm",
    icon: "circle",
    isStatus: 2,
    onChatPress: "AbisChat",
    textColor: "rgb(0,175,140)",
    messageCount: 3,
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/87-874712_render-dragon-ball-z-pikkon-dragon-ball-z.png",
    name: "Hasham",
    newestMessage: "Kal cchalten han mcdonalds...",
    dateTime: "05:07 pm",
    icon: "",
    isStatus: 2,
    onChatPress: "HashamChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://www.pngkit.com/png/full/19-196550_goku-vegeta-more-dragon-ball-z-vegeta-y.png",
    name: "Ayan",
    newestMessage: "Dubai me ho aj kal...",
    dateTime: "02:45 pm",
    icon: "",
    isStatus: 0,
    onChatPress: "AyanChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://a0.anyrgb.com/pngimg/580/1896/goku-ultra-instinct-ultra-instinct-super-saiyan-goku-android-17-instinct-dragon-ball-xenoverse-2-dragon-ball-xenoverse-dragon-ball-z-dokkan-battle-goku-black-dragon-ball-gt.png",
    name: "Haziq",
    newestMessage: "Circket🏏 khelen ge farm me...",
    dateTime: "Yesterday",
    icon: "",
    isStatus: 0,
    onChatPress: "HaziqChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dbq6wx0-1823a3a4-d5f8-4d31-b7f3-57701b36c7d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGJxNnd4MC0xODIzYTNhNC1kNWY4LTRkMzEtYjdmMy01NzcwMWIzNmM3ZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ivO0HCITtoPdkwGkH7N02DfIcWoK4mxw16nx-UvkztM",
    name: "Abddul Malik",
    newestMessage: "Mera Visa a gaya...",
    dateTime: "13/05/2023",
    icon: "",
    isStatus: 2,
    onChatPress: "AbddulMalikChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Abdullah",
    newestMessage: "thk hai okay.",
    dateTime: "05/05/2023",
    icon: "",
    isStatus: 0,
    onChatPress: "AbdullahChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images.pexels.com/photos/1858115/pexels-photo-1858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Gulzaib",
    newestMessage: "Bike ghar khari hai...",
    dateTime: "27/04/2023",
    icon: "",
    isStatus: 0,
    onChatPress: "GulzaibChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
  {
    image:
      "https://images.pexels.com/photos/910086/pexels-photo-910086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Haris",
    newestMessage: "ho jaye ga kam.",
    dateTime: "21/04/2023",
    icon: "",
    isStatus: 2,
    onChatPress: "HarisChat",
    textColor: "rgb(110,130,140)",
    messageCount: "",
    openChat: "Huzefa",
  },
];

export function MainScreen({ navigation }) {
  return (
    <NavigationContainer>
      <StackOver.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(30,43,50)",
          },
          headerTintColor: "rgb(110,130,140)",
          headerShown: false,
        }}
      >
        <StackOver.Screen
          name="WhataApp"
          component={MainNavigator}
          // options={{
          // headerTitle: () => (
          //   <View style={{ flex: 1 }}>
          //     <View
          //       style={{
          //         flex: 1,
          //         backgroundColor: "rgb(30,43,50)",
          //         paddingBottom: 10,
          //         flexDirection: "row",
          //         alignItems: "flex-end",
          //         paddingTop: 14,
          //       }}
          //     >
          //       <View
          //         style={{
          //           flex: 0.8,
          //           alignItems: "flex-start",
          //         }}
          //       >
          //         <Text style={Styles.HeadCon}>WhatsApp</Text>
          //       </View>

          //       <View
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           justifyContent: "space-around",
          //           flex: 0.4,
          //           paddingRight: 12,
          //         }}
          //       >
          //         <TouchableOpacity onPress={cameraAccess}>
          //           <Ionicons
          //             name="camera-outline"
          //             color={"rgb(110,130,140)"}
          //             size={25}
          //           />
          //         </TouchableOpacity>
          //         <TouchableOpacity
          //           style={{
          //             alignItems: "center",
          //             justifyContent: "center",
          //           }}
          //         >
          //           <Ionicons
          //             name="search-sharp"
          //             color={"rgb(110,130,140)"}
          //             size={23}
          //           />
          //         </TouchableOpacity>
          //         <TouchableOpacity>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"rgb(110,130,140)"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   </View>
          // ),
          // }}
        />
        <StackOver.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <StackOver.Screen
          name="Huzefa"
          component={Huzefa}
          // options={{
          //   headerBackVisible: false,
          //   headerRight: () => (
          //     <View
          //       style={{
          //         flex: 1,

          //         flexDirection: "row",
          //         alignItems: "center",
          //         // paddingRight: 30,
          //       }}
          //     >
          //       <TouchableOpacity onPress={goBack} style={{ marginLeft: 20 }}>
          //         <Ionicons name="arrow-back" size={25} color={"white"} />
          //       </TouchableOpacity>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           flex: 0.85,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[0].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[0].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 50 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Arish"
          component={Arish}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[1].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[1].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Abis"
          component={Abis}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[2].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[2].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Hasham"
          component={Hasham}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[3].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[3].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Ayan"
          component={Ayan}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[4].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[4].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Haziq"
          component={Haziq}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[5].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[5].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="AbddulMalik"
          component={AbddulMalik}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[6].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[6].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Abdullah"
          component={Abdullah}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[7].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[7].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Gulzaib"
          component={Gulzaib}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[8].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[8].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="Haris"
          component={Haris}
          // options={{
          //   headerTitle: () => (
          //     <View style={{ flex: 1, flexDirection: "row" }}>
          //       <TouchableOpacity
          //         style={{
          //           flexDirection: "row",
          //           alignItems: "center",
          //           padding: 5,
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity>
          //           <Image
          //             source={{
          //               uri: userData[9].image,
          //               width: 45,
          //               height: 45,
          //             }}
          //             style={{
          //               borderRadius: 100,
          //               marginRight: 5,
          //               resizeMode: "contain",
          //             }}
          //           />
          //         </TouchableOpacity>
          //         <Text style={{ fontSize: 17, color: "white" }}>
          //           {userData[9].name}
          //         </Text>
          //       </TouchableOpacity>
          //       <View
          //         style={{
          //           alignItems: "center",
          //           flexDirection: "row",
          //           flex: 0.5,
          //         }}
          //       >
          //         <TouchableOpacity style={{ paddingLeft: 10 }}>
          //           <FontAwesome5 name="video" size={17} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons name="call" size={20} color={"white"} />
          //         </TouchableOpacity>
          //         <TouchableOpacity style={{ paddingLeft: 23 }}>
          //           <Ionicons
          //             name="md-ellipsis-vertical"
          //             color={"white"}
          //             size={20}
          //           />
          //         </TouchableOpacity>
          //       </View>
          //     </View>
          //   ),
          // }}
        />
        <StackOver.Screen
          name="StartCommunity"
          component={StartCommunity}
          options={{
            title: "New Community",
            headerTintColor: "white",
            headerShown: true,
          }}
        />
      </StackOver.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  HeadCon: {
    // paddingLeft: 15,
    //    paddingTop: 32,
    //    backgroundColor: "red",
    fontSize: 20,
    color: "rgb(110,130,140)",
  },
});
