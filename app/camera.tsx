import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import React from "react";
import { Alert, View } from "react-native";

const Camera = () => {
  const [permission] = useCameraPermissions();

  if (!permission) return <View />;

  if (!permission.granted) {
    Alert.alert("Camera permission is denied");
    router.replace("/(tabs)/chats");
    return null;
  }

  return <CameraView style={{ flex: 1 }}></CameraView>;
};

export default Camera;
