import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
