import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import { CheckCheck } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ChatsBox = () => {
  return (
    <TouchableOpacity
      className="flex-row"
      style={{ padding: 15, justifyContent: "space-between" }}
      onPress={() => router.push("/chat")}
    >
      <Box className="flex-row gap-4">
        <Avatar size={"lg"}>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </Avatar>
        <Box>
          <Text bold>Lucy</Text>
          <Text>This is my last message</Text>
        </Box>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <Text>
          {new Date().getHours()}:{new Date().getMinutes().toFixed()}
        </Text>
        <Icon as={CheckCheck} />
      </Box>
    </TouchableOpacity>
  );
};

export default ChatsBox;
