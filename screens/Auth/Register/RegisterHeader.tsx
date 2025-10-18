import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import React from "react";

const RegisterHeader = () => {
  return (
    <Center>
      <Heading size={"2xl"} style={{ marginBottom: 20, textAlign: "center" }}>
        Welcome to NotYetNamedApp
      </Heading>
    </Center>
  );
};

export default RegisterHeader;
