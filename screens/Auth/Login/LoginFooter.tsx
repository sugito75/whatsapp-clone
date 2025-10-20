import { Center } from "@/components/ui/center";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const LoginFooter = () => {
  return (
    <Center style={{ marginTop: 10 }}>
      <Text>
        <Link className="text-primary-0 font-bold" href={"/(auth)/register"}>
          Register
        </Link>{" "}
        {" if you don't have an account"}
      </Text>
    </Center>
  );
};

export default LoginFooter;
