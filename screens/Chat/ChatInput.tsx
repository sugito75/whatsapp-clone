import { Box } from "@/components/ui/box";
import { Input, InputField, InputIcon } from "@/components/ui/input";
import useKeyboardVisible from "@/hooks/useKeyboardVisible";
import { SmileIcon } from "lucide-react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

const ChatInput = () => {
  const [text, setText] = useState("");
  const isKeyboardVisible = useKeyboardVisible();

  return (
    <KeyboardAvoidingView behavior="position">
      <Box
        style={{
          padding: 10,
          paddingBlock: isKeyboardVisible ? 40 : undefined,
        }}
        className="flex-row gap-3 items-center"
      >
        <Input
          className="rounded-full "
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            height: 40,
          }}
        >
          <InputIcon as={SmileIcon} />
          <InputField
            placeholder="text something..."
            onChangeText={setText}
            value={text}
          />
        </Input>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
