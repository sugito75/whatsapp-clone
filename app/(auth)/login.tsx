import PrimaryButton from "@/components/common/Buttons/PrimaryButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const login = () => {
  return (
    <View className="bg-white">
      <PrimaryButton
        text="Login"
        onPress={() => router.replace("/(auth)/register")}
      />
    </View>
  );
};

export default login;
