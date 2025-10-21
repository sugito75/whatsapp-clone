import { View } from "react-native";
import { Fab, FabIcon } from "@/components/ui/fab";
import ChatsBox from "./ChatsBox";
import ChatsHeader from "./ChatsHeader";
import ChatsSearch from "./ChatsSearch";
import { MessageCirclePlus } from "lucide-react-native";
import { router } from "expo-router";

const ChatsScreen = () => {
  return (
    <View
      className="flex-1 "
      style={{ backgroundColor: "white", paddingTop: 40 }}
    >
      <ChatsHeader />
      <ChatsSearch />
      <ChatsBox />
      <Fab
        size={"xl"}
        placement="bottom right"
        className="bg-primary-0"
        onPress={() => router.push("/new-chat")}
      >
        <FabIcon as={MessageCirclePlus} />
      </Fab>
    </View>
  );
};

export default ChatsScreen;
