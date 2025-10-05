import ChatScreen from "@/screens/Chat";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1">
      <ChatScreen />
    </SafeAreaView>
  );
};

export default Chat;
