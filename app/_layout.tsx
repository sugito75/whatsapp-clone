import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

export default function RootLayout() {
  return (
    // <SafeAreaView className="flex-1">
    <GluestackUIProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="camera" />
        <Stack.Screen name="chat" />
      </Stack>
    </GluestackUIProvider>
    // </SafeAreaView>
  );
}
