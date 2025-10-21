import { TouchableHighlightProps, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { LucideIcon } from "lucide-react-native";

export type INewChatButton = {
  icon?: LucideIcon;
  label?: string;
} & TouchableHighlightProps;

const NewChatButton = ({ icon, label, ...props }: INewChatButton) => {
  return (
    <TouchableOpacity style={{ paddingBlock: 10 }} {...props}>
      <Box className="flex-row items-center gap-3">
        <Center
          className="bg-primary-0 rounded-full"
          style={{ width: 40, height: 40 }}
        >
          <Icon as={icon} size={"2xl"} color="white" />
        </Center>
        <Text bold size={"lg"}>
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default NewChatButton;
