import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <Tabs
        screenOptions={{
          headerShown: false,
          animation: "shift",
          tabBarStyle: { display: "none" },
        }}
      >
        <Tabs.Screen name="login" />
        <Tabs.Screen name="register" />
      </Tabs>
    </SafeAreaView>
  );
};

export default _layout;
