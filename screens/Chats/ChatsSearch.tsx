import { Box } from "@/components/ui/box";
import { Input, InputField, InputIcon } from "@/components/ui/input";
import { Search } from "lucide-react-native";
import React from "react";

const ChatsSearch = () => {
  return (
    <Box style={{ padding: 10 }}>
      <Input
        className="rounded-full border-0 px-3 gap-4"
        style={{ backgroundColor: "#f2f2f0", height: 50 }}
      >
        <InputIcon as={Search} size={"lg"} />
        <InputField placeholder="Search chats" />
      </Input>
    </Box>
  );
};

export default ChatsSearch;
