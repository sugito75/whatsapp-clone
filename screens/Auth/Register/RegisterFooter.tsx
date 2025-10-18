import { Center } from "@/components/ui/center";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const RegisterFooter = () => {
  return (
    <Center style={{ marginTop: 10 }}>
      <Text>
        <Link className="text-primary-0 font-bold" href={"/(auth)/login"}>
          Login
        </Link>{" "}
        if you already have an account
      </Text>
    </Center>
  );
};

export default RegisterFooter;
