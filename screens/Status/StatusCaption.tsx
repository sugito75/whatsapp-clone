import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Icon } from "@/components/ui/icon";
import { Eye } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const StatusCaption = (props: any) => {
  return (
    <Box
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(105,104, 104, 0.25)",
        minHeight: 100,
        width: "100%",
      }}
    >
      <Center
        className="p-3  flex-1"
        style={{ justifyContent: "space-between" }}
      >
        <Text style={{ color: "white" }}>Ini Caption status</Text>
        <TouchableOpacity
          className="flex-row gap-1"
          onPress={props.onOpenViewer}
        >
          <Icon as={Eye} color="white" />
          <Text style={{ color: "white" }}>10</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  );
};

export default StatusCaption;
