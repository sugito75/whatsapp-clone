import defaultBg from "@/assets/images/default_bg.jpeg";
import React from "react";
import { ImageBackground, View } from "react-native";
import ChatBox from "./ChatBox";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatScreen = () => {
  return (
    <ImageBackground className="flex-1" source={defaultBg}>
      <ChatHeader />
      <View className="flex-1">
        <ChatBox isSender={true} msg="Hello beb" />
        <ChatBox msg="haloo dear!!" />
      </View>
      <ChatInput />
    </ImageBackground>
  );
};

export default ChatScreen;
