import defaultIcon from "@/assets/images/default_icon.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { config } from "@/constants/config";
import useContactStore from "@/store/useContactStore";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ChatHeader = () => {
  const { selectedContact } = useContactStore();

  return (
    <Box style={{ backgroundColor: "white", padding: 10 }}>
      <Box className="flex-row gap-4 items-center">
        <TouchableOpacity onPress={() => router.replace("/(tabs)/chats")}>
          <Icon as={ArrowLeft} size={"large"} />
        </TouchableOpacity>
        <Box className="flex-row gap-3">
          <Avatar size={"md"}>
            <AvatarImage
              source={
                !selectedContact?.icon
                  ? defaultIcon
                  : {
                      uri: `${config.API.BASE_URL}/icons/${selectedContact?.icon}`,
                    }
              }
            />
          </Avatar>
          <Box>
            <Text bold>{selectedContact?.displayName}</Text>
            <Text>Online</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatHeader;
