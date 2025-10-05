import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import UpdatesRing from "./UpdatesRing";

const UpdatesBox = (props: any) => {
  return (
    <TouchableOpacity onPress={() => router.push("/status")}>
      <Box className="flex-row gap-4 items-center">
        <UpdatesRing segments={props.segments} thumbnail={props.thumb} />
        <Box>
          <Text size={"lg"} bold>
            {props.name}
          </Text>
          <Text className="sm">{props.time}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default UpdatesBox;
