import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import useKeyboardVisible from "@/hooks/useKeyboardVisible";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

const StatusReply = () => {
  const isKeyboardVisible = useKeyboardVisible();

  return (
    <KeyboardAvoidingView behavior="position">
      <Box
        style={{
          padding: 10,
          paddingBlock: isKeyboardVisible ? 40 : undefined,
          backgroundColor: "rgba(105,104, 104, 0.25)",
        }}
        className="flex-row gap-3 items-center"
      >
        <Input
          className="rounded-full "
          style={{
            backgroundColor: "#444",
            width: "100%",
            padding: 10,
            height: 50,
            borderWidth: 0,
          }}
        >
          <InputField
            placeholder="Reply"
            placeholderTextColor={"white"}
            style={{ color: "white" }}
          />
        </Input>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default StatusReply;
