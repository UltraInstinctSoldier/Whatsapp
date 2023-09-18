import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function ChatsTab({ navigation }) {
  const onChatPress = (name, item) => {
    navigation.navigate(name, item);
    // navigation.setOptions({})
  };
  const Fotter = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 110,
        paddingTop: 20,
      }}
    >
      <Ionicons name="lock-closed" size={13} color={"rgb(110,130,140)"} />
      <Text style={{ paddingLeft: 5, color: "rgb(110,130,140)", fontSize: 12 }}>
        Your personal messages are
      </Text>
      <TouchableOpacity>
        <Text style={{ color: "rgb(0,175,140)", fontSize: 12, paddingLeft: 5 }}>
          end-to-end encrypted
        </Text>
      </TouchableOpacity>
    </View>
  );
  const chats = [
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
      openChat: "Arish",
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
      name: "AbddulMalik",
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
      name: "AbddulMalik",
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
  return (
    <View style={{ backgroundColor: "rgb(18,30,35)", flex: 1 }}>
      <FlatList
        data={chats}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onChatPress(item.name, item)}
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
              <Text style={{ color: "rgb(110,130,140)" }}>
                {item.newestMessage}
              </Text>
            </View>
            <View style={{ paddingRight: 10, alignItems: "flex-end" }}>
              <Text style={{ color: item.textColor, fontSize: 12 }}>
                {item.dateTime}
              </Text>
              <View
                style={{
                  backgroundColor: item.messageCount >= 1 ? item.textColor : "",
                  width: 20,
                  height: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                }}
              >
                <Text style={{ fontSize: 12 }}>{item.messageCount}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
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
