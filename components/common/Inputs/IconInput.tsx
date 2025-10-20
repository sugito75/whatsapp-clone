import defaultIcon from "@/assets/images/default_icon.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "expo-router";
import { Camera } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { IIconInput } from "./type";

const IconInput = ({ onImagePick }: IIconInput) => {
  const [imageUri, setImageUri] = useState("");

  useFocusEffect(() => {
    return () => setImageUri("");
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
    });

    if (result.canceled) return;

    const [image] = result.assets;

    setImageUri(image.uri);
    onImagePick && onImagePick(image);
  };

  return (
    <Avatar size={"2xl"}>
      <AvatarImage source={!imageUri ? defaultIcon : { uri: imageUri }} />
      <TouchableHighlight style={styles.icon} onPress={pickImage}>
        <Icon as={Camera} color="white" />
      </TouchableHighlight>
    </Avatar>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    bottom: 0,
    right: 10,
    padding: 5,
    backgroundColor: "rgb(89, 206, 114)",
    borderRadius: "50%",
  },
});

export default IconInput;
