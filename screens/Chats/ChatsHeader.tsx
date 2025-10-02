import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import React from "react";
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
      <ChatsMenu />
    </Box>
  );
};

export default ChatsHeader;
