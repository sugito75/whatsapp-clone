import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ChatHeader = () => {
  return (
    <Box style={{ backgroundColor: "white", padding: 10 }}>
      <Box className="flex-row gap-4 items-center">
        <TouchableOpacity onPress={() => router.replace("/(tabs)/chats")}>
          <Icon as={ArrowLeft} size={"large"} />
        </TouchableOpacity>
        <Box className="flex-row gap-3">
          <Avatar size={"md"}>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Avatar>
          <Box>
            <Text bold>Lucy</Text>
            <Text>Online</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatHeader;
