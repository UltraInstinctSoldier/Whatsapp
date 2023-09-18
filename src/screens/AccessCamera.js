import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef } from "react";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import flashOff from "../../assets/flash-off.png";
import flashOn from "../../assets/flash-on.png";
import { useState } from "react";
import React from "react";

function AccessCamera({ navigation }) {
  const [camPermission, requestCamPermission] = useState();

  const [changeflashIcon, setChangeflashIcon] = useState(flashOff);
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(20);
  const [changeCamera, setChangeCamera] = useState(CameraType.front);
  const [pictureURI, setPictureURI] = useState([]);
  const cameraRef = useRef();
  const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.on);

  useEffect(() => {
    const startCamera = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        //start the camera preview
        cameraRef.current?.resumePreview();
      } else {
        Alert.alert("Camera permission not granted");
      }
    };
    startCamera();
    return () => {
      //stop the camera preview when component unmounts
      cameraRef.current?.pausePreview();
    };
  }, []);

  const flashOnOff = () => {
    if (changeflashIcon === flashOff) {
      setChangeflashIcon(flashOn);
      setCameraFlash(Camera.Constants.FlashMode.on);
      setWidth(25);
      setHeight(25);
    } else if (changeflashIcon === flashOn) {
      setChangeflashIcon(flashOff);
      setCameraFlash(Camera.Constants.FlashMode.off);
      setHeight(20);
      setHeight(20);
    }
  };

  const CloseCameraScreen = () => {
    navigation.pop();
  };

  const takePicture = () => {
    cameraRef.current
      .takePictureAsync()
      .then((response) => {
        setPictureURI((prevImageStore) => [
          { uri: response.uri },
          ...prevImageStore,
        ]);
        console.log(pictureURI);
      })
      .catch((error) => {
        Alert.alert("Couldn't take picture");
      });
  };

  const ChnageCameraFrontOrBack = () => {
    if (changeCamera === CameraType.front) {
      setChangeCamera(CameraType.back);
    } else if (changeCamera === CameraType.back) {
      setChangeCamera(CameraType.front);
    }
  };

  const getImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
      setPictureURI((prevImageStore) => [
        { uri: result.assets[0].uri },
        ...prevImageStore,
      ]);
    }
    // else {
    // alert("You did not select any image.");
    // }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "rgb(18,30,35)" }}>
      <View
        style={{
          height: "94%",
          wdith: "100%",
          top: 45,
          backgroundColor: "orange",
        }}
      >
        <Camera
          style={{
            // flex: 0.887,
            backgroundColor: "rgb(18,30,35)",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          ratio="16:9"
          type={changeCamera}
          ref={cameraRef}
          flashMode={cameraFlash}
        >
          <View
            style={{
              flexDirection: "row",
              // flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
              backgroundColor: "transparent",
              width: "96%",
              height: "5%",
            }}
          >
            <TouchableOpacity
              onPress={CloseCameraScreen}
              style={{
                flex: 0.1,
                top: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="close" size={25} style={{ color: "white" }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={flashOnOff}
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <Image
                source={changeflashIcon}
                style={{
                  tintColor: "white",
                  width: width,
                  height: height,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-end",
              backgroundColor: "transparent",
              width: "97%",
              // bottom: 10,
            }}
          >
            <FlatList
              horizontal
              data={pictureURI}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: "transparent",
                    flex: 0.1,
                    marginRight: 5,
                  }}
                >
                  <Image
                    source={{ uri: item.uri }}
                    style={{ width: 70, height: 70, resizeMode: "cover" }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              flex: 0.17,
              justifyContent: "space-between",
              alignItems: "flex-end",
              backgroundColor: "transparent",
              alignContent: "center",
              width: "97%",
              bottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(18,30,35,0.4)",
                bottom: 10,
              }}
              onPress={getImage}
            >
              <Ionicons name="image" size={25} style={{ color: "white" }} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                bottom: 2,
              }}
              onPress={takePicture}
            >
              <Image
                source={require("../../assets/capture.png")}
                style={{
                  width: 70,
                  height: 70,
                  tintColor: "white",
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ChnageCameraFrontOrBack}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(18,30,35,0.4)",
                bottom: 10,
              }}
            >
              <Image
                source={require("../../assets/ChangeCamera.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "white",
                }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  );
}
export { AccessCamera };
