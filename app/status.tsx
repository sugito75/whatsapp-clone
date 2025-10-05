import StatusScreen from "@/screens/Status";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Status = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusScreen />
    </SafeAreaView>
  );
};

export default Status;
