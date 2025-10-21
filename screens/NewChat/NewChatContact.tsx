import defaultIcon from "@/assets/images/default_icon.png";
import React from "react";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const NewChatContact = () => {
  return (
    <TouchableOpacity onPress={() => router.replace("/chat")}>
      <Box className="flex-row items-center gap-3" style={{ paddingBlock: 10 }}>
        <Avatar>
          <AvatarImage source={defaultIcon} />
        </Avatar>
        <Box>
          <Text bold>Contact Name</Text>
          <Text>Bio</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default NewChatContact;
