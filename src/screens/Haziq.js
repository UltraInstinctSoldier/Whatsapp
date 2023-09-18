import {
  ScrollView,
  TextInput,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

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

export default function Haziq({ navigation, route }) {
  const data = route.params;
  const goBack = () => {
    navigation.pop();
  };

  const cameraAccess = () => {
    navigation.navigate("BottomTabNavigation");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 85,
          backgroundColor: "rgb(30,43,50)",
          flexDirection: "row",
          alignItems: "flex-end",
          // paddingRight: 30,
        }}
      >
        <View
          style={{
            top: 5,
            marginRight: 50,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 65,
          }}
        >
          <TouchableOpacity onPress={goBack} style={{ marginLeft: 5 }}>
            <Ionicons name="arrow-back" size={25} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 0.7,
              backgroundColor: "transparent",
            }}
          >
            <TouchableOpacity>
              <Image
                source={{
                  uri: userData[5].image,
                  width: 45,
                  height: 45,
                }}
                style={{
                  borderRadius: 100,
                  marginRight: 5,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 17, color: "white" }}>
              {userData[5].name}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              flex: 0.3,
              backgroundColor: "transparent",
            }}
          >
            <TouchableOpacity style={{ paddingLeft: 1 }}>
              <FontAwesome5 name="video" size={17} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: 23 }}>
              <Ionicons name="call" size={20} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: 23 }}>
              <Ionicons name="md-ellipsis-vertical" color={"white"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ImageBackground
        style={{ flex: 1, flexDirection: "row" }}
        source={{ uri: "https://wallpapercave.com/wp/wp6988787.png" }}
      >
        <View
          style={{
            // flex: 1,
            backgroundColor: "transparent",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 15,
              flexWrap: "wrap",
              marginTop: 30,
              // flex: 1,
            }}
          >
            <Text
              style={{
                color: "white",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,

                paddingLeft: 10,
                fontSize: 15,
                paddingRight: 10,
                lineHeight: 30,
                backgroundColor: "rgb(30,43,50)",
              }}
            >
              {data.newestMessage}
              {/* {"\n"} */}
              <Text
                style={{
                  color: "rgb(120,130,140)",
                  fontSize: 10,
                  padding: 10,
                  position: "absolute",
                  backgroundColor: "transparent",
                }}
              >
                {data.dateTime}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.08,
            alignSelf: "flex-start",
            marginLeft: 3,
            marginBottom: 8,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "rgb(30,43,50)",
            width: "85%",
            borderRadius: 50,
            flexDirection: "row",
            bottom: 0,
            left: 0,
            position: "absolute",
          }}
        >
          <TouchableOpacity style={{ paddingLeft: 5 }}>
            <Ionicons name="happy" color={"rgb(120,130,140)"} size={26} />
          </TouchableOpacity>
          <TextInput
            numberOfLines={2}
            scrollEnabled
            multiline={true}
            placeholder="Message"
            placeholderTextColor={"rgb(120,130,140)"}
            style={{
              flex: 1,
              paddingLeft: 10,
              fontSize: 18,
              color: "white",
            }}
          />
          <View
            style={{
              flex: 0.4,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, paddingLeft: 13, paddingRight: 12 }}
            >
              <Image
                source={require("../../assets/attach.png")}
                style={{
                  resizeMode: "contain",
                  width: 22,
                  height: 22,
                  tintColor: "rgb(120,130,140)",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={cameraAccess}>
              <FontAwesome5
                name="camera"
                size={21}
                color={"rgb(120,130,140)"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flex: 0.1,
            paddingLeft: 10,
            bottom: 8,
            right: 6,
            position: "absolute",
          }}
        >
          <View
            style={{
              backgroundColor: "rgb(0,175,140)",
              // flex: 1,
              height: 47,
              width: 47,
              //marginLeft: 22,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Image
              source={require("../../assets/mic.png")}
              style={{
                tintColor: "white",
                width: 23,
                height: 23,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
