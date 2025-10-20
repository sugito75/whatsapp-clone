import myBini from "@/assets/images/my-wife.jpeg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Text } from "@/components/ui/text";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const StatusHeader = (props: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      if (progress === 100) return;
      setProgress((prev) => prev + 1);
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <Box className="p-3 gap-3">
      <Box
        className="flex-row gap-1"
        style={{ width, borderRightColor: "red" }}
      >
        {props.statuses.map((status: any, i: number) => (
          <Box key={i} style={{ width: 110 }}>
            <Progress
              value={status.isViewed ? progress : 0}
              size={"xs"}
              style={{ overflow: "hidden" }}
            >
              <ProgressFilledTrack style={{ backgroundColor: "white" }} />
            </Progress>
          </Box>
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
