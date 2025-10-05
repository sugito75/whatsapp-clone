import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { router } from "expo-router";
import { Camera } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import ChatsMenu from "./ChatsMenu";

const ChatsHeader = () => {
  return (
    <Box
      style={{
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="flex-row center"
    >
      <Heading size="2xl" style={{ color: "#59ce72", paddingStart: 10 }}>
        WhatsApp
      </Heading>
      <Box className="flex-row items-center gap-5">
        <TouchableOpacity onPress={() => router.push("/camera")}>
          <Icon as={Camera} />
        </TouchableOpacity>
        <ChatsMenu />
      </Box>
    </Box>
  );
};

export default ChatsHeader;
