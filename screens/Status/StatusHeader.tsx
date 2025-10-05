import { Box } from "@/components/ui/box";
import React from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const statuses = [{ isViewed: true }, { isViewed: false }, { isViewed: false }];

const StatusHeader = () => {
  return (
    <Box
      className="flex-row p-3 gap-1"
      style={{ width, borderRightColor: "red" }}
    >
      {statuses.map((status, i) => (
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
  );
};

export default StatusHeader;
