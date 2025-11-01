import React from "react";
import { Box } from "@/components/ui/box";

import { UserPlus, Users } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import NewChatButton from "./NewChatButton";
import { ScrollView } from "react-native";
import NewChatContact from "./NewChatContact";
import { router } from "expo-router";
import useContactStore from "@/store/useContactStore";

const NewChatScreen = () => {
  const { contacts } = useContactStore();

  return (
    <Box className="flex-1 p-3 gap-3" style={{ backgroundColor: "white" }}>
      <Box>
        <NewChatButton
          icon={UserPlus}
          label="New Contact"
          onPress={() => router.push("/(modals)/new-contact")}
        />
        <NewChatButton
          icon={Users}
          label="New Group"
          onPress={() => router.push("/(modals)/new-group")}
        />
      </Box>
      <Box>
        <Text>Available Contacts</Text>
        <ScrollView style={{ maxHeight: 500 }}>
          {contacts.map((contact) => (
            <NewChatContact
              key={contact.id}
              displayName={contact.displayName}
              id={contact.id}
              bio={contact.bio}
              icon={contact.icon}
            />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default NewChatScreen;
