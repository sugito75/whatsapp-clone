import defaultBg from "@/assets/images/default_bg.jpeg";
import React from "react";
import { ImageBackground, View } from "react-native";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatScreen = () => {
  return (
    <ImageBackground
      className="flex-1"
      source={defaultBg}
      style={{ width: "100%" }}
    >
      <ChatHeader />
      <View className="flex-1"></View>
      <ChatInput />
    </ImageBackground>
  );
};

export default ChatScreen;
