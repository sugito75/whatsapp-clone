import myBini from "@/assets/images/my-wife.jpeg";
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
            <AvatarImage source={myBini} />
          </Avatar>
          <Box>
            <Text bold>My Bini</Text>
            <Text>Online</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatHeader;
