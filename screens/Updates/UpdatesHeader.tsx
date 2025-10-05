import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { EllipsisVertical, Search } from "lucide-react-native";
import React from "react";

const UpdatesHeader = () => {
  return (
    <Box
      className="flex-row "
      style={{
        paddingTop: 50,
        justifyContent: "space-between",
      }}
    >
      <Text size={"2xl"}>Updates</Text>
      <Box className="flex-row gap-4">
        <Icon as={Search} />
        <Icon as={EllipsisVertical} />
      </Box>
    </Box>
  );
};

export default UpdatesHeader;
