import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";

import { Text } from "@/components/ui/text";
import { CheckCheck } from "lucide-react-native";
import React from "react";

const ChatBox = (props: any) => {
  return (
    <Box
      className="p-3 flex-row"
      style={{ justifyContent: props?.isSender ? "flex-end" : "flex-start" }}
    >
      <Box
        style={{
          maxWidth: 200,
          backgroundColor: props?.isSender ? "#59ce72" : "white",
        }}
        className="rounded p-3 "
      >
        <Text>Hello world</Text>
        {props?.isSender && (
          <Box
            className="flex-row gap-1"
            style={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            <Text>
              {new Date().getHours()}:{new Date().getMinutes().toFixed()}
            </Text>
            <Icon size={"sm"} as={CheckCheck} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatBox;
