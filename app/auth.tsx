import AuthScreen from "@/screens/Auth";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  return (
    <SafeAreaView className="flex-1 center">
      <AuthScreen />
    </SafeAreaView>
  );
};

export default Auth;
