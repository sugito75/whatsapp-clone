import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import useAuthStore from "@/store/useAuthStore";
import resolveIconUri from "@/utils/resolveImageUri";

import { router } from "expo-router";
import { CheckCheck } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export type IChatsBox = {
  id: number;
  icon: string;
  title: string;
  newMessagesCount: number;
  lastMessage: {
    status: string;
    text: string;
    sentAt: Date;
    senderId: number;
  };
};

const ChatsBox = ({
  icon,
  title,
  newMessagesCount,
  lastMessage,
}: IChatsBox) => {
  const { userId } = useAuthStore();

  return (
    <TouchableOpacity
      className="flex-row "
      style={{ padding: 15, justifyContent: "space-between" }}
      onPress={() => router.push("/chat")}
    >
      <Box className="flex-row gap-4">
        <Avatar size={"lg"}>
          <AvatarImage source={resolveIconUri(icon)} />
        </Avatar>
        <Box>
          <Text bold>{title}</Text>
          <Box className="flex-row items-center gap-2">
            {lastMessage.senderId === userId && <Icon as={CheckCheck} />}
            <Text numberOfLines={1} style={{ maxWidth: 180 }}>
              {lastMessage.text}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box style={{ alignItems: "center" }} className="gap-2">
        <Text>{new Date(lastMessage.sentAt).toLocaleDateString()}</Text>
        {newMessagesCount !== 0 && (
          <Badge
            className="rounded-full"
            style={{ backgroundColor: "#59ce72" }}
          >
            <BadgeText>{newMessagesCount}</BadgeText>
          </Badge>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default ChatsBox;
