import defaultIcon from "@/assets/images/default_icon.png";
import React from "react";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import useContactStore, { Contact } from "@/store/useContactStore";
import { config } from "@/constants/config";

export type INewChatContact = Pick<
  Contact,
  "icon" | "displayName" | "id" | "bio"
>;

const NewChatContact = ({ id, displayName, icon, bio }: INewChatContact) => {
  const { setSelectedContact } = useContactStore();

  const handlePress = () => {
    setSelectedContact(id);
    router.replace("/chat");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box className="flex-row items-center gap-3" style={{ paddingBlock: 10 }}>
        <Avatar>
          <AvatarImage
            source={
              !icon
                ? defaultIcon
                : { uri: `${config.API.BASE_URL}/icons/${icon}` }
            }
          />
        </Avatar>
        <Box>
          <Text bold>{displayName}</Text>
          <Text>{bio}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default NewChatContact;
