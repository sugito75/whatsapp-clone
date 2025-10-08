import React from "react";
import { ScrollView, View } from "react-native";
import CallsBox from "./CallsBox";
import CallsHeader from "./CallsHeader";

const CallsScreen = () => {
  return (
    <View className="p-3 flex-1" style={{ backgroundColor: "white" }}>
      <CallsHeader />
      <ScrollView style={{ marginTop: 30 }}>
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
        <CallsBox />
      </ScrollView>
    </View>
  );
};

export default CallsScreen;
