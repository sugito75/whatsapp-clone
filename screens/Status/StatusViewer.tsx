import myBini from "@/assets/images/my-wife.jpeg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React from "react";

const StatusViewer = () => {
  return (
    <Box className="flex-row gap-3 items-center p-3">
      <Avatar>
        <AvatarImage source={myBini} />
      </Avatar>
      <Box>
        <Text bold size={"lg"}>
          My Bini
        </Text>
        <Text>19.05</Text>
      </Box>
    </Box>
  );
};

export default StatusViewer;
