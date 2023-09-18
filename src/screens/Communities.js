import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import React from "react";
import CommunityLogo from "../../assets/community.png";

export default function Communities({ navigation }) {
  const onCommunityButtonPress = () => {
    navigation.navigate("StartCommunity");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(18,30,35)",
      }}
    >
      <ScrollView>
        <View style={styles.ComImgLogoCon}>
          <Image
            source={CommunityLogo}
            style={{ resizeMode: "contain", width: 230, height: 160 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 25, paddingTop: 30 }}>
            Introducing communities
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            // backgroundColor: "white",
            width: 350,
          }}
        >
          <Text
            style={{
              color: "rgb(110,130,140)",
              fontSize: 16.1,
              textAlign: "center",
              paddingTop: 10,
            }}
          >
            Easily organise your related groups and send announcements. Now,
            your communities, like neighbourhoods or schools, can have their own
            space.
          </Text>
        </View>
        <View
          style={{
            height: 145,
            flex: 1,
            //            backgroundColor: "yellow",
            alignItems: "center",
            paddingTop: 45,
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              alignItems: "center",
              backgroundColor: "rgb(0,175,140)",
              width: "100%",
              borderRadius: 100,
              justifyContent: "center",
            }}
            onPress={onCommunityButtonPress}
          >
            <Text>Start your community</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ComImgLogoCon: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 2,
    flex: 1,
  },
});
