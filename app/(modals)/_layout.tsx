import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="new-chat"
        options={{
          title: "Select Contact",
        }}
      />
      <Stack.Screen
        name="new-group"
        options={{
          title: "New Group",
        }}
      />
      <Stack.Screen
        name="new-contact"
        options={{
          title: "New Contact",
        }}
      />
    </Stack>
  );
};

export default _layout;
