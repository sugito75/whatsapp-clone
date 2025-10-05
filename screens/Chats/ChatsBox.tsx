import myBini from "@/assets/images/my-wife.jpeg";
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
          <AvatarImage source={myBini} />
        </Avatar>
        <Box>
          <Text bold>My Bini</Text>
          <Box>
            <Icon as={CheckCheck} />
            <Text>Bukankah ini my</Text>
          </Box>
        </Box>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <Text>
          {new Date().getHours()}:{new Date().getMinutes().toFixed()}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default ChatsBox;
