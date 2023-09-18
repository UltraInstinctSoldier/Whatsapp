import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";

import React from "react";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function StartCommunity() {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        backgroundColor: "rgb(18,30,35)",
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            marginTop: 35,
            backgroundColor: "rgb(120,130,140)",
            width: 120,
            height: 120,
            borderRadius: 30,
            flex: 1,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Pressable style={{ paddingTop: 30 }}>
            <FontAwesome name="users" size={70} color={"lightgray"} />
          </Pressable>
          <Ionicons
            name="camera"
            size={25}
            style={{
              paddingLeft: 6,
              paddingRight: 2,
              paddingTop: 4,
              borderColor: "rgb(18,30,35)",
              alignSelf: "flex-end",
              backgroundColor: "rgb(0,175,140)",
              borderRadius: 100,
              borderWidth: 2,
              color: "white",
            }}
          />
        </View>
        <View
          style={{
            marginTop: 50,
            width: "93%",
            alignSelf: "center",
            flex: 1,
            borderBottomWidth: 2,
            borderBottomColor: "rgb(120,130,140)",
          }}
        >
          <Text
            style={{ paddingLeft: 10, color: "rgb(120,130,140)", fontSize: 16 }}
          >
            Community name
          </Text>
          <TextInput color={"white"} maxLength={100} onChangeText={setText} />
        </View>
        <View style={{ marginRight: 45, marginTop: 3, alignItems: "flex-end" }}>
          <Text style={{ color: "rgb(120,130,140)" }}>{text.length}/100</Text>
        </View>
        <View
          style={{
            marginTop: 50,
            width: "93%",
            height: 100,
            alignSelf: "center",
            flex: 1,
            borderBottomWidth: 2,
            borderBottomColor: "rgb(120,130,140)",
            backgroundColor: "rgb(27,42,45)",
            borderRadius: 10,
          }}
        >
          <TextInput
            color={"white"}
            placeholder="What's this community for? it's helpful to add rules for your members."
            placeholderTextColor={"rgb(120,130,140)"}
            multiline={true}
            style={{
              fontSize: 15,
              height: 100,
              //              backgroundColor: "red",
              paddingBottom: 35,
              marginLeft: 10,
              marginRight: 40,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
