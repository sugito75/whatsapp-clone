import { Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import { CircleDashed, MessageSquareText, Phone } from "lucide-react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#59ce72",
      }}
    >
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <Icon color={color} as={MessageSquareText} />
          ),
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarIcon: ({ color }) => <Icon color={color} as={CircleDashed} />,
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color }) => <Icon color={color} as={Phone} />,
        }}
      />
    </Tabs>
  );
};

export default _layout;
