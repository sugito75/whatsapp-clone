import myBini from "@/assets/images/my-wife.jpeg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const StatusHeader = (props: any) => {
  return (
    <Box className="p-3 gap-3">
      <Box
        className="flex-row gap-1"
        style={{ width, borderRightColor: "red" }}
      >
        {props.statuses.map((status: any, i: number) => (
          <Box
            key={i}
            className="rounded-full"
            style={{
              height: 2,
              backgroundColor: status.isViewed ? "#fff" : "#ccc",
              flex: 1,
            }}
          ></Box>
        ))}
      </Box>
      <Box className="flex-row items-center gap-3">
        <Avatar>
          <AvatarImage source={myBini} />
        </Avatar>
        <Box>
          <Text bold style={{ color: "white" }}>
            You
          </Text>
          <Text style={{ color: "white" }}>Yesterday, 19.30</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default StatusHeader;
