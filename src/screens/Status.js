import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";

import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
//import ChatsTab from "./ChatsTab";

export default function Status() {
  const [muteArrow, setMutearrow] = useState("chevron-down");
  const [showMuted, setShowMuted] = useState(false);

  const onMuteArrowPress = () => {
    if (muteArrow === "chevron-down") {
      setMutearrow("chevron-up");
      setShowMuted(true);
    } else {
      setMutearrow("chevron-down");
      setShowMuted(false);
    }
  };
  const headdder = () => (
    <View style={{ flex: 1, paddingLeft: 15, paddingTop: 15 }}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <ImageBackground
          style={{
            resizeMode: "contain",
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "black",
          }}
          source={require("../../assets/profile.png")}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Ionicons
              name="add"
              size={20}
              color={"white"}
              style={{
                borderRadius: 100,
                backgroundColor: "rgb(0,175,140)",
                //              resizeMode: "contain",
                width: 20,
              }}
            />
          </View>
        </ImageBackground>
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ color: "white", fontSize: 17 }}>My Status</Text>
          <Text style={{ color: "rgb(110,130,140)", fontSize: 15 }}>
            Tap to add status update
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: "rgb(110,130,140)" }}>Recent updates</Text>
      </View>
    </View>
  );

  const Fotter = () => (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "rgb(110,130,140)", paddingLeft: 15 }}>
          Muted updates
        </Text>
        <Pressable onPress={onMuteArrowPress} style={{ paddingRight: 25 }}>
          <Ionicons name={muteArrow} color={"rgb(0,175,140)"} size={20} />
        </Pressable>
      </View>
      {showMuted && (
        <View>
          <FlatList
            data={chats}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "flex-end" }}
              >
                <View
                  style={{
                    paddingLeft: 15,
                    paddingTop: 15,
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      borderWidth={item.isStatus}
                      style={styles.imageStyle}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingBottom: 15 }}>
                  <Text style={{ color: "white", fontSize: 15 }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "rgb(110,130,140)" }}>
                    {item.dateTime}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: 110,
          paddingTop: 20,
        }}
      >
        <Ionicons name="lock-closed" size={13} color={"rgb(110,130,140)"} />
        <Text
          style={{ paddingLeft: 5, color: "rgb(110,130,140)", fontSize: 12 }}
        >
          Your status updates are
        </Text>
        <TouchableOpacity>
          <Text
            style={{ color: "rgb(0,175,140)", fontSize: 12, paddingLeft: 5 }}
          >
            end-to-end encrypted
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const chats = [
    {
      image:
        "https://brandslogos.com/wp-content/uploads/images/large/dragon-ball-z-logo.png",
      name: "Huzefa",
      newestMessage: "Milte han phr.😊",
      dateTime: "Today 12:22 am",
      icon: "circle",
      isStatus: 2,
      onChatPress: "HuzefaChat",
      textColor: "rgb(0,175,140)",
      messageCount: 3,
    },
    {
      image:
        "https://www.pngkit.com/png/full/824-8243779_dragon-ball-z-dragon.png",
      name: "Abis",
      newestMessage: "Done kro👍",
      dateTime: "Today 07:22 pm",
      icon: "circle",
      isStatus: 2,
      onChatPress: "AbisChat",
      textColor: "rgb(0,175,140)",
      messageCount: 3,
    },
    {
      image:
        "https://www.pngkit.com/png/full/87-874712_render-dragon-ball-z-pikkon-dragon-ball-z.png",
      name: "Hasham",
      newestMessage: "Kal cchalten han mcdonalds...",
      dateTime: "Today 05:07 pm",
      icon: "",
      isStatus: 2,
      onChatPress: "HashamChat",
      textColor: "rgb(110,130,140)",
      messageCount: "",
    },
    {
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dbq6wx0-1823a3a4-d5f8-4d31-b7f3-57701b36c7d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGJxNnd4MC0xODIzYTNhNC1kNWY4LTRkMzEtYjdmMy01NzcwMWIzNmM3ZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ivO0HCITtoPdkwGkH7N02DfIcWoK4mxw16nx-UvkztM",
      name: "Abddul Malik",
      newestMessage: "Mera Visa a gaya...",
      dateTime: "Yesterday 9:11 pm",
      icon: "",
      isStatus: 2,
      onChatPress: "AbddulMalikChat",
      textColor: "rgb(110,130,140)",
      messageCount: "",
    },
    {
      image:
        "https://images.pexels.com/photos/910086/pexels-photo-910086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Haris",
      newestMessage: "ho jaye ga kam.",
      dateTime: "Yesterday 6:44 pm",
      icon: "",
      isStatus: 2,
      onChatPress: "HarisChat",
      textColor: "rgb(110,130,140)",
      messageCount: "",
    },
  ];
  return (
    <View vertical style={{ backgroundColor: "rgb(18,30,35)", flex: 1 }}>
      <FlatList
        data={chats}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "flex-end" }}
          >
            <View
              style={{
                paddingLeft: 15,
                paddingTop: 15,
              }}
            >
              <TouchableOpacity>
                <Image
                  borderWidth={item.isStatus}
                  style={styles.imageStyle}
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingBottom: 15 }}>
              <Text style={{ color: "white", fontSize: 15 }}>{item.name}</Text>
              <Text style={{ color: "rgb(110,130,140)" }}>{item.dateTime}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={headdder}
        ListFooterComponent={Fotter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 100,
    borderColor: "rgb(0,175,140)",
  },
});
