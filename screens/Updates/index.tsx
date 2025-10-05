import lia from "@/assets/images/Lia.jpeg";
import myBini from "@/assets/images/my-wife.jpeg";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import React from "react";
import { View } from "react-native";
import UpdatesBox from "./UpdatesBox";
import UpdatesHeader from "./UpdatesHeader";

const UpdatesScreen = () => {
  return (
    <View
      className="flex-1 gap-8"
      style={{ backgroundColor: "white", paddingInline: 20 }}
    >
      <UpdatesHeader />
      <Box className="gap-3">
        <Heading>Status</Heading>
        <UpdatesBox name="My Status" time="20.10" segments={2} thumb={myBini} />
      </Box>
      <Box>
        <Text size={"sm"} style={{ marginBottom: 10 }}>
          Recent Updates
        </Text>
        <UpdatesBox name="My Bini" time="19.20" thumb={lia} />
      </Box>
    </View>
  );
};

export default UpdatesScreen;
