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
          minWidth: 140,
          backgroundColor: props?.isSender ? "#DCF8C6" : "white",
          padding: 5,
        }}
        className="rounded "
      >
        <Text>{props.msg}</Text>

        <Box
          className="flex-row gap-1 items-center"
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <Text size={"sm"}>
            {new Date().getHours()}:{new Date().getMinutes().toFixed()}
          </Text>
          {props.isSender && (
            <Icon size={"md"} as={CheckCheck} color="#34B7F1" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBox;
