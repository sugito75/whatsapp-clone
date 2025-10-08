import myBini from "@/assets/images/my-wife.jpeg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { MoveDownLeft, Phone } from "lucide-react-native";
import React from "react";

const CallsBox = () => {
  return (
    <Box
      className="flex-row items-center"
      style={{
        justifyContent: "space-between",
        paddingInline: 10,
        marginTop: 20,
      }}
    >
      <Box className="flex-row gap-3">
        <Avatar size={"lg"}>
          <AvatarImage source={myBini} />
        </Avatar>
        <Box>
          <Text size={"lg"}>My Bini</Text>
          <Box className="flex-row gap-1">
            <Icon as={MoveDownLeft} color="#59ce72" />
            <Text>Yesterday, 20.10</Text>
          </Box>
        </Box>
      </Box>
      <Icon as={Phone} />
    </Box>
  );
};

export default CallsBox;
