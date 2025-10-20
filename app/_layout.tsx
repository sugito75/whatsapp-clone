import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import useAuth from "@/store/useAuth";

export default function RootLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <GluestackUIProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="camera" />
          <Stack.Screen name="chat" />
          <Stack.Screen name="status" />
        </Stack.Protected>
      </Stack>
    </GluestackUIProvider>
  );
}
