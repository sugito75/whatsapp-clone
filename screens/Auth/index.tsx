import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { router } from "expo-router";
import React from "react";

const AuthScreen = () => {
  const registerNumber = () => {
    router.replace("/(tabs)/chats");
  };

  return (
    <Box style={{ width: "80%" }}>
      <Heading>Register Your Phone Number</Heading>
      <Box className="gap-2">
        <Input
          className="border-0"
          style={{ borderColor: "#59ce72", borderBottomWidth: 2 }}
        >
          <InputSlot>
            <InputField placeholder="Your phone number" />
          </InputSlot>
        </Input>
        <Button style={{ backgroundColor: "#59ce72" }} onPress={registerNumber}>
          <ButtonText>Register</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default AuthScreen;
